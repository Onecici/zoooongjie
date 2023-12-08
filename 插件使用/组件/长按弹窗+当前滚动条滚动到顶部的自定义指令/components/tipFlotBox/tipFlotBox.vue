<template>
    <transition name="tipBox">
        <span ref="tipContent" v-if="show" class="tipContent" :style="tipStyle">{{ tipText }}</span>
    </transition>
</template>
<script>

export default {
    data() {
        return {
            show: false,
            tipText: '',
            coordinate: {}
        };
    },
    computed: {
        tipStyle() {
            let { x = 0, y = 0 } = this.coordinate;

            return {
                top: y + 'px',
                left: x + 'px'
            };
        }
    },
    mounted() {
        this.initListener()
    },
    methods: {
        // 显示
        showTipFlotBox({ msg, options: { coordinate, offset } }) {
            const screenWidth = document.documentElement.clientWidth;
            this.show = true;
            this.tipText = msg;
            this.$nextTick(() => {
                const tipBox = this.$refs.tipContent;
                const tipBoxWidth = tipBox.offsetWidth;

                let x = coordinate.x - 10

                if (x > screenWidth / 2 && x - tipBoxWidth < 0) {
                    x = screenWidth - tipBoxWidth
                } else if (x - tipBoxWidth < 0) {
                    x = 0
                } else if (x + tipBoxWidth > screenWidth) {
                    x = screenWidth - tipBoxWidth;
                }

                coordinate.y -= 10
                coordinate.x = x
                this.coordinate = coordinate;
            });
        },
        // 事件
        initListener() {
            const fn = this.clonse
            const dc = document.documentElement

            dc.addEventListener('touchstart', fn)
            dc.addEventListener('mousedown', fn)


            this.$once('hook:beforeDestroy', () => {
                dc.removeEventListener('touchstart', fn)
                dc.removeEventListener('click', fn)
            })
        },
        clonse() {
            this.show = false;
        }
    },
}
</script>
<style lang="scss" scoped>
.tipBox-enter-active,
.tipBox-leave-active {
    transition: opacity 0.3s;
}

.tipBox-enter,
.tipBox-leave-to {
    opacity: 0;
}

.tipBox-enter-to,
.tipBox-leave {
    opacity: 1;
}

.tipContent {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 2px 10px;
    background-color: rgba(163, 163, 163, 0.8);
    border-radius: 20px;
    font-size: 13px;
    word-break: break-all;
}
</style>