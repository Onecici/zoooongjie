npm install cross-env --save-dev

```js
// 在package.json文件中的脚本部分使用cross-env来设置环境变量。例如，假设我们有一个脚本需要使用一个名为NODE_ENV的环境变量

{
  "scripts": {
    "start": "cross-env NODE_ENV=development node server.js"
  }
}

// 总结一下，cross-env是一个跨平台的工具，用于在不同的操作系统中设置和使用环境变量。它可以帮助我们在不同的环境中运行代码，并使用相同的命令来设置环境变量
```

环境变量可以在许多编程语言中访问和使用，不仅限于Node.js。环境变量是在操作系统级别定义的变量，可以在任何编程语言中使用。

在Node.js中，可以使用`process.env`对象来访问环境变量。例如，要访问名为`MY_VARIABLE`的环境变量，可以使用`process.env.MY_VARIABLE`。