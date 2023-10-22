```tsx
  interface MyInterface {
    myProperty: string
    myMethod: (text: string) => string
  }

// implements表示约定该class类中必须要拥有MyInterface里所有的属性和类型要一致
  class MyClass implements MyInterface {
    mytext = 'sas'
    myProperty = 'Hello, world!'
    myMethod(text: string): string {
      return text
    }
  }
```

