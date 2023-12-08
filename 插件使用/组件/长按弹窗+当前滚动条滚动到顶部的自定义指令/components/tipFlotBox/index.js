import tipFlotBox from './tipFlotBox.vue'


export default (Vue) => {
    const tip = Vue.extend(tipFlotBox)
    const ins = new tip()
    ins.$mount()
    document.body.appendChild(ins.$el)

    // 显示弹框
    Vue.prototype.$showTip = (msg, options) => {
        ins.showTipFlotBox({
            msg,
            options
        })
    }
}