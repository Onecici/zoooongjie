const baseUrl = ""
const queryString = (params) => {
    if (Object.keys(params).length > 0) {
        return '?' + Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
    }
    return ' '
}

export default async ({ url, method, data, headers }) => {
    try {
        let options = {
            method: method || "GET",
            headers: {
                abc: "123",
                ...headers
            },
            body: JSON.stringify(data) || JSON.stringify({})
        };
        if (options.method.toUpperCase() === "GET") {
            url = baseUrl + url + queryString(options.body)
            delete options.body
        } else {
            url = baseUrl + url
        }
        /*
        可以做一些请求前的操作
        */
        const res = await fetch(url, options)
        const pageData = await res.json()

        // if (pageData.code == 200) {
        //     return Promise.resolve(pageData)
        // } else {
        //     /*
        //     做一些code 不等于200的处理
        //     */
        //     return new Error(pageData.code + ':' + pageData.msg || "请求错误")
        // }
    } catch (err) {
        /*
        统一捕获一些错误的处理
        */
        return new Error(err)
    }
}
