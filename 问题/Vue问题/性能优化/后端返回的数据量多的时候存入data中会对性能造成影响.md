```js
export default {
  data: () => ({
    users: {}
  }),

  async created() {
    const res = await axios.get("/api/users");
      // 因为data中的数据存放的都是具有响应式的 如果存储大量的数据会影响性能
     // 如果数据比较多且不需要修改只需要展示数据的话可以使用Object.freeze从而节省性能
    this.users = Object.freeze(res);
  }
};
```

Vue会通过Object.defineProperty对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要Vue来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止Vue劫持我们的数据呢？

可以通过Object.freeze方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。
