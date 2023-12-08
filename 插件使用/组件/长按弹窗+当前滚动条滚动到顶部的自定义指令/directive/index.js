import * as directives from './utils'

export default {
  install(Vue) {
    for (const key in directives) {
      Vue.directive(key, directives[key])
    }
  }
}