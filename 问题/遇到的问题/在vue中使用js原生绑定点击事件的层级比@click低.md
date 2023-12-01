```html
        <div>
            <div>这里被原生js事件绑定</div>
            <div @click="HandleClick">这里被@click绑定点击事件</div>
            <!-- @click绑定的事件触发优先级高于原生js事件 而且@click触发范围大导致原生js无法被触发 要解决这问题就给绑定的原生js事件加上@click="''"即可 -->
        </div>
```

