```js
// cmd创建TS项目模版
create-react-app 项目名称 --template typescript

// 运行不了的话
npm i -g create-react-app
```

```js
// 项目根目录下创建.editorconfig文件

// .editorconfig文件配置写入
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false

// Vscode需要安装EditorConfig for VS Code插件
// EditorConfig 有助于为跨各种编辑器和 IDE 处理同一项目的多个开发人员保持一致的编码风格。
```

#### 安装prettier库

```js
npm install prettier -D
npm install eslint-plugin-prettier eslint-config-prettier -D

// 项目根目录下创建.prettierrc和.prettierignore文件

// .prettierrc文件配置写入
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}

// .prettierignore文件配置写入
/dist/*
.local
.output.js
/node_modules/**
**/*.svg
**/*.sh
/public/*



// 在package.json文件中的scripts对象中添加
"prettier": "prettier --write ."
// 执行后所有文件中的代码将会进行prettier格式化
```

#### 安装EsLint库

```js
npm install eslint -D

npx eslint --init // 初始化eslint(生成eslint配置)
// 配置选项如下
	>>>To check syntax, find problems, and enforce code style
	>>>JavaScript modules (import/export)
  >>>React
  >>>Does your project use TypeScript?  Yes
  >>>Where does your code run? · browser
  >>>Use a popular style guide
  >>>Standard: https://github.com/standard/eslint-config-standard-with-typescript
  >>>JavaScript
  >>>Would you like to install them now?  Yes
  >>>Which package manager do you want to use? npm

  

  // 将.eslintrc.js配置中不存在的属性添加进去(不是覆盖,在原有内容的基础上添加不存在的属性)
module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'] // 告诉 eslint：tsconfig 在哪
  },
  plugins: ['react', '@typescript-eslint'], // 定义了该eslint文件所依赖的插件
  rules: {}
}


```

