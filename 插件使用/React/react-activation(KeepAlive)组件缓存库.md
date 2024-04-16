```
npm i react-activation
```

#### 配置

```jsx
// index.jsx
import { AliveScope } from "react-activation";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <AliveScope>
      <App />
    </AliveScope>
  </BrowserRouter>
);
```

#### 使用

##### 组件级缓存

```jsx
import { useState } from "react";
import Counter from "../components/Counter";
import KeepAlive from "react-activation";

export default function About() {
  const [counterState, setCounterState] = useState(false);

  return (
    <div>
      <button onClick={() => setCounterState((oldState) => !oldState)}>
        Counter show
      </button>
      {counterState && (
        <KeepAlive id="counter"> // KeepAlive标签一定一定要加id！！！
          <Counter /> // 输入框组件
        </KeepAlive>
      )}
    </div>
  );
}
```

##### 路由级缓存

```jsx
import { Suspense, lazy } from "react";
import { Navigate } from "react-router";
import { useAnimatedRoutes } from "react-animated-router"; // 路由切换动画库

import About from "../views/about";

const Home = lazy(() => import("../views/home"));
const Test = lazy(() => import("../views/test"));

export default function Route() {
  return (
    <Suspense >
      {useAnimatedRoutes([
        {
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "test",
              element: <Test />,
            },
          ],
        },
        {
          path: "/about",
          element: <KeepAlive id="about"><About /></KeepAlive>, // 要缓存的路由不能懒加载！！!
        },
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
      ])}
    </Suspense>
  );
}

```

https://github.com/CJY0208/react-activation/blob/master/README_CN.md
