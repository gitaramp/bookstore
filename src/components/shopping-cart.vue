<template>
  <v-card v-if="books.length" elevation="16" max-width="1000px" class="mx-auto">
    <div v-for="(book, index) in books" :key="index">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            {{ book.title }} <strong>{{ book.price }}</strong>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon color="red" @click="onRemoveItem(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </div>
    <v-divider></v-divider>
    <div class="mt-2">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Summary:
            <strong>${{ finalPrice.toFixed(2) }}</strong></v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <router-link :to="{ name: 'Order' }">
            <v-btn color="primary">NEXT</v-btn>
          </router-link>
        </v-list-item-action>
      </v-list-item>
    </div>
  </v-card>
  <div v-else class="py-5 d-flex justify-center">
    <strong>Your shopping cart is empty</strong>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Book } from "@/types/books";
import { BookMutation } from "@/enums/books";

@Component({
  name: "ShoppingCart",
})
export default class ShoppingCart extends Vue {
  get books(): Book[] {
    return this.$store.state.cart;
  }
  get finalPrice(): number {
    return this.books.reduce(
      (acc, curr) => acc + this.removeCurrency(curr.price),
      0
    );
  }

  removeCurrency(price: string): number {
    return parseFloat(price.replace(/[$,]/g, ""));
  }
  onRemoveItem(index: number): void {
    this.$store.commit(BookMutation.REMOVE_BOOK_FROM_CART, index);
  }
}
</script>
