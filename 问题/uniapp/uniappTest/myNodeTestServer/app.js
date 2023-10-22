const express = require('express')
const path = require('path')
const app = express()

function resolve(data) {
    return {
        code: 200,
        data,
    }
}
function error(data = []) {
    return {
        code: 201,
        data,
    }
}
// app.use(express.static(path.join(__dirname, 'public')))
app.get('/students', (req, res) => {
    console.log(req.query);
    const { id } = req.query
    const students = [
        { name: 'Stjas', age: 18 }
    ]

    if (typeof (id) === 'string' && id === '13') {
        res.send(resolve(students)) // 响应数据给客户端
    } else {
        res.send(error())
    }

})

app.listen(5000, err => {
    console.log('服务器启动成功');
})