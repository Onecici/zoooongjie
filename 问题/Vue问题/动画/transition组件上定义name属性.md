transition组件上定义name属性就是定义style中的class类名开头   

比如name为fade   
style样式中就这样写 

.fade-enter-from
.fade-enter-to 

.fade-leave-from
.fade-leave-to


.fade-enter-active   组件加载时执行 或者 元素if或show
.fade-leave-active   组件卸载时执行 或者 元素if或show
这两个类表示enter/leave状态被激活的类 可以在里面写transition: all 0.3s过度动画属性


to表示结束  from表示开始


transition组件对某个组件做动画时这个组件必须只有一个根节点否则失效



Vue2不带from

transition组件上定义mode属性可以设置 加载/删除 中的某个状态下哪个先执行或者后执行动画
in-out加载状态先执行动画完成后再执行删除状态动画
out-in删除状态先执行 加载状态后执行

transition组件添加上appear属性 表示第一次渲染时会执行动画   transition组件默认第一次渲染不执行动画