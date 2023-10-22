import request from '@/utils/requster.js'

// 获取students数据
export const getStudents = (data) => {
	return request({
		method: 'get',
		url: '/students',
		data
	})
}