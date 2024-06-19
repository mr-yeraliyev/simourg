<template>
  <span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="#CED1D9" />
      <rect
        :x="x"
        :y="y"
        :width="width"
        :height="height"
        fill="#CED1D9"
        class="state-rect"
      />
    </svg>
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

const x = computed(() => (props.state === 1 ? 14 : 0.5))
const y = computed(() => (props.state === 3 ? 14 : 0))
const width = computed(() => (props.state === 2 || props.state === 3 ? 20 : 6))
const height = computed(() => (props.state === 2 || props.state === 3 ? 6 : 20))
</script>

<style scoped>
.state-rect {
  transition-property: x, height, y, width;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}
</style>
