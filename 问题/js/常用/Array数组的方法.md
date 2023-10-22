Array.concat( ) 连接数组 

Array.join( ) 将数组元素连接起来以构建一个字符串 

Array.length 数组的大小 

Array.pop( ) 删除并返回数组的最后一个元素 

Array.push( ) 给数组添加元素 

Array.reverse( ) 颠倒数组中元素的顺序 

Array.shift( ) 将元素移出数组 

Array.slice( ) 返回数组的一部分 

Array.sort( ) 对数组内元素进行排序 

Array.splice( ) 插入、删除或替换数组的元素 

Array.toLocaleString( ) 把数组转换成局部字符串 

Array.toString( ) 将数组转换成一个字符串 

Array.unshift( ) 在数组头部插入一个元素



# Array.from()

 1.Array.from()可以将各种值转为真数组，并且还提供map功能。 

Array.from根据第一个参数长度有多少第二个参数就遍历多少次

```js
Array.from({ length: 2 }, () => 'jack')
// ['jack', 'jack']
```

  上面代码中，Array.from的第一个参数指定了第二个参数运行的次数。这种特性可以让该方法的用法变得非常灵活。 

2.Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。 

```js
function countSymbols(string) {
  return Array.from(string).length;
}
```