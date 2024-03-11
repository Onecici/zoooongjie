1. vscode版本低导致Eslint插件无法使用

2. ```js
   // 在项目根目录创建.vscode中添加setting.json配置如下
   
   "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact",
       "react",
   ],
   ```

3. ```js
   // 在vue项目根目录下的.eslintrc文件中
   
   module.exports = {
     extends: [
       '@vue/eslint-config-prettier' // 必须添加一个为prettier这个类型插件才能使eslint提示生效
     ],
   }
   ```

   

   