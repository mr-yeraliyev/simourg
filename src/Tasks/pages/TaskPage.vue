<template>
  <div>
    <TasksList />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTasks } from '../stores'

import TasksList from '../components/TasksList.vue'

const store = useTasks()

onMounted(() => {
  store.fetchTasks()
})
</script>

<style scoped></style>
