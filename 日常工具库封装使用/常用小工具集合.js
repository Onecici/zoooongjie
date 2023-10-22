// 处理时间戳
export function dateFormatter(time, format = "{y}-{m}-{d} {h}:{i}:{s}") {
  let date
  if (time instanceof Date) {
    date = time
  } else if (typeof time === "number") {
    const timestamp = Number((time.toString() + "000").substr(0, 13))
    date = new Date(timestamp)
  } else if (typeof time === "string") {
    date = new Date(time)
  } else {
    return null
  }

  if (date.toString() === "Invalid Date") return null
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
    let value = formatObj[key]
    if (result.length > 0 && value < 10) {
      value = "0" + value
    }
    return value || 0
  })
  return timeStr
}

// 计算文件大小单位
// bytes传入的必须是Byte单位的文件大小数值
// unit是单位
export function flowFormatObj(bytes, unit) {
  const obj = {}
  if (!bytes || bytes === 0)
    return {
      size: 0,
      unit: "Byte",
    }
  const k = 1024
  const sizes = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  if (unit) {
    const i = sizes.indexOf(unit)
    if (i !== -1) {
      obj.size = (bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 2)
      obj.unit = sizes[i]
    } else {
      obj.size = bytes
      obj.unit = unit
    }
    return obj
  } else {
    const i = Math.ceil(Math.log(bytes) / Math.log(k))
    if (bytes / Math.pow(k, i) < 1) {
      // 不到一个单位，降一个单位
      obj.size = (bytes / Math.pow(k, i - 1)).toFixed(i - 1 === 0 ? 0 : 2)
      obj.unit = sizes[i - 1]
      return obj
    }
    obj.size = (bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 2)
    obj.unit = sizes[i]
    return obj
  }
}
