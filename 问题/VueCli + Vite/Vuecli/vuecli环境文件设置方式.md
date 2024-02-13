## 使用方式

根目录新增文件：

.env.development
.env.test
.env.preview
.env.production

`package.json` 新增命令：

```json
{
  "scripts": {
    "dev": "vue-cli-service serve --mode development",
    "build:test": "vue-cli-service build --mode test",
    "build:preview": "vue-cli-service build --mode preview",
    "build:prod": "vue-cli-service build --mode production"
  }
}

// 添加以上脚本之后，即可使用 `npm run build:xxx` 打包不同环境。
```



```js
// .env.test文件   这里面定义的变量都会被 process.env. 读取到

NODE_ENV = production

# nginx 配置获取
VUE_APP_BASE_API = 'http://admin.zxjlbvip.org'
VUE_APP_WS_MQTT = 'wss://djmqfat.ouligk.com:8084/mqtt'

# 接口获取
VUE_APP_UPLOAD_FILE_URL = 'http://fat-upload.zxjlbvip.org'
VUE_APP_VIEW_FILE_URL = 'http://dl.zxjlbvip.org/'

VUE_APP_BIGDATA_API = 'http://172.18.178.39:8088'
# VUE_APP_BIGDATA_API = 'http://test-panda-bigdata-report-web.sportxxxkd1.com'


VUE_APP_MQTT_NAME = 'admin'
VUE_APP_MQTT_PASSWORD = 'Qazqaz123...'

```

