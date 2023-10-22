```ts
  // 获取list变量类型
type builderType = typeof list  // typeof获取变量类型时可以在任意地方获取   因为ts只是在IDE层面上处理的。不会在编译完后处理
  class List {
    init(): any {
      console.log('初始化数据')
    }

    getData(): any {
      console.log('获取异步数据')
    }

    render(): any {
      console.log('渲染数据')
    }
  }

  class Operator {
    async startBuild(builder: builderType): Promise<any> {
      await builder.init()
      await builder.getData()
      await builder.render()
    }
  }
  const operator = new Operator()
  const list = new List()
  
  operator.startBuild(list).then((res) => {
      console.log(res)
  }).catch((err) => {
      console.log(err)
  })
```

