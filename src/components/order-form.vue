<template>
  <div>
    <v-card elevation="16" max-width="1000px" class="mx-auto pa-7">
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
        <div class="d-flex justify-end">
          <v-btn color="primary" @click="makeOrder"> I ORDER AND PAY </v-btn>
        </div>
      </v-form>
    </v-card>

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
import Component from "vue-class-component";
import { mask } from "vue-the-mask";

interface OrderData {
  name: string;
  surname: string;
  place: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
}

@Component({
  name: "OrderForm",
  directives: { mask },
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

  validateForm(): boolean {
    return (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }
  makeOrder(): void {
    if (!this.validateForm()) {
      this.showInvalidFormSnackbar = true;
      return;
    }
  }
}
</script>
