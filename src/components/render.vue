<script  lang='ts'>
import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'test',
  setup() {
    // return () =>
    const countOps = 100
  },
  render() {
    return h(
      'div',
      {
        style: {color: 'red'},
        innerHTML: '<h1>测试</h1>'
      },
    )
  },
})
</script>

<style lang="less" scoped>
</style>
