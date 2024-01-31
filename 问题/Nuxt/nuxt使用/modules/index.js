import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  // 模块的默认配置选项
  defaults: {

  },
  // 2种注册Nuxt钩子方式
  // 方式一
  hooks: {
    // "pages:extend": (pages) => {
    //   console.log(`发现了${pages.length}个页面`);
    // }
  },

  // 包含模块逻辑的函数，可以是异步的
  setup (moduleOptions, nuxt) {
    // 方式二
    nuxt.hook("pages:extend", (pages) => {
      console.log(`发现了${pages.length}个页面`);
    });
  }
});
