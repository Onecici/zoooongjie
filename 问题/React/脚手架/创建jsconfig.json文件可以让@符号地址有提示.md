直接复制创建(要注意json格式)

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "esnext",
        "baseUrl": "./",
        "moduleResolution": "node",
        "paths": {
            "@/*": [
                "src/*"
            ]
        },
        "jsx": "preserve",
        "lib": [
            "esnext",
            "dom",
            "dom.iterable",
            "scripthost"
        ]
    },
    "exclude": [
        "node_modules"
    ]
}
```

