<template>
  <n-notification-provider>
    <content />
  </n-notification-provider>
</template>

<script setup lang='ts'>
import { c, NNotificationProvider, useNotification } from 'naive-ui'
import { h, render } from 'vue'
const content = {
  setup() {
    const notification = useNotification()
    let count = 10
    const n = notification.create({
      title: '测试',
      content: () => {
        return h(
          'div',
          { style: { backgroundColor: 'red' }, innerHTML: '<h1>测试</h1>' })
      },
      duration: 1,
    })
  },
}
</script>

<style lang="less" scoped>
</style>
