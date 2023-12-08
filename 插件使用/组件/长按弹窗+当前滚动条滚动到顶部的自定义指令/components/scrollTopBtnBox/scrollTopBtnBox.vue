<template>
    <div class="back_top" v-if="isShow" @click="scrollTop(topTargetElement, true)">
        <span class="icon"> </span>
        <span class="words"> {{text}} </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
            topTargetElement: '', // 滚动目标元素
            text: '默认文字'
        }
    },
    methods: {
        /**
         * @param {Element} el 滚动元素
         * @param {Boolean} isVisibility 是否开启动画
         */
        scrollTop(el, isVisibility = false) {
            if (!el) return
            if (!isVisibility) {
                el.scrollTop = 0;
                return;
            }
            // 平滑滚动
            const beginTime = Date.now();
            const beginValue = el.scrollTop;
            const rAF =
                window.requestAnimationFrame || ((func) => setTimeout(func, 16));
            const frameFunc = () => {
                const progress = (Date.now() - beginTime) / 500;
                if (progress < 1) {
                    el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
                    rAF(frameFunc);
                } else {
                    el.scrollTop = 0;
                }
            };
            rAF(frameFunc);

            const cubic = value => Math.pow(value, 3);
            function easeInOutCubic(value) {
                return value < 0.5
                    ? cubic(value * 2) / 2
                    : 1 - cubic((1 - value) * 2) / 2;
            }
        }
    }
}
</script>