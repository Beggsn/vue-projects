<template>
  <main>
    <div id="app" class="inside">
      <BookList />
    </div>
  </main>
</template>

<script>
import BookList from "./components/BookList.vue";

export default {
  name: "App",
  components: {
    BookList,
  },
};
</script>
