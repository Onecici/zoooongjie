```ts
// 1将所有类型变成只读方式
	// 1.1对象
  const obj = { name: 'Lisa', age: 15 } as const
  
  // 1.2数组
  const arr = [11, 'sas'] as const
  const arr2: ReadonlyArray<string | number> = [100, 88, 'sas']
  
// 2.将对象中某个属性设置只读  无法将数组中某个元素设置只读
  const obj: { readonly name: string; age: number } = { name: 'Lisa', age: 15 }
```

