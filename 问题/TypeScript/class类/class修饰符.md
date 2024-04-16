```ts
  // 单例模式
  class SingleTon {
    name: string
    
    //可以访问，但是一旦确定就不能修改
    readonly id: number,
    //自身和子类可以访问，但是不能外部修改，只能在内部修改
    protected username: string,

    // 表示当前这个类无法在外部进行实例化 只能在内部进行实例化
    private constructor(name: string) {
      this.name = name
    }

    private static instance: SingleTon | null = null

    static getInstance(name: string): SingleTon {
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


/*
	补充
	static静态属性是JS原生自带的方法
  该属性无法在类内部中直接通过this获取，需要通过 SingleTon.instance 形式获取值
*/


public：公有 (没写修饰符默认都是这个属性)
protected: 受保护  // 自身和子类可以访问，但是不能外部修改，只能在内部修改
private: 私有 // 无法在外部访问 只能在内部访问
readonly: 只读
```

