import {
	fakeUrlProxy
} from "../setting"
const baseURL = ''


// 封装uni.request方法
export default function request(options) {
	options = beforeRequest(options)
	options.url = baseURL + options.url
	return new Promise((resolve, reject) => {
		uni.request({
			url: fakeUrlProxy + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: options.header || {},
			success: res => {
				resolve(beforeResponse(res))
			},
			fail: err => {
				errorHandle(err)
				reject(err)
			}
		})
	})

}

// 请求拦截器
const beforeRequest = (request) => {
	console.log('请求前拦截器')
	return request
}

// 响应拦截器
const beforeResponse = (response) => {
	console.log('响应拦截器')
	return response.data
}

// 错误处理
const errorHandle = (err) => {
	console.log('错误处理')
	return Promise.reject(new Error(err))
}