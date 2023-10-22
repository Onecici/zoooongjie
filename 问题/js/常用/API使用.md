# replace替换

 replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的字符串

**1、只替换成功匹配到的第一次字符后面再不匹配 **let str = "ABCDAAA"

```
str.replace(B,"1") 
```

 **2、替换所有匹配内容** 

```
 str.replace(/A/g,"2") 
 利用正则表达式匹配所有 “g”是匹配全部的意思，这样str里面的所有A，都替换成数字2
```

 **3、全部内容替换**：

```
str.replace(RegExp("ABCD", "g"), "123");  把 str 里面的“ABCD”替换成123

RegExp("ABCDAAA", "g") 
第一个参数是想要替换的内容 第二个参数“g”是匹配全部的意思，也可以换成"t"，就是只匹配第一个
```

## RegExp对象

 RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。 

**创建 RegExp 对象的语法：**

```
new RegExp(pattern, attributes);

pattern 是一个字符串
attributes 是一个可选的 包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。
```