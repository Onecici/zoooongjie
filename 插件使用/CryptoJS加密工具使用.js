import CryptoJS from 'crypto-js'

function isBase64(str) {
  try {
    return btoa(atob(str)) === str
  } catch (err) {
    return false
  }
}

// SECRET_KEY密钥供进行加密和解密使用
const SECRET_KEY = CryptoJS.enc.Utf8.parse('panda1234_1234ob')

/**
 * 解密方法
 * @param data
 * @returns {string}
 */
export function decrypt(data) {
  // 判断data是否属于base64
  if (!isBase64(data)) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
    data = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  }

  const decrypt = CryptoJS.AES.decrypt(data, SECRET_KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr
}

/**
 * 加密方法
 * @param data
 * @returns {string}
 */
export function encrypt(data) {
  if (typeof data === 'object') {
    try {
      data = JSON.stringify(data)
    } catch (error) {
      console.log('encrypt error:', error)
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data)
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString()
}

// 实际项目中 加密方法由后端进行加密 前端只需要进行解密即可
// 使用时只需关注 mode属性(加密模式) 和 SECRET_KEY即可

// 测试base64进行解密
// console.log(decrypt('4dWmyPxV9+vsSqYXkBo4NjsYFiMbuQysCah8C6GllsbeEx+QpGN9PK+bOm9lsKyG'));