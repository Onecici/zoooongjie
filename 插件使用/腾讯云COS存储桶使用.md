**安装JavaScript SDK**

```
npm i cos-js-sdk-v5 --save
```

```javascript
import COS from 'cos-js-sdk-v5' // 引入腾讯云的包

// 配置
const cos = new COS({
 SecretId: 'AKIDLPE5APmCxXcUKurPIwIhs10jDTSeumkb', // 身份识别 ID
 SecretKey: 'nMVR6wZmmqxrCG7kH7j3CyjEUaIp8GDP' // 身份密钥
})
```

```javascript
// 发送数据
cos.putObject({
    Bucket: 'huahua-1304600167', /* 填入您自己的存储桶，必须字段 */
    Region: 'ap-guangzhou', /* 存储桶所在地域，例如ap-beijing，必须字段 */
    Key: files.file.name, /* 文件名（例如1.jpg，a/b/test.txt），必须字段 */
    Body: files.file, /* 必须，上传文件对象，可以是input[type="file"]标签选择本地文件后得到的file对象 */
    onProgress: (progressData) => {
     console.log(JSON.stringify(progressData));
    }
   }, (err, data) => {
    console.log(err || data)
   })
```

