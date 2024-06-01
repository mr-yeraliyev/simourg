<template>
  <div class="task-list">
    <div class="task-list__header">
      <input
        type="text"
        placeholder="Поиск"
        class="task-list__search-input"
        @input="handleTaskSearch($event)"
      />
      <custom-button @click="handleAddNewTaskClick">
        ДОБАВИТЬ ЗАДАЧУ
      </custom-button>
    </div>
    <SingleTask
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @edit="handleEditClick"
      @delete="handleDeleteClick"
      @change-status="handleCompleteStatusChange"
    />
  </div>
  <Modal
    v-if="showModal"
    @close="showModal = false"
    @save="handleModalFormSave"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useTasks } from '../stores'
import { Task } from '../types'

import Modal from './TaskModalForm.vue'
import SingleTask from './SingleTask.vue'
import CustomButton from '../../shared/components/CustomButton.vue'

const store = useTasks()
const { tasks, singleTask } = storeToRefs(store)
const showModal = ref(false)

const handleTaskSearch = (event: Event) => {
  store.fetchTasks(event?.target?.value)
}

const handleModalFormSave = async (
  formValues: Omit<Task, 'id' | 'completed'>
) => {
  singleTask.value
    ? store.editTask({ ...singleTask.value, ...formValues })
    : store.addTask({ ...formValues, completed: false })
  showModal.value = false
  store.setSingleTask(null)
}

const handleAddNewTaskClick = () => {
  showModal.value = true
  store.setSingleTask(null)
}

const handleEditClick = (task: Task) => {
  store.setSingleTask(task)
  showModal.value = true
}

const handleDeleteClick = (taskId: string) => {
  window.confirm('Вы уверены, что хотите удалить эту задачу?') &&
    store.deleteTask(taskId)
}

const handleCompleteStatusChange = (task: Task, completed: boolean) => {
  store.editTask({ ...task, completed })
}
</script>

<style scoped lang="scss">
.task-list {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
