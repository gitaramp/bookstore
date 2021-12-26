<template>
  <v-main>
    <book-list />
  </v-main>
</template>
<script lang="ts">
import Vue from "vue";
import BookList from "@/components/book-list.vue";

export default Vue.extend({
  name: "Home",
  components: {
    BookList,
  },
});
</script>
