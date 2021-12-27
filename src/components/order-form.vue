<template>
  <div>
    <v-card
      v-if="!showSummary"
      elevation="16"
      max-width="1000px"
      class="mx-auto pa-7"
    >
      <v-form ref="form" v-model="isFormValid" lazy-validation>
        <v-text-field
          v-model="orderData.name"
          :rules="requiredFieldRule"
          placeholder="Name"
          solo
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="orderData.surname"
          :rules="requiredFieldRule"
          placeholder="Surname"
          solo
          label="Surname"
          required
        ></v-text-field>
        <v-text-field
          v-model="orderData.place"
          :rules="requiredFieldRule"
          placeholder="Place"
          solo
          label="Place"
          required
        ></v-text-field>
        <v-text-field
          v-model="orderData.postalCode"
          :rules="postalCodeRules"
          v-mask="['##-###']"
          placeholder="xx-xxx"
          solo
          label="Postal code"
          required
        ></v-text-field>
        <v-text-field
          v-model="orderData.phoneNumber"
          :rules="phoneNumberRules"
          v-mask="['+## ### ### ###']"
          placeholder="+xx yyy yyy yyy"
          solo
          label="Phone number"
          required
        ></v-text-field>
        <v-text-field
          v-model="orderData.email"
          :rules="emailRules"
          placeholder="xxx@xxx.xx"
          solo
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="orderData.discountCode"
          placeholder="Discount code"
          solo
          label="Discount code"
        ></v-text-field>
        <div class="d-flex justify-end">
          <v-btn color="primary" @click="makeOrder"> I ORDER AND PAY </v-btn>
        </div>
      </v-form>
    </v-card>
    <order-summary v-else :order-data="orderData" />

    <v-snackbar v-model="showInvalidFormSnackbar" timeout="4000" color="red">
      The data entered is incorrect
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="showInvalidFormSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mask } from "vue-the-mask";
import Component from "vue-class-component";
import { OrderData } from "@/types/order";
import OrderSummary from "@/components/order-summary.vue";
import { BookMutation } from "@/enums/books";

@Component({
  name: "OrderForm",
  directives: { mask },
  components: {
    OrderSummary,
  },
})
export default class OrderForm extends Vue {
  isFormValid = true;
  orderData: OrderData = {
    name: "",
    surname: "",
    place: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    discountCode: "",
  };
  requiredFieldRule = [
    (v: string): string | boolean => !!v || "Field is required",
  ];
  postalCodeRules = [
    ...this.requiredFieldRule,
    (v: string): string | boolean =>
      /^([0-9]{2})(-[0-9]{3})?$/i.test(v) || "Postal code must be valid",
  ];
  phoneNumberRules = [
    ...this.requiredFieldRule,
    (v: string): string | boolean =>
      /^(\+[0-9]{2})(\s[0-9]{3})(\s[0-9]{3})(\s[0-9]{3})?$/i.test(v) ||
      "Postal code must be valid",
  ];
  emailRules = [
    ...this.requiredFieldRule,
    (v: string): string | boolean =>
      /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  showInvalidFormSnackbar = false;
  showSummary = false;

  get finalPrice(): string {
    return this.$store.getters.getFinalPrice;
  }

  validateForm(): boolean {
    return (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }
  async makeOrder(): Promise<void> {
    if (!this.validateForm()) {
      this.showInvalidFormSnackbar = true;
      return;
    }
    if (this.orderData.discountCode === "TUTORE12") {
      this.$store.commit(BookMutation.SET_DISCOUNT, true);
    }
    this.$store.commit(BookMutation.RESET_CART, this.finalPrice);
    this.showSummary = true;
  }
}
</script>
