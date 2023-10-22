#### 延迟加载ga统计

#### async & defer属性

html5中给script标签引入了async和defer属性。

带有async属性的script标签，会在浏览器解析时立即下载脚本同时不阻塞后续的document渲染和script加载等事件，从而实现脚本的异步加载。

带有defer属性的script标签，和async拥有类似的功能。并且他们有可以附带一个onload事件 `<script src="" defer onload="init()">` 。

async和defer的区别在于：async属性会在脚本下载完成后无序立即执行，defer属性会在脚本下载完成后按照document结构顺序执行。

由于defer和async的兼容性问题，我们通常使用 `动态创建script标签` 的方式来实现异步加载脚本，即 `document.write('<script src="" async></script>');`，该方式也可以避免阻塞。

#### ga统计代码

ga统计代码采用就是 `动态创建script标签` 方案。

该方法不阻塞页面渲染，不阻塞后续请求，但会阻塞window.onload事件，页面的表现方式是进度条一直加载或loading菊花一直转。

所以我们延迟执行ga初始化代码，将其放到window.onload函数中去执行，可以防止ga脚本阻塞window.onload事件。从而让用户感受到更快的加载速度。



将ga加载绑定到onload事件上