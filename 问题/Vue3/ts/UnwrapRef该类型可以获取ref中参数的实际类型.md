```ts
<script setup lang="ts">
import { ref } from "vue";
import type { UnwrapRef } from "vue";


// UnwrapRef该类型可以获取ref中参数的实际类型

const a = ref("asfafs");
type aType = UnwrapRef<typeof a>;

// aType 为string类型
</script>
```

