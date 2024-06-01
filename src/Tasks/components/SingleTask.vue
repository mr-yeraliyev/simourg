<template>
  <div
    :class="[
      'task-list__item',
      { 'task-list__item--deprecated': isTaskDeprecated(task) },
    ]"
  >
    <input
      type="checkbox"
      v-model="task.completed"
      @click.stop
      class="task-list__checkbox"
    />
    <div class="task-list__details">
      <div class="task-list__title">{{ task.title }}</div>
      <div class="task-list__date">{{ formatDate(String(task.dueDate)) }}</div>
    </div>
    <div class="task-list__actions">
      <button class="task-list__button" @click="handleDeleteClick">
        УДАЛИТЬ
      </button>
      <button class="task-list__button" @click="handleEditClick">
        РЕДАКТИРОВАТЬ
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Task } from '../types'
import { formatDate } from '../../shared/utils'

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
})

const emit = defineEmits(['delete', 'edit'])

const handleDeleteClick = () => {
  if (window.confirm('Are you sure you want to delete this task?')) {
    emit('delete', props.task)
  }
}

const handleEditClick = () => {
  emit('edit', props.task)
}

const isTaskDeprecated = (task: Task): boolean => {
  return new Date(task.dueDate) < new Date()
}
</script>

<style scoped lang="scss">
.task-list__item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 4px;
  cursor: pointer;
}

.task-list__item--deprecated {
  background-color: #f78c8c;
}

.task-list__checkbox {
  margin: 0;
}

.task-list__details {
  flex-grow: 1;
  margin-left: 10px;
}

.task-list__title {
  font-weight: bold;
}

.task-list__date {
  color: #888;
}

.task-list__actions {
  display: flex;
  gap: 10px;
}

.task-list__button {
  padding: 5px 10px;
  background-color: #6777ef;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5563d4;
  }
}
</style>
