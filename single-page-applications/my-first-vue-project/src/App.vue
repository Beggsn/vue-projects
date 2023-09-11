<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <MyFirstComponent />
</template>

<script>
import MyFirstComponent from "@/components/MyFirstComponent.vue";

export default {
  name: "App",
  components: {
    MyFirstComponent,
  },
};
</script>

<!-- <style>
@import url(./assets/reset.css);
</style> -->
