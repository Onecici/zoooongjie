解决方法

```html
            <div>
                <div style="flex: 1;">
                    <input />
                </div>
                <span class="date-to">{{ i18n.zhi }}</span>
                <div style="flex: 1;">
                    <input />
                </div>
            </div>
```

在input外层包一个div设置flex: 1即可   input宽度设置width:100%