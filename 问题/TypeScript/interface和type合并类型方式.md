### Interface

```ts

interface aaa {
  age: number
}
interface aaa {
  name: string
}



// interface重写同名类型接口名称可以合并
const a: aaa = {
  age: 100,
  name: 'saas'
}
```

### Type

```ts
type Group = { groupName: string, memberNum: nuber }
type GroupInfoLog = { info: string, happen: string }
type GroupMemeber = Group & GroupInfoLog // type类型合并方式
```

