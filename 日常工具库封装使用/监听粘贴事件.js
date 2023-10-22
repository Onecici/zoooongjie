// 定义粘贴函数

// event变量通过监听paste事件对象传入
const onPaste = (event) => {
  // 剪贴板没数据，则直接返回
  if (!event.clipboardData || !event.clipboardData.items) {
    return
  }
  return new Promise((resovle, reject) => {
    for (let i = 0, len = event.clipboardData.items.length; i < len; i++) {
      const item = event.clipboardData.items[i]
      if (item.kind === "file") {
        const file = item.getAsFile()
        if (item.type.match("^image/")) {
          // 处理图片类型
        } else {
          // 其他文件类型直接返回
          resovle({
            data: file,
            type: "file",
          })
        }
      } else if (item.kind) {
        // 纯文本类型
        let str = event.clipboardData.getData("text")
        resovle({
          data: str,
          type: "string",
        })
      } else {
        reject(new Error("不支持粘贴该类型"))
      }
    }
  })
}

export default onPaste
