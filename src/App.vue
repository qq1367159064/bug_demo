<script setup lang="ts">

</script>
<template>
  <div class="app-nav">
    <router-link to="page1">page1</router-link>
    <router-link to="page2">page2</router-link>
  </div>
  <div class="app-content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  overflow: auto;

  .app-nav {
    width: 100%;
    height: 30px;
    background: #ffffff;
    border-bottom: 1px solid #cccccc;
    position: absolute;
  }

  .app-content {
    margin-top: 50px;
  }
}
</style>
