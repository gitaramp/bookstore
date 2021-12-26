<template>
  <v-main>
    <shopping-cart />
  </v-main>
</template>
<script lang="ts">
import Vue from "vue";
import ShoppingCart from "@/components/shopping-cart.vue";

export default Vue.extend({
  name: "Cart",
  components: {
    ShoppingCart,
  },
});
</script>
