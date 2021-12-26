<template>
  <v-main>
    <order-form />
  </v-main>
</template>
<script lang="ts">
import Vue from "vue";
import OrderForm from "@/components/order-form.vue";

export default Vue.extend({
  name: "Order",
  components: {
    OrderForm,
  },
});
</script>
