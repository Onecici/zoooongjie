### Scss

```
npm install node-sass sass-loader -S
```

因为create-react-app中配置自带scss所以无需自行配置直接使用即可

安装完后,就可以在项目中直接创建使用scss文件即可





### Less

```js
// 在craco.config.js 里添加如下 即可生效
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
};
```

