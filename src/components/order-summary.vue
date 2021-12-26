<template>
  <v-card elevation="16" max-width="1000px" class="mx-auto pa-7">
    <p class="font-weight-bold">Summary:</p>
    <div class="mt-2">
      <p class="my-2">Name: {{ orderData.name }}</p>
      <p class="my-2">Surname: {{ orderData.surname }}</p>
      <p class="my-2">Place: {{ orderData.place }}</p>
      <p class="my-2">Postal code: {{ orderData.postalCode }}</p>
      <p class="my-2">Phone number: {{ orderData.phoneNumber }}</p>
      <p class="my-2">Email: {{ orderData.email }}</p>
      <p class="my-2" v-if="orderData.discountCode">
        Discount code: {{ orderData.discountCode }}
      </p>
      <v-divider></v-divider>
      <p>
        Final price:
        <strong>${{ finalPrice }}</strong>
      </p>
    </div>

    <div class="d-flex justify-center">
      <p class="green--text font-weight-bold">Thank you for shopping</p>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import { OrderData } from "@/types/order";

@Component({
  name: "OrderSummary",
})
export default class OrderSummary extends Vue {
  @Prop() orderData!: OrderData;

  get finalPrice(): string {
    return this.$store.state.finalPrice;
  }
}
</script>
