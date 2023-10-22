# **数据类型**

null的类型是object   null 可看做0用来运算

Number()：转数字型，不会改变变量原始的数据类型

Number是将需要转换的类型整个都进行转换 而 parse是从字符串的第一个开始，一直到最后的有效数字 

toString()：    用法：数据变量.toString() 转换成字符串 原数据变量不会发送改变

Boolean(): 转false的几种：0，' '，null，undefined，NaN，-0，0.0  其他类型都为true

声明一个变量未赋值获取到的类型为undfined  如数组中访问不存在的下标，获取的值是undefined 对象中访问不存在的对象名也是undefined 



## undefined

#### **变量未声明（未定义）时**

 **声明**了一个变量，但没有**赋值**，此时它的值就是 `undefined` 

#### **变量未声明（未定义）时**

 如果你从未声明一个变量，就去使用它，则会报错 

#### 函数无返回值时

 在定义一个函数时，如果末尾没有 return 语句，那么，其实就是 `return undefined` 

#### 调用函数时，未传参

如果实参不给形参赋值，形参代表的值是undefined



# 函数

工作原理： 实参 赋值 给形参

**注意点：如果实参不给形参赋值，形参代表的值是undefined**

函数一定有返回值：默认是undefined（反过来思考：如果拿到的函数结果是undefined：说明函数里面没有给return 返回值）

# 对象

对象的访问两种方式：对象.属性名  || 对象['属性名']





# **parseInt()具有以下特性**

（1）**只保留字符串最开头的数字**，后面的中文自动消失。例如：

```
console.log(parseInt("2017在公众号上写了6篇文章")); //打印结果：2017

console.log(parseInt("2017.01在公众号上写了6篇文章")); //打印结果仍是：2017   （说明只会取整数）

console.log(parseInt("aaa2017.01在公众号上写了6篇文章")); //打印结果：NaN （因为不是以数字开头）
```

（2）如果对**非 String类型**使用 parseInt()或 parseFloat()，它会**先将其转换为 String** 然后再操作。

比如：

```
var a = 168.23;
console.log(parseInt(a)); //打印结果：168  （因为是先将 a 转为字符串"168.23"，然后然后再操作）

var b = true;
console.log(parseInt(b)); //打印结果：NaN （因为是先将 b 转为字符串"true"，然后然后再操作）

var c = null;
console.log(parseInt(c)); //打印结果：NaN  （因为是先将 c 转为字符串"null"，然后然后再操作）

var d = undefined;
console.log(parseInt(d)); //打印结果：NaN  （因为是先将 d 转为字符串"undefined"，然后然后再操作）
```

(3) 取整数 如果后面有小数点 只会取整数位  不会四舍五入





# 浅拷贝的实现方式

### 用 Object.assgin() 实现浅拷贝（推荐的方式）

**使用语法**：

```
// 语法1
obj2 = Object.assgin(obj2, obj1);

// 语法2
Object.assign(目标对象, 源对象1, 源对象2...);  可以将多个“源对象”拷贝到“目标对象”中
```

**案例1**

```
const obj1 = {
    name: 'qianguyihao',
    age: 28,
    desc: 'hello world',
};

const obj2 = {
    name: '许嵩',
    sex: '男',
};

// 浅拷贝：把 obj1 赋值给 obj2。这一行，是关键代码。这行代码的返回值也是 obj2
Object.assign(obj2, obj1);

console.log(JSON.stringify(obj2));
--------------------------------------------------------------------------------
打印结果：
{"name":"qianguyihao","sex":"男","age":28,"desc":"hello world"}
```

**案例2**

```
let obj1 = { name: 'qianguyihao', age: 26 };
let obj2 = { city: 'shenzhen', age: 28 };
let obj3 = {};

Object.assign(obj3, obj1, obj2); // 将 obj1、obj2的内容赋值给 obj3
console.log(obj3);
---------------------------------------------------------------------------------
打印结果：
{name: "qianguyihao", age: 28, city: "shenzhen"}
```

Object.assign(obj2, obj1);

它的作用是：将 obj1 的值追加到 obj2 中。如果两个对象里的属性名相同，则 obj2 中的值会被 obj1 中的值覆盖。 

# 关于return



![return](E:\前端\问题\js\asset\return.png)

只要执行了return后续所有代码都不执行

