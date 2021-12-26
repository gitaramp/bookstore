<template>
  <v-app-bar app color="primary" dark>
    <router-link :to="{ name: 'Home' }">
      <v-btn text class="ml-5">Bookstore</v-btn>
    </router-link>

    <v-spacer></v-spacer>
    <router-link :to="{ name: 'Cart' }">
      <v-btn text class="mr-10">
        <p v-if="cartSize" class="cart__size">{{ cartSize }}</p>
        Cart
        <v-icon right>mdi-cart</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Book } from "@/types/books";

@Component({
  name: "AppBar",
})
export default class AppBar extends Vue {
  get cartSize(): Book[] {
    return this.$store.state.cart.length;
  }
}
</script>
<style lang="scss" scoped>
.cart {
  &__size {
    color: #ffff00;
  }
}
</style>
