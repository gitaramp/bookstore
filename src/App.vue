<template>
  <v-app>
    <app-bar />
    <v-container fluid>
      <router-view />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/common/app-bar.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
  },
});
</script>
