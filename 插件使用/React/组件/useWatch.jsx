import { useEffect, useRef } from 'react'

// value是state值
// callback是回调函数
const useWatch = (value, callback, config = { immediate: false }) => {
    const oldValue = useRef()
    const isFirst = useRef(false)
    useEffect(() => {
        if (isFirst.current) {
            callback(value, oldValue.current)
        } else {
            isFirst.current = true

            // 是否要立即执行 callback 回调函数
            if (config.immediate) {
                callback(value, oldValue.current)
            }
        }

        oldValue.current = value
    }, [value])
}

export default useWatch

/*
    监听器的使用示例
    useWatch(num, (newVal) => {
        console.log(newVal);
    })
*/