<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hr />
  <MyFirstComponent />
  <hr />
  <MySecondComponent />
</template>

<script>
import MyFirstComponent from "@/components/MyFirstComponent.vue";
import MySecondComponent from "@/components/MySecondComponent.vue";

export default {
  name: "App",
  components: {
    MyFirstComponent,
    MySecondComponent,
  },
};
</script>

<!-- <style>
@import url(./assets/reset.css);
</style> -->
