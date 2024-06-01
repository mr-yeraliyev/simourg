<template>
  <div class="modal">
    <div class="modal__backdrop" @click="close"></div>
    <div class="modal__content">
      <button class="modal__close-button" @click="close">✖️</button>
      <h3 class="modal__title">Добавить задачу</h3>
      <form @submit.prevent="saveTask">
        <label class="modal__label">
          Название
          <input
            v-model="task.title"
            type="text"
            class="modal__input"
            required
          />
        </label>
        <label class="modal__label">
          Описание
          <textarea
            v-model="task.description"
            class="modal__textarea"
            required
          ></textarea>
        </label>
        <label class="modal__label">
          Срок выполнения
          <input
            v-model="task.dueDate"
            type="date"
            class="modal__input"
            required
          />
        </label>
        <button type="submit" class="modal__save-button">СОХРАНИТЬ</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue'
import { useTasks } from '../stores'
import { storeToRefs } from 'pinia'
import { Task } from '../types'

const emit = defineEmits(['close', 'save'])

const initialTaskFormValues = {
  title: '',
  description: '',
  dueDate: '',
}

const task = ref<Omit<Task, 'id' | 'completed'>>({ ...initialTaskFormValues })

const close = () => {
  emit('close')
}

const saveTask = () => {
  emit('save', task.value)
  close()
}

const store = useTasks()
const { singleTask } = storeToRefs(store)
onMounted(() => {
  task.value = singleTask.value
    ? { ...singleTask.value }
    : { ...initialTaskFormValues }
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  &__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &__content {
    position: relative;
    width: 400px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    z-index: 1001;
  }

  &__close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  &__title {
    margin-bottom: 20px;
    text-align: center;
  }

  &__label {
    display: block;
    margin-bottom: 15px;
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  &__textarea {
    resize: none;
    height: 80px;
  }

  &__save-button {
    display: block;
    width: 100%;
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
