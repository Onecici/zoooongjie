```js
// 简单使用

const pathToRegexp = require('path-to-regexp');

const toPath = pathToRegexp.compile('/users/:id/:action');

const params = { id: 123, action: 'edit' };
const path = toPath(params);

console.log(path); // 输出 '/users/123/edit'
```

