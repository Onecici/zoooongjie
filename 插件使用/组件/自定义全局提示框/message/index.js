import message from './message.vue'
const toast = {};
let timer;
toast.install = Vue => {
    // 扩展 vue 插件
    const ToastCon = Vue.extend(message)
    const ins = new ToastCon()
    // 挂载 dom
    ins.$mount(document.createElement('div'))
    // 给 vue 原型添加 toast 方法
    Vue.prototype.$message = (msg) => {
        const { message, duration, customClass, getContainer, successful, crossTip } = msg;
        // 添加到 body 后面
        const dom = getContainer || document.body;
        dom.appendChild(ins.$el);
        const durationTime = duration || 3000;
        ins.message = message;
        ins.customClass = customClass;
        ins.getContainer = Boolean(getContainer);
        ins.visible = true;
        ins.successful = Boolean(successful);
        ins.crossTip = Boolean(crossTip);
        // console.log(durationTime )
        if( timer ){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            ins.visible = false;
            dom && dom.removeChild(ins.$el);
        }, durationTime)
    }
}
export default toast