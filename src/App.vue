<template>
  <HeaderTemplate />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <MainDiv />
  <FooterTemplate />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderTemplate from "./components/HeaderTemplate.vue";
import MainDiv from "./components/MainDiv.vue";
import FooterTemplate from "./components/FooterTemplate.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderTemplate,
    MainDiv,
    FooterTemplate,
  },
});
</script>

<style>
#app {
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  padding: 0;
  margin: 0;
}
</style>
