<template>
  <n-alert title="Info 类型" type="info" closable>
    <div class="ztx-text-run-container">
      <p class="anmate">
        在css中，可以利用animationh和keyframest通过给文字绑定一个循环滚动动画来实现文字循环滚动效果
        在css中，可以利用animationh和keyframest通过给文字绑定一个循环滚动动画来实现文字循环滚动效果
        在css中，可以利用animationh和keyframest通过给文字绑定一个循环滚动动画来实现文字循环滚动效果
        在css中，可以利用animationh和keyframest通过给文字绑定一个循环滚动动画来实现文字循环滚动效果
      </p>
    </div>
  </n-alert>
</template>

<script setup lang='ts'>
import { NAlert } from 'naive-ui'
</script>

<style lang="less" scoped>
.ztx-text-run-container {
  margin: 0 auto;
  border: 0px solid #ff6700;
  overflow: hidden;
  .anmate {
    font-size: 12px;
    color: #000;
    display: inline-block;
    white-space: nowrap;
    &:hover {
      animation-play-state: paused;
    }
    animation: 50s wordsLoop linear infinite normal;
  }

  @keyframes wordsLoop {
    0% {
      transform: translateX(200px);
      -webkit-transform: translateX(200px);
    }

    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }

  @-webkit-keyframes wordsLoop {
    0% {
      transform: translateX(200px);
      -webkit-transform: translateX(200px);
    }

    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }
}
</style>
