通过padding可以实现元素的高度根据宽度自适应

padding百分比是根据当前父级元素的宽度自适应的
通过这个方式可以使用padding-top或padding-bottom实现父元素高度根据宽度变化来实现缩放效果

padding可以将一个没有任何宽高的元素撑开使它有宽高



#### 示例

```html
    <div style="width: 100px;background-color: red;">
        <div style="padding-bottom: 150%;"></div>
    </div>


比如父元素是个div只设置宽度高度由子元素padding-bottom撑开

```

