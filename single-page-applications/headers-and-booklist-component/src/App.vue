<template>
  <LayoutHeader />
  <main>
    <div id="app" class="inside">
      <BookList />
    </div>
  </main>
</template>

<script>
import BookList from "./components/BookList.vue";
import LayoutHeader from "./components/LayoutHeader.vue";

export default {
  name: "App",
  components: {
    BookList,
    LayoutHeader,
  },
};
</script>
