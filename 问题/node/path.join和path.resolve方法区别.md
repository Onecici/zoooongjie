区别如下：

1. 参数类型不同：
   - path.join接受多个字符串参数，将它们按照平台特定的路径分隔符拼接起来。
   - path.resolve接受多个字符串参数，将它们解析为绝对路径。
2. 返回值不同：
   - path.join返回一个拼接后的路径字符串，不考虑路径是否存在。
   - path.resolve返回一个解析后的绝对路径字符串，会考虑路径是否存在。
3. 相对路径处理不同：
   - path.join会简单地将传入的路径片段拼接在一起，不会解析相对路径。
   - path.resolve会根据当前工作目录解析相对路径，返回一个绝对路径。
4. 处理`.`和`..`不同：
   - path.join不会对`.`和`..`进行特殊处理，只是简单地将它们拼接到路径中。
   - path.resolve会根据当前工作目录解析`.`和`..`，返回一个绝对路径。

总结：path.join不会自动解析当前路径是否存在只会拼接  path.resolve相反会可以更具当前系统自动解析成符合当前系统的绝对路径



#### 如

```js
const path = require('path')
console.log(path.resolve(__dirname + './'));
console.log(path.join(__dirname + './'));

/* 
	输出
	/Users/oneci/Desktop/wl.
	/Users/oneci/Desktop/wl./
*/
```

