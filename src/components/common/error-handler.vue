<template>
  <div>
    <v-row>
      <p class="font-weight-medium subtitle-1">
        {{ message }}
      </p>
    </v-row>
    <v-row class="mt-1 justify-center">
      <v-btn color="primary" depressed @click="onClick()"> Try again </v-btn>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  name: "ErrorHandler",
})
export default class ErrorHandler extends Vue {
  @Prop() message!: string;

  onClick(): void {
    this.$emit("tryAgain");
  }
}
</script>
