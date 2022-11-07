<template>
  <main>
    <div class="charUnitContainer">
      <div v-for="item in items" :key="item.id" class="charUnit">
        <div class="title">{{ item.title }}</div>
        <div class="description">{{ item.description }}</div>
        <input type="text" v-model="item.content" class="content" />
        <button class="copy" @click="doCopy">コピー♪</button>
      </div>
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
  methods: {
    copyToClipboard: (content: string) => {
      navigator.clipboard.writeText(content);
    },
    doCopy: function (event: Event) {
      // 自分自身を取得
      const targetElement = event.target as HTMLButtonElement;
      // エラートラップ
      const input = targetElement.previousElementSibling as HTMLInputElement;
      input.select();
      const content = input.value;
      if (content == null) return;
      // コピーされました！というメッセージを表示する
      this.copyToClipboard(content);
      targetElement.classList.add("copied");
      targetElement.textContent = "copied!";
      setTimeout(() => {
        targetElement.classList.remove("copied");
        targetElement.textContent = "コピー♪";
        window.getSelection()?.removeAllRanges();
      }, 1000);
    },
  },
});
</script>

<style lang="scss">
@import "@/template.scss";

// ==============================

.charUnitContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  @include mq(tb) {
    max-width: 80%;
  }
}

.charUnit {
  display: grid;
  $padding: 16;
  width: calc(100% - #{$padding * 2}px);
  margin: 25px 0;
  padding: #{$padding}px;
  box-sizing: border-box;
  border-bottom: 1px gray solid;
  .content {
    text-align: center;
    font-size: 1.5rem;
    padding: 10px;
  }
  @include mq(sb) {
    margin: 0 auto;
    grid-template-columns: 200px 100px 100px;
    grid-template-rows: 50px;
    * {
      margin: 0 1rem;
    }
    .description {
      display: none;
    }
    button {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
      cursor: pointer;
      &.copied {
        font-family: "Consolas";
        letter-spacing: 1px;
        background-color: purple;
        border-color: rgb(150, 15, 150);
      }
    }
  }
  @include mq(tb) {
    margin: 0 auto;
    grid-template-columns: 200px 100px 100px;
    grid-template-rows: 50px;
    * {
      margin: 0 1rem;
    }
    .description {
      display: none;
    }
    button {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
      cursor: pointer;
      &.copied {
        font-family: "Consolas";
        letter-spacing: 1px;
        background-color: purple;
        border-color: rgb(150, 15, 150);
      }
    }
  }
  @include mq(fb) {
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: 200px 500px 100px 100px;
    grid-template-rows: 50px;
    * {
      margin: 0 1rem;
    }
    button {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
      cursor: pointer;
      &.copied {
        font-family: "Consolas";
        letter-spacing: 1px;
        background-color: purple;
        border-color: rgb(150, 15, 150);
      }
    }
  }
}
</style>
