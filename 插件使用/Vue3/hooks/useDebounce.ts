// 防抖hook

interface useDebounceType<T> {
  (...args: T[]): void | Promise<void>
}
export default function useDebounce<T>(callback: useDebounceType<T>, delay: number) {
  let timer: NodeJS.Timeout | null = null
  return function f(_this: void, ...args: T[]): void {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(args)

      callback.apply(_this, args) // 改变回调函数的this指向
    }, delay)
  }
}

// 泛型T定义fn函数的所有形参类型  delay延迟时间
// useDebounce<T>(fn, delay)
