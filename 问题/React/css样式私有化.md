```js
在 React 中，可以使用 CSS Modules、Styled Components 或 CSS in JS 等技术来实现样式私有化。

1. CSS Modules：使用 CSS Modules 可以在组件层级上实现样式私有化，通过在 CSS 文件中添加 :local 修饰符来实现，例如：

/* styles.module.css */
.container :local(.title) {
  font-size: 20px;
  color: blue;
}


在组件中引入 CSS 文件时，可以使用 import 语句来获取样式类名：

import styles from './styles.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  );
}


这里的 styles.title 实际上是一个经过编译后的类名，可以确保在组件内部唯一。

2. Styled Components：使用 Styled Components 可以在组件层级上实现样式私有化，通过在组件定义中直接编写样式代码来实现，例如：

import styled from 'styled-components';

const Title = styled.h1
  font-size: 20px;
  color: blue;
;

function MyComponent() {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  );
}


这里的 Title 实际上是一个经过编译后的组件，可以确保在组件内部唯一。

3. CSS in JS：使用 CSS in JS 可以在组件层级上实现样式私有化，通过在组件定义中直接编写样式代码来实现，例如：

import { css } from '@emotion/react';

const titleStyle = css
  font-size: 20px;
  color: blue;
;

function MyComponent() {
  return (
    <div>
      <h1 css={titleStyle}>Hello World</h1>
    </div>
  );
}


这里的 titleStyle 实际上是一个经过编译后的样式对象，可以确保在组件内部唯一。

以上三种技术都可以实现样式私有化，具体使用哪种技术取决于你的项目需求和个人偏好。
```

