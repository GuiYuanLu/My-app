<template>
  <section>
    <div v-for="(index, item) in NavOptions" :key="index">
      {{ item.name }}
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavView",
  components: {},
  data() {
    return {
      NavOptions: [
        { path: "/", name: "首页" },
        { path: "/", name: "介绍" },
        { path: "/", name: "文化" },
        { path: "/", name: "反馈" },
      ],
    };
  },
});
</script>
