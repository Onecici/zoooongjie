import './assets/main.css'

import mitt from 'mitt'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

declare global {
  interface Window {
    MyNamespace?: any
  }
}
window.MyNamespace = 123

// --------------------------------------------------------------------------------------------------------------------

type IFnCall<T> = <F>(callback: (num: T) => F, age: number) => F
const foo: IFnCall<number> = function (callback, age) {
  return callback(age)
}

foo<string>((age) => {
  return String(age + 12)
}, 10)

// --------------------------------------------------------------------------------------------------------------------

interface User<T> {
  id: T
  age: T
}
type PickUser<T> = Required<User<T>> // Required必填
const ass: PickUser<number> = {
  id: 5,
  age: 10
}

// --------------------------------------------------------------------------------------------------------------------

type gna<T> = <F extends string | number>(a: F) => T

const gnas: gna<number> = (a) => Number(a) * 5
gnas(1)

// --------------------------------------------------------------------------------------------------------------------

type T = {
  name: string
  age: number
}
type U = {
  name: string
}
type asass = Exclude<keyof T, keyof U> // Exclude将2个类型定义中相同的类型进行排除只保留剩下的
const asja: asass = 'age'

// --------------------------------------------------------------------------------------------------------------------

type as = {
  foo: string
}
const kk: as = { foo: 'foo' }
const Mit = mitt<as>()

// --------------------------------------------------------------------------------------------------------------------

type keys = Record<number, unknown>
const asa: keys = {
  1: 123
}
//        👇1.1这一块的泛型是必传泛型的   👇1.2这一块泛型可以不传泛型 不写的话默认为keys类型
type getN<T extends number> = <K extends keys>(n: K) => T

//                 👇1.1必传泛型
const getNs: getN<number> = (n) => 123

//  👇1.2可以不传泛型
getNs({ 1: 123 })

// --------------------------------------------------------------------------------------------------------------------


// infer可以抽取某个TS类型定义中的类型
// 例子1
// 若T是Array类型，则返回数组中每一项的类型，否则返回never类型
type Union<T> = T extends Array<infer U> ? U : never

type a = {
  name: string
}

type b = string[]

type c = Union<b>
// type c = string
type d = Union<a>
// type d = never

// 例子2
// 若T满足(param: infer P) => any，则返回函数入参的类型，否则直接返回T
type ParamType<T> = T extends (param: infer P) => any ? P : T

interface IDog {
  name: string
  age: number
}

type Func = (dog: IDog) => void

type Param = ParamType<Func> // IDog
type TypeString = ParamType<string> //string


type Type<T> = T extends any[] ? T[number] : T
type test = Type<string[]>
type test2 = Type<string>

// --------------------------------------------------------------------------------------------------------------------

// 1.1 获取数组每个元素的类型
const strArr = [{ name: 123 }, 123, 'abc']
//                                                        👇number是固定的 是用来定义当前数组下标索引类型          小知识：string不属于数组类型，但可以访问下标
type getArrEvenyElType<T> = T extends any[] | string ? T[number] : T // 使用 extends 时可以对当前泛型T进行三元运算符判断然后输出指定的类型
const a1: getArrEvenyElType<typeof strArr> = 123
const a2: getArrEvenyElType<typeof strArr> = { name: 123 }
const a3: getArrEvenyElType<typeof strArr> = 'abc'

const a4: getArrEvenyElType<typeof strArr> = [1, 2, 3]

// 1.1.1 获取数组每个元素的类型出现的问题
// 原因：因为👇泛型T传入的有可能为Object或者为其它类型但这些类型都不支持数组下标访问所以需要用extends约定泛型T为数组才行 因为只有数组才能访问下标
type test1<T> = T[number]

// --------------------------------------------------------------------------------------------------------------------------------

const fruits = [1, 2] as const // as const 可以将数组中每一项转成字面量类型
// 字面量类型定义方式如：type fafaf = [1,2,3]  字面量类型其实就是固定死的格式类型
type asaaf = typeof fruits[number] // 获取数组中每个下标的元素会自动转成联合类型


// Record<K, T> 定义对象键值类型
// K传入的对象key值的联合类型，T对象属性value的类型
type af = Record<typeof fruits[number], boolean>
type peoso = Record<string | number, string>
const assca: peoso = {
  name: '123',
}

// --------------------------------------------------------------------------------------------------------------------------------

type tests = keyof {
  name: string
  age: number
}

type inTest<K extends keyof any> = {
  // in 关键字用于映射类型
  // 只支持字面量的联合类型进行映射
  [P in K]: K[]
}

const objks: inTest<tests> = {
  name: ['name'],
  age: ['age']
}

// Partial将类型全部转换成可选属性
interface afaa {
  af: string
  agg: number
}
type asfka = Partial<afaa>

// ReturnType获取函数返回值类型
function add(number: number): number {
  return number + 1
}
type addReturnType = ReturnType<typeof add>

// --------------------------------------------------------------------------------------------------------------------

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}
// 全局事件总线
app.config.globalProperties.$Bus = Mit

// --------------------------------------------------------------------------------------------------------------------

app.use(createPinia())
app.use(router)

app.mount('#app')
