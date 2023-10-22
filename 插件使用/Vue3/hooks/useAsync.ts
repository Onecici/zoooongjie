import { ref, type UnwrapRef } from "vue";

export default function useAsync<T, S = any>(asyncFn: () => Promise<T>, initValue: S, immediate = true) {
  const pending = ref(false);
  const data = ref(initValue);
  const error = ref(null);
  const execute = function () {
    pending.value = true;
    error.value = null;
    return asyncFn()
      .then((res) => {
        data.value = res as UnwrapRef<typeof data>;
        pending.value = false;
      })
      .catch((err) => {
        error.value = err;
        pending.value = false;
      });
  };

  immediate && execute();

  return {
    pending,
    data,
    error,
    execute,
  };
}
// T定义promise返回值类型
// S定义初始值类型
// fn是函数返回promise
// initValue内部初始值
// useAsync<T, S>(fn,initValue)
