<template>
  <div
    :class="[
      'task-list__item',
      { 'task-list__item--deprecated': isTaskDeprecated(task) },
    ]"
  >
    <input
      type="checkbox"
      @click="handleTaskCompleteClick"
      class="task-list__checkbox"
    />
    <div class="task-list__details">
      <div
        :class="[
          'task-list__title',
          { 'task-list__title--completed': task.completed },
        ]"
      >
        {{ task.title }}
      </div>
      <div class="task-list__date">{{ formatDate(String(task.dueDate)) }}</div>
    </div>
    <div class="task-list__actions">
      <custom-button @click="handleDeleteClick"> УДАЛИТЬ </custom-button>
      <custom-button @click="handleEditClick"> РЕДАКТИРОВАТЬ </custom-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Task } from '../types'
import { formatDate } from '../../shared/utils'

import CustomButton from '../../shared/components/CustomButton.vue'

type SingleTaskEmits = {
  delete: [id: string | number]
  edit: [task: Task]
  changeStatus: [task: Task, completed: boolean]
}

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
})

const emit = defineEmits<SingleTaskEmits>()

const handleDeleteClick = () => {
  emit('delete', props.task.id)
}

const handleEditClick = () => {
  emit('edit', props.task)
}

const handleTaskCompleteClick = (payload: MouseEvent) => {
  const checked = payload?.target?.checked
  emit('changeStatus', props.task, checked)
}

const isTaskDeprecated = (task: Task): boolean => {
  return new Date(task.dueDate) < new Date()
}
</script>

<style scoped lang="scss">
.task-list {
  &__item {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f4f4f4;
    border-radius: 4px;
    cursor: pointer;
    &--deprecated {
      background-color: #f78c8c;
    }
  }
  &__checkbox {
    margin: 0;
  }
  &__details {
    flex-grow: 1;
    margin-left: 10px;
  }
  &__title {
    font-weight: bold;
    &--completed {
      text-decoration: line-through;
    }
  }
  &__date {
    color: #888;
  }
  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>
