#### 1.使用原因

当想要在app端中的原生组件容器上再添加一个自定义的布局容器蒙层纯css是无法实现的**(因为原生组件是无法被普通vue组件给覆盖的)**

**比如video在app端渲染的是原生组件此时我想要添加自定义的一个布局容器蒙层只能使用subNvue原生布局容器**

subNvue只能用于app端

#### 2.使用方式

```json
在pages.json中找到需要使用subNvue的页面然后进行配置 subNVues 即可使用
	{
            "path" : "pages/detail-video/detail-video",
            "style" : {
				"app-plus":{
					"titleNView":false,
					"subNVues":[{
						"id":"top",
						"path":"./pages/detail-video/subNVue/video.nvue",
						"style":{
							"position":"dock",  // dock相当于fixed固定定位
							"dock":"top", // 定位在top
							"width":"100%",
							"height":"225px"
						}
					}]
				}
			}
        }
```

#### 3."path":"./pages/detail-video/subNVue/video.nvue" 代码

```
请看文件夹中video.nvue示例
```

