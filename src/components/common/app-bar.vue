<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">Bookstore</div>

    <v-spacer></v-spacer>

    <v-btn text>
      <span class="mr-2">Cart</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppBar",
});
</script>
