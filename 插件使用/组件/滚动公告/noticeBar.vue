<template>
  <div ref="wrap" class="notice-bar">
    <div
      ref="content"
      :style="contentStyle"
      :class="animationClass"
      class="notice-bar__content"
      v-html="text"
      @click="onClick"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'NoticeBar',
  props: {
    text: String,
    speed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      delay: 1.2,
      wrapWidth: 0,
      offsetWidth: 0,
      duration: 0,
      firstRound: true,
      animationClass: '',
      hover: false
    }
  },
  watch: {
    text: {
      handler: function() {
        this.$nextTick(() => {
          const wrap = this.$refs.wrap
          const content = this.$refs.content
          if (!wrap || !content) {
            return
          }
          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width
          if (offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
            this.animationClass = 'notice-bar__play'
          }
        })
      },
      immediate: true
    }
  },
  computed: {
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's',
        animationPlayState: this.hover ? 'paused' : 'running'
      }
    }
  },
  mounted() {
    const content = this.$refs.content
    content.addEventListener('animationend', this.onAnimationEnd)
    content.addEventListener('webkitAnimationEnd', this.onAnimationEnd)
    const wrap = this.$refs.wrap
    wrap.addEventListener('mouseover', this.onHover)
    wrap.addEventListener('mouseleave', this.onLeave)
  },
  beforeDestroy() {
    const content = this.$refs.content
    content.removeEventListener('animationend', this.onAnimationEnd)
    content.removeEventListener('webkitAnimationEnd', this.onAnimationEnd)
    const wrap = this.$refs.wrap
    wrap.removeEventListener('mouseover', this.onHover)
    wrap.removeEventListener('mouseleave', this.onLeave)
  },
  methods: {
    onAnimationEnd() {
      this.firstRound = false
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed
        this.animationClass = 'notice-bar__play--infinite'
      })
    },
    onHover() {
      this.hover = true
    },
    onLeave() {
      this.hover = false
    },
    onClick(){
        this.$emit("onClick")
    }
  }
}
</script>

<style lang="less" scoped>
.notice-bar {
  display: flex;
  align-items: center;
  width: 100%;
 
  overflow: hidden;
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  &__content {
    white-space: nowrap;
  }
  &__play {
    animation: play linear both;
    &--infinite {
      animation: play-infinite linear infinite both;
    }
  }

}
@keyframes play {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes play-infinite {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
