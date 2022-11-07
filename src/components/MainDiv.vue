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
@charset "UTF-8";

$sbtb: 540;
$tbfb: 1024;

$breakpoint: (
  sb: "screen and (max-width: #{$sbtb}px)",
  tb: "screen and (min-width: #{$sbtb + 1}px)",
  fb: "screen and (min-width: #{$tbfb}px)",
);

@mixin mq($bp) {
  @media #{map-get($breakpoint, $bp)} {
    @content;
  }
}

// ==============================

.charUnit {
  .title {
    font-size: 1.2rem;
  }
}
</style>
