```js
npm install lazysizes
```

### React

```jsx
在index.js或index.tsx文件中导入lazysizes库：

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
```

```jsx
之后在组件中使用如下

import React, { memo } from 'react'
import IndexStyle from './style/index' // styleComponent组件

const index = memo(() => {
    function handleImgLoaded() {
        console.log('img加载完毕');
    }
  return (
    <IndexStyle>
        <p>图片懒加载页</p>
        <img data-src={require("@/assets/image/1056130.jpg")} onLoad={handleImgLoaded} className="lazyload imgTest" alt='' />
    </IndexStyle>
  )
})

export default index

// onLoad图片加载完后执行
// data-src图片路径
// className上标注lazyload表示当前图片开启懒加载  当加载完毕后就该类名就会变成lazyloaded
```

### Vue

待续........