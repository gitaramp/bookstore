<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <p class="page-title font-weight-thin mb-3">New Releases Books</p>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <error-handler
        v-if="isError"
        message="Failed to download books"
        @tryAgain="fetchBooks()"
      />
      <v-progress-circular
        v-else-if="isLoading"
        :size="50"
        color="primary"
        indeterminate
      />
      <book-item v-for="(book, i) in books" :key="i" :book="book" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ErrorHandler from "@/components/common/error-handler.vue";
import BookItem from "@/components/book-item.vue";
import { Book } from "@/types/books";

@Component({
  name: "BookList",
  components: {
    ErrorHandler,
    BookItem,
  },
})
export default class BookList extends Vue {
  get books(): Book[] {
    return this.$store.state.books;
  }
  get isLoading(): boolean {
    return this.$store.state.isLoading;
  }
  get isError(): boolean {
    return this.$store.state.isError;
  }

  mounted(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.$store.dispatch("fetchBooks");
  }
}
</script>
<style lang="scss" scoped>
.page-title {
  font-size: 1.3em;
  text-transform: uppercase;
}
</style>
