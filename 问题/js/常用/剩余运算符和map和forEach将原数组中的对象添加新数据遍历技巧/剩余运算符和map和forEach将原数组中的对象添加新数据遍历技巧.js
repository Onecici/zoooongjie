var numbers = { name: 'abc', age: 18 }
var arr = ['a', 'b', 'c']
console.log({ ...numbers }); // { name: 'abc', age: 18 } 剩余运算符将numbers对象里的数据  合并到新创建的对象下里面  剩余运算符如果以对象形式获取那就必须以对象形式合并新对象下面
console.log(...arr); // a b c

let arrs = [{ name: 'abc', age: 18 }, { name: 'def', age: 25 }]
const objMap = arrs.map(item => { // map只能遍历数组
    return {
        ...item,  // ...剩余运算符可以将map每次遍历的对象(item)  里面的数据 { 对象数据 } 进行获取并合并到新对象上 之后我们可以操作是否在新对象上添加自己想要添加的数据
        sex: 'na'
    }
})
console.log(objMap);


// forEach将原数组中的对象添加新数据的方法
const arr4 = [{ name: 'Lio', age: 18 }, { name: 'Aas', age: 18 }, { name: 'Swa', age: 18 }];
const arr5 = []
arr4.forEach(item => {
    arr5[arr5.length] = {
        ...item,
        sex: "na"
    }
})
console.log(arr5);