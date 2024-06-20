<template>
  <span>
    <span class="container">
      <div class="outer-rect">
        <div v-show="state < 4" :style="innerRectStyle" class="inner-rect" />
      </div>
    </span>
  </span>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  state: {
    type: Number,
    required: true,
  },
})

const x = computed(() => (props.state === 1 ? 14 : 0))
const y = computed(() => (props.state === 3 ? 14 : 0))
const width = computed(() => (props.state === 2 || props.state === 3 ? 20 : 6))
const height = computed(() => (props.state === 2 || props.state === 3 ? 6 : 20))

const innerRectStyle = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`,
  width: `${width.value}px`,
  height: `${height.value}px`,
  backgroundColor: '#CED1D9',
}))
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.outer-rect {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ced1d9;
  border-radius: 1.5px;
}

.inner-rect {
  position: absolute;
  transition-property: height width top left display;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}
</style>
