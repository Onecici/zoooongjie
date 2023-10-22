const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get('/students', (req, res) => {
    console.log(req.query); // 获取get请求传过来的参数  url带?传参
    const students = [
        { name: 'Stjas', age: 18 }
    ]
    res.send(students) // 响应数据给客户端
})

app.listen(5000, err => {
    console.log('服务器启动成功');
})