<template>
  <v-main>
    <hello-world />
  </v-main>
</template>
<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/hello-world.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
