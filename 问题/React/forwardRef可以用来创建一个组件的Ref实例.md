```tsx

// 没创建组件实例时ref是无法获取组件实例的 只能自己通过forwardRef方法来手动创建才能获取到
<ChildComponent ref={childRef} />


```

```tsx
// forwardRef使用方式
// ts版和js相同

import React, { forwardRef } from 'react';

interface Props {
  // 这里是组件的属性列表(没属性可不填)
}


function ChildComponent(props: Props, ref: React.Ref<HTMLDivElement>) {
  return (
    <div ref={ref}>
      {/* 这里是组件的内容 */}
    </div>
  );
}

export default forwardRef(ChildComponent); 
// 实现步骤
// 1.forwardRef调用组件函数时会传递参数给当前组件函数中 
// 2.组件函数中通过第二个参数来获取到
// 3.将当前第二个参数赋值给某个元素上的ref中即可
// End. 这样就组件实例就创建成功了
```

