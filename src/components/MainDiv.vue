<template>
  <main>
    <div v-for="item in items" :key="item.id" class="charUnit">
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
      <div class="description">{{ item.description }}</div>
      <button class="copy">コピー♪</button>
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

<style lang="scss">
@import "@/template.scss";

// ==============================

.charUnit {
  @include mq(sb) {
    background-color: salmon;
  }
  @include mq(tb) {
    background-color: yellow;
  }
  @include mq(fb) {
    background-color: lightblue;
  }
  .title {
    font-size: 1.2rem;
  }
}
</style>
