import scrollTopBtnBox from './scrollTopBtnBox.vue'


export default (Vue) => {
    Vue.prototype.$scrollTopBtn = (el, text) => {

        function init(el, text) {
            const scrollTopBtn = Vue.extend(scrollTopBtnBox)
            const ins = new scrollTopBtn()
            ins.$mount()
            el.appendChild(ins.$el)
            ins.topTargetElement = el
            ins.text = text


            function show() {
                ins.isShow = true
            }

            function hide() {
                ins.isShow = false
            }

            return {
                show,
                hide
            }
        }

        

        return init(el, text)
    }
}