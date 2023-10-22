let arr = [1, 2, 3, 4]
let arr2 = arr  // 这里的arr2赋值只是指向了arr那个数组的地址，一改就全变了
//下面代码对arr的任何操作都会改变arr2
arr[0] = 100
arr.unshift(100)
console.log(arr2);

// 数组对象
// 是一个array数组的数据类型，当然追溯到原型链最初肯定是object上，但开发中一般不这么看，数组和对象是两种不同数据结构