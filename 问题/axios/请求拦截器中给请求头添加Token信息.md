```js
axios.interceptors.request.use(config => {
    const token = userInfo.token
    config.headers.Authorization = `Bearer ${token}`
})
```

