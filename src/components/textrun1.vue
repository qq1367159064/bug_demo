<template>
  <div>
    <n-alert title="公告" type="info" closable>
      <template #icon>
        <span>测试</span>
      </template>
      <div class="ztx-text-run-container">
        <div
          class="ztx-text-run-content"
          @click="clickHandle"
          @mouseover="mouseoverHandle"
          @mouseout="mouseoutHandle"
        >
          <div class="ztx-text-run-text">
              h 现在是全局导入，而不是作为参数传递给渲染函数
更改渲染函数参数，使其在有状态组件和函数组件的表现更加一致
VNode 现在有一个扁平的 prop 结构
VNode 现在有一个扁平的 prop 结构
VNode 现在有一个扁平的 prop 结构
VNode 现在有一个扁平的 prop 结构
VNode 现在有一个扁平的 prop 结构
VNode 现在有一个扁平的 prop 结构
VNode 现在有一个扁平的 prop 结构
          </div>
        </div>
      </div>
    </n-alert>
  </div>
</template>

<script setup lang='ts'>
import { NAlert } from 'naive-ui'
import { onMounted, nextTick, ref } from 'vue'

const timer = ref<any>(null)

// method

// 鼠标点击
const clickHandle = () => {
  alert('点击了')
}

// 鼠标移入
const mouseoverHandle = () => {
  if (timer.value !== null) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

// 鼠标移出
const mouseoutHandle = () => {
  initTextRun()
}
const initTextRun = () => {
  let box: any = document.querySelector('.ztx-text-run-container')
  let content: any = document.querySelector('.ztx-text-run-content')
  let text: any = document.querySelector('.ztx-text-run-text')

  let [textWidth, boxWidth] = [text.offsetWidth, box.offsetWidth]

  const toScrollLeft = () => {
    //  如果文字长度大于滚动条距离，则递归拖动
    if (textWidth > box.scrollLeft) {
      box.scrollLeft++
      timer.value = setTimeout(() => toScrollLeft(), 18)
    } else {
      if (timer.value !== null) {
        // clearTimeout(timer.value)
        // timer.value = null
      }
    }
  }

  const checkScrollLeft = () => {
    if (boxWidth > textWidth) {
      return false
    }
    content.innerHTML += content.innerHTML
    let _text: any = document.querySelector('.ztx-text-run-text')
    _text.classList.add('padding')
    textWidth = _text.offsetWidth
    toScrollLeft()
  }

  checkScrollLeft()
}

onMounted(() => {
  nextTick(() => {
    initTextRun()
  })
})
</script>

<style lang="less">
.ztx-text-run-container {
  white-space: nowrap;
  overflow: hidden;
}

.ztx-text-run-content {
  cursor: pointer;
}

.ztx-text-run-content div {
  display: inline-flex;
  cursor: pointer;
}

.ztx-text-run-content div.padding {
  padding-right: 300px;
}
</style>
