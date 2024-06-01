<template>
  <div class="task-list">
    <div class="task-list__header">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск"
        class="task-list__search-input"
      />
      <button class="task-list__add-task-button" @click="handleAddNewTaskClick">
        ДОБАВИТЬ ЗАДАЧУ
      </button>
    </div>
    <SingleTask
      v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
      @edit="handleEditClick"
      @delete="handleDeleteClick"
    />
  </div>
  <Modal
    v-if="showModal"
    @close="showModal = false"
    @save="handleModalFormSave"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Modal from './TaskModalForm.vue'
import SingleTask from './SingleTask.vue'
import { useTasks } from '../stores'
import { storeToRefs } from 'pinia'
import { Task } from '../types'

const store = useTasks()

const searchQuery = ref('')
const showModal = ref(false)
const { tasks, singleTask } = storeToRefs(store)

const filteredTasks = computed(() => {
  return tasks.value.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

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
const handleDeleteClick = (task: Task) => {
  store.deleteTask(task.id + '')
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

  &__add-task-button {
    display: block;
    padding: 10px;
    background-color: #6777ef;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #5563d4;
    }
  }
}
</style>
