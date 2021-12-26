<template>
  <v-card class="mx-auto my-4 d-flex flex-column" width="300" height="380">
    <v-img height="250" :src="book.image"></v-img>
    <v-card-title class="book__title pb-5">{{ book.title }}</v-card-title>
    <v-card-text class="book__body">
      <div class="caption">{{ book.price }}</div>
      <v-btn text outlined small color="primary" @click="reserve">
        Add to cart
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { Book } from "@/types/books";

@Component({
  name: "BookItem",
})
export default class BookItem extends Vue {
  @Prop() book!: Book;
}
</script>
<style lang="scss" scoped>
.book {
  &__title {
    font-size: 0.9em;
    padding-bottom: 5px !important;
    word-break: break-word;
  }
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
