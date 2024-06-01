<template>
  <button class="custom-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  onClick?: () => void
}>()

const handleClick = () => {
  if (props.onClick) {
    props.onClick()
  }
}
</script>

<style scoped lang="scss">
.custom-button {
  padding: 5px 10px;
  background-color: #6777ef;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5563d4;
  }
}
</style>
