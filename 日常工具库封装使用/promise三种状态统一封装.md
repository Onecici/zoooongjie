```js
        async function asyncFn(callback) {
            const options = {
                padding: false,
                data: {},
                error: null
            }
            try {
                options.data = await callback()
            } catch (err) {
                options.error = err
            } finally {
                options.padding = true
            }

            return options
        }

// callback函数必须返回promise
```

