# 方法一

```
npm install @types/XXX 

xxx表示包名
```

# 方法二

 在src根目录新建一个 shime-vue.d.ts 的文件

文件里面写上

```ts
declare module 'js-cookie'  // 写上对应包名即可
```

注意！！！必须是根目录 不然没效果





# 方法三

```ts
找到node_modules中对应包的根目录创建index.d.ts

// index.d.ts
declare module 'js-cookie'  // 写上对应包名即可



// 在vite.config.ts中引入第三方包无类型时使用方法二无效  只能使用方法三
```





```js
declare module "模块名称(库名)" {
​		// 这里用来手动定义声明当前这个库里的所export导出的方法的类型
​   // 只要在某个组件当中import导入 模块名称(库名)  该声明就会生效
}


// 示例   1.declare module只是声明限制一个库里所export导出的方法的类型
declare module 'js-cookie' {
  export interface Person {
    name: string;
    age: number;
  }
  export function sayHello(name: string): void;  // 3.限制js-cookie库中暴露出来的sayHello方法的类型
}

// 2.在某个组件中导入时
import { sayHello } from "js-cookie"
sayHello是js-cookie库中的方法
```

