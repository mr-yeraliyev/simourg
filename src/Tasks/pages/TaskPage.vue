<template>
    <div>
        This is task page
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTasks } from '../stores';

const store = useTasks()
onMounted(() => {
    store.fetchTasks()
})
</script>

<style scoped>

</style>