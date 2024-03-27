export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],// 第三方nuxt版本UI或组件库引入
  modulesDir: ["~/modules/index.js"], // defineNuxtModule模块引入
  telemetry: false,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        },
        { name: "keywords", content: config.SEO_keywords },
        { name: "author", content: config.nickName }
      ],
      link: [
        { rel: "shortcut icon", href: "/icon.png" }
      ],
      script: scripts,
      title: config.title
    }
  },
  css: ["~/assets/style/main.scss", "~/node_modules/katex/dist/katex.min.css", "~/node_modules/viewerjs/dist/viewer.css"],
  // runtimeConfig 设置客户端和服务端可以访问的配置项  在项目中通过调用useRuntimeConfig()获取配置信息
  runtimeConfig: {
    // 以键值方式定义的配置都表示服务端可以访问的配置项 可以在app.vue获取该访问配置
    env: "dev", // 当设置了NUXT环境变量时这里会被覆盖    package.json："dev": "nuxt dev --dotenv .env.local" 设置NUXT不同环境文件    环境变量分为2种 node(process.env.) 和 nuxt(process.env.) 两种环境

    // 以对象存储的配置都表示客户端可以访问的配置项
    public: {
      stickers,
      svgs: isDev ? svgs : [],
      timestamp
    },
    app: {
      NUXT_ENV_CURRENT_GIT_SHA: execSync("git rev-parse HEAD").toString().trim(),
      githubBranch,
      mongoDBEnabled: !!process.env.MONGODB_URI || !!process.env.MONGODB_USER,
      cmtRepId: config.CommentRepoId || process.env.CommentRepoId,
      cmtRepCateId: config.CommentDiscussionCategoryId || process.env.CommentDiscussionCategoryId
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      ignore: ["/manage"]
    },
    cloudflare: {
      pages: {
        routes: {
          include: ["/api/*"]
        }
      }
    }
  },
  // vite中引入全局scss变量和sass:math模块(用来执行数学计算的工具模块)
  vite: {
    // 编译配置
    plugins: isDev ? allPlugins : buildPlugins,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use 'sass:math';@import 'assets/style/var';"
        }
      }
    },
    // 打包配置
    build: {
      // minify: false
    }
  },
  // 生命周期钩子
  hooks: {
    ready: () => {
      console.log(55);
    },
    "vite:extendConfig" (config, { isClient }) {
      if (isClient) {
        (config.build?.rollupOptions?.output as any).manualChunks = {
          // markdown: ["highlight.js", "katex", "marked"]
        };
      }
    },
    "nitro:build:before" (nitro) {
      const apiPath = path.join(__dirname, "utils", "api");
      if (["node-server"].includes(nitro.options.preset)) {
        for (const file of fs.readdirSync(path.join(apiPath, "db-tcp"))) {
          fs.renameSync(path.join(apiPath, "db-tcp", file), path.join(apiPath, "db", file));
        }
      }
    },
    "nitro:build:public-assets" (nitro) {
      generateSiteMap(nitro.options.output.publicDir);
      generateTimestamp(nitro.options.output.publicDir);
    }
  }
});
