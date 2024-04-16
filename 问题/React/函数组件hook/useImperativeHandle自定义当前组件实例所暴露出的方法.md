```tsx
// useImperativeHandle需配合forwardRef使用

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// ChildComponent组件
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // 1.1使用useImperativeHandle可以自定义向外暴露方法或值
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    value: inputRef.current.value;
  }));

  return <input ref={inputRef} />;
});
```

```tsx
// ParentComponent组件
import ChildComponent from "./ChildComponent.tsx"

const ParentComponent = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    // 1.3使用实例上所暴露出来的方法
    childRef.current.focusInput();
    console.log(childRef.current.value);
  };

  return (
    <div>
      <ChildComponent ref={childRef} /> // 1.2使用ref获取组件实例
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
```

