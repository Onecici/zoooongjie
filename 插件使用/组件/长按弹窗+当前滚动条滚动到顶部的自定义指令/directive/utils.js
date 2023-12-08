import Vue from 'vue'
import Hammer from 'hammerjs';

// 添加长按事件
const longpress2 = {
    inserted(el, binding, vNode) {
        longpressFn(el, binding, Vue)
    },
    componentUpdated(el, binding, vNode) {
        longpressFn(el, binding, Vue)
    },
    unbind(el, binding, vnode) {
        el.hammer && el.hammer.destroy();
    }
}


function longpressFn(el, binding, Vue) {
    /**
     * @param {Function:执行函数 || Object: {elTag:元素id类名, fn:执行函数}} binding.value
     */
    if (el.hammer) return

    let RowDOM;
    let fn;
    if (Object.prototype.toString.call(binding.value) === '[object Object]') {
        RowDOM = el.querySelector(binding.value.elTag) ?? el
        fn = binding.value.fn
    } else {
        RowDOM = el
        fn = binding.value
    }

    // 判断文本是否处于单行或多行显示 <必须在display:block或flex布局下的元素上才能判断>
    if (RowDOM.scrollHeight > RowDOM.clientHeight || RowDOM.scrollWidth > RowDOM.clientWidth) {
        el.hammer = new Hammer(el, {
            recognizers: [
                [Hammer.Press, {
                    time: 500 // 设置长按时间
                }],
            ],
        });

        el.hammer.on('press', (e) => {
            console.log(RowDOM.scrollHeight , RowDOM.clientHeight , RowDOM.scrollWidth , RowDOM.clientWidth);
            e.preventDefault()
            const coord = {
                x: e.center.x,
                y: e.center.y
            }
            if (binding.modifiers.tip) {
                // 长按弹出Tip框
                Vue.prototype.$showTip(fn(), {
                    coordinate: coord
                })
            } else {
                // 普通长按事件
                fn(e, coord)
            }
        });
    }
}

// 插入一个滚动顶部按钮
const scrollTopBtn = {
    /**
     * @param {Element} el 可滚动元素
     * @param {String} binding.value 文字描述
     */
    inserted(el, binding, vNode) {
        el.scrollTopBtnFn = (e) => {
            let scrollTop = e.target.scrollTop //获取滚动距顶部的距离
            if (scrollTop > 500) {
                show()
            } else {
                hide()
            }
        }

        const { show, hide } = Vue.prototype.$scrollTopBtn(el, binding.value)

        el.addEventListener('scroll', el.scrollTopBtnFn);
    },
    unbind(el, binding, vnode) {
        el.removeEventListener('scroll', el.scrollTopBtnFn);
    }
}

export {
    longpress2,
    scrollTopBtn
}