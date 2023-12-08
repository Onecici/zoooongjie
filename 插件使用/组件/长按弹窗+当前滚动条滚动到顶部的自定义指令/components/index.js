const flie = require.context('./', true, /index\.js$/)
const components = []
flie.keys().forEach(fileItemPath => {
    const isSecondLevel = (fileItemPath.match(/\//g) || []).length === 2
    if (isSecondLevel) {
        components.push(flie(fileItemPath).default)
    }
})
export default {
    install(Vue) {
        components.forEach(item => {
            item(Vue)
        })
    }
}