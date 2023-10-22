const { fakeUrlProxy } = require("./setting");


module.exports = {
	devServer: {
		proxy: {
			[fakeUrlProxy]: {
				target: 'http://127.0.0.1:5000',
				changeOrigin: true,
				pathRewrite: {
					[`^${fakeUrlProxy}`]: ''
				}
			}
		}
	}
}