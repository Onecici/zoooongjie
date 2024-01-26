const fs = require('fs')
const path = require('path')
const xlsx = require('node-xlsx').default;
// 1.使用
// 1-1. 将每个项目统计每月的xlsx文件放入All文件夹下

// 1-2. xlsx文件名称集合
const list = ['djGameH5', 'djGameH5New', 'djGameH5Panda', 'djLive', 'ant_animation_live', 'djVideoControl', 'djAdmin', 'djCEndExample', 'djUserPanda', 'djUserNew', 'djMerchantAdmin', 'djUser']
// 1-3. xlsx文件月份集合
const monthArr = [10, 11, 12]
var obj = {}
list.forEach(item => {
    monthArr.forEach(month => {
        if ((item === 'cp_wap_new' || item === 'cp_web_new') && month === 10) {
            return
        }
        const sheets = xlsx.parse(`./all/${item}_${month}月.xlsx`);
        // 查看页面数
        console.log(sheets.length);

        // 打印页面信息..
        const sheet = sheets[0];

        // 打印页面数据
        console.log(sheet.data);
        sheet.data.forEach(row => {
            if (!row.length) return
            if (row[0] === '用户名') return
            const name = row[0]
            const t = row[2]
            const total = row[3]
            const add = row[4]
            const sub = row[5]
            if (obj[name]) {
                obj[name].t = Number(obj[name].t) + Number(t)
                obj[name].total = Number(obj[name].total) + Number(total)
                obj[name].add = Number(obj[name].add) + Number(add)
                obj[name].sub = Number(obj[name].sub) + Number(sub)
            } else {
                obj[name] = {
                    t,
                    total,
                    add,
                    sub
                }
            }
        })
    })
})
const result = []
console.log('obj', obj)
Object.keys(obj).forEach(name => {
    const val = obj[name]
    result.push([name, val.t, val.total, val.add, val.sub])
})


const buffer = xlsx.build([{ name: 'sheet1', data: result }]);
fs.writeFileSync(`汇总.xlsx`, buffer, { 'flag': 'w' });

// 运行 node shell.js 即可