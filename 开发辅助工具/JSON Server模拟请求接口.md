#### 全局安装

```js
npm install -g json-server
```

##### 项目根目录下创建一个db.json文件

```js
定义接口数据
{
  "data": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ]
}
```

##### 最后通过当前项目的cmd命令输入

```html
json-server --watch --host 192.0.100.1 db.json --port 3000
192.0.100.1改成本机IPv4地址

表示开启接口服务器 http://192.0.100.1:3000

获取上述data接口数据方式 http://192.0.100.1/data 即可获取
```



