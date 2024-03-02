```typescript
// 1.abstract加了此关键字的父类是必须要被一个子类继承，且abstract是不能进行new实例化
abstract class Person {
  constructor(public name: string,public age: number){}

  // 2.abstract加了此关键字的方法必须在子类中创建这个方法函数
  abstract getName(num: number):void;

  getAge(){
    console.log(this.age,'抽象类');
  }
}


class Son extends Person{
  constructor(){
    super('tom',10) // 子类存在构造器时必须调用 super 方法
  }

  getName(num: number): void{
    console.log(num + this.age);
  }

  myFn(){
    console.log('myFn');
  }
}

const p = new Son()
p.getName(1) // ok
p.getAge() // ok
p.myFn(); // 错误：abstract定义的抽象父类中没有定义该方法
```

