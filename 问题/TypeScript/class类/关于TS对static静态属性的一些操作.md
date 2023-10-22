```ts
  // 单例模式
  class SingleTon {
    name: string

    // 表示当前这个类无法在外部进行实例化 只能在内部进行实例化
    private constructor(name: string) {
      this.name = name
    }

    private static instance: SingleTon | null = null

    public static getInstance(name: string): SingleTon {
      if (SingleTon.instance === null) {
        SingleTon.instance = new SingleTon(name) // 内部进行实例化
      }
      return SingleTon.instance
    }
  }

  const s1 = SingleTon.getInstance('Lisoa')
  const s2 = SingleTon.getInstance('2')
  console.log(s1 === s2) // true

// 因为第一创建之后返回的永远都是同一个内存引用地址的数据
  console.log(s1.name) // Lisoa
  console.log(s2.name) // Lisoa


// 关于TS对static静态属性的一些操作 ⬇⬇⬇
// public  的静态成员可以被类的外部访问 内部不行  
// private 的静态成员只能在类中访问 外部不行  例如使用SingleTon.instance时只能在类中访问
```

