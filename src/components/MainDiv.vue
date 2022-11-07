<template>
  <main>
    <div v-for="item in items" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  specialCharList,
  SpecialCharType,
  specialCharStruct,
} from "@/Data/SpecialChars";

export default defineComponent({
  name: "HeaderTemplate",
  data() {
    return {
      items: specialCharList as specialCharStruct[],
    };
  },
});
</script>

<style>
header {
  background-color: lightpink;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  font-size: 20px;
}
</style>
