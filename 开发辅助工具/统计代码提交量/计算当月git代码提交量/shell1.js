const shell = require('shelljs')
const dayjs = require('dayjs')
const fs = require('fs')
const path = require('path')
const xlsx = require('node-xlsx').default;
const month = 10 // 月份
const year = 2023
const day = new Date(year, month, 0)
const totalDay = day.getDate() // 获取7月一共几天
const dayList = new Array(totalDay).fill(1).map((item, index) => {
    const today = dayjs().set('year', year).set('month', month - 1).date(index + 1)
    return today.format('YYYY-MM-DD')
})
const userList = ['boyd','baird', 'Z9-dagu', 'ledron','smallt', 'Oneci' , 'jermy' , 'donnie']
const userMap = {}
const result = [
    ['用户名', '时间', '次数', '总行数', '添加行数', '删除行数']
];

const transferUserName = (name) => {
    let res = name
    userList.forEach(user => {
        if (user.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
            name.toLocaleLowerCase().includes(user.toLocaleLowerCase())) {
            res = user
        }
    })
    return res
}

const setData = (username, key, data) => {
    if (userMap[key]) {
        if (userMap[key][username]) {
            userMap[key][username].t = Number(userMap[key][username].t) + Number(data.t)
            userMap[key][username].total = Number(userMap[key][username].total) + Number(data.total)
            userMap[key][username].add = Number(userMap[key][username].add) + Number(data.add)
            userMap[key][username].subs = Number(userMap[key][username].subs) + Number(data.subs)
        } else {
            userMap[key][username] = data
        }
    } else {
        userMap[key] = {
            [username]: data
        }
    }
}

const deal = (startTime, endTime) => {
    console.log('day', startTime, endTime)
    const key = dayjs(startTime).format('YYYY-MM-DD')
    const logTimes = shell.exec(`git log --after="${startTime}" --before="${endTime}" --pretty='%an' | sort | uniq -c | sort -k1 -n -r`).stdout
    
    
    const list = logTimes?.split('\n').filter(i => !!i.trim())
    console.log('111', list.length)
    if (list.length) {
        list.forEach((item, index) => {
            const val = item.trim()
            if (val) {
                const arr = val.replace(/ +/g, ' ').split(' ')
                const t = arr[0]
                let username = arr[1].replace(/'/g, "").trim()
                console.log('deal===>', username)
                username = username.replace(/ITCOM9999\\/g, "")
                username = username.replace(/WUYING\\/g, "")
                // username = username.replace(/y002/g, "cailan")
                if (username) {
                    let desc = shell.exec(`git log --after="${startTime}" --before="${endTime}" --author="${username}" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "%15s %15s %15s", loc, add, subs }'`, {silent:true}).stdout
                    desc = desc.trim().replace(/ +/g, ' ').split(' ')
                    console.log('desc', desc)
                    const total = desc[0] || 0
                    const add = desc[1] || 0
                    const subs = desc[2] || 0
                    if (username.includes('oneci')) {
                        username = 'Oneci'
                    }
                    username = transferUserName(username)
                    console.log('username111===>', username)
                    setData(username, key, {
                        t,
                        total, 
                        add, 
                        subs
                    })
                }
            }
        })
    } else {
        const empty = {
            t: 0,
            total: 0, 
            add: 0, 
            subs: 0
        }
        userList.map(username => {
            setData(username, key, empty)
        })
    }
    
    if (userMap[key]) {
        const cloneObj = JSON.parse(JSON.stringify(userMap[key]))
        userList.forEach(user => {
            const userList2 = Object.keys(cloneObj)
            let hasUser = false
            userList2.forEach(user2 => {
                if (user2.toLocaleLowerCase().includes(user.toLocaleLowerCase()) ||
                    user.toLocaleLowerCase().includes(user2.toLocaleLowerCase())) {
                    hasUser = true
                }
            })
            if (!hasUser) {
                userMap[key][user] = {
                    t: 0,
                    total: 0, 
                    add: 0, 
                    subs: 0
                }
            }
        })
    }
}

dayList.forEach((date, index) => {
    const start = dayjs(date).set('year', year).set('hour', 0).set('minute', 0).format('YYYY-MM-DD HH:mm')
    const end = dayjs(date).set('year', year).set('hour', 23).set('minute', 59).format('YYYY-MM-DD HH:mm')
    // console.log(date, start, end)
    deal(start, end)
})
// deal("2023-12-30 00:00", "2023-12-30 23:59")

userList.forEach(username => {
    dayList.forEach((date, index) => {
        if (userMap[date]) {
            const obj = userMap[date]
            console.log(obj[username], date)
            if (obj[username]) {
                const val = obj[username]
                result.push([username, date, val.t, val.total, val.add, val.subs])
            }
        }
    })
    result.push([])
})
const dirname = __dirname.split('\\')[2] || 'data'


const buffer = xlsx.build([{name: 'sheet1', data: result}]);
fs.writeFileSync(`./${dirname}_${month}月.xlsx`,buffer,{'flag':'w'});
