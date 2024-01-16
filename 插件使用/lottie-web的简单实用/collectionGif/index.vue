<template>
    <div  class="collection-gif">
        <div v-show="showAnimate" class="gif" ref="domId"></div>
        <i v-show="!showAnimate" @click.stop="addCollect"  class="icon common-collection-true"> </i>
    </div>
</template>

<script>
import lottie from 'lottie-web';
import animationData from "./data.js"

animationData.assets.forEach((item, index) => {
    if(item.u && item.p){
        item.u = ''
        item.p = require(`./images/img_${index}.png`)
    }
});

export default {
    name:'collection-gif',
    props:["domId", "match", "animationRun"],
    data(){
        return {
            showAnimate: false
        }
    },
    watch:{
        animationRun(v,ov){
            if(v){
                this.showAnimate = true;
                this.animationFun();
            }
        }
    },
    mounted(){
        this.animation = lottie.loadAnimation({
            container: this.$refs.domId,
            renderer: 'svg',
            loop: false,
            animationData: animationData,
            // assetsPath: "@/views/home/ListItem/liveGif/"
        });

        this.animation.addEventListener('complete', () => {
            this.showAnimate = false;
        });
    },
    methods:{
        addCollect(){
            this.$emit("addCollect", this.match)
        },
        animationFun(){
            this.animation.goToAndPlay(0);
        }
    }
}

</script>
<style lang="less" scoped>
    .collection-gif{
        width: 100%;
        height: 100%;
        position: relative;
        .gif{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 23px;
          height: 23px;
        }
        .icon {
          width: 16px;
          height: 16px;
          display: block;
        }
    }
</style>