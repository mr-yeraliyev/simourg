<template>
  <div class="modal">
    <div class="modal__backdrop" @click="close"></div>
    <div class="modal__content">
      <custom-button class="modal__close-button" @click="close"
        ><svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L16.5 16.5" stroke="white" stroke-width="1.5" />
          <path d="M16.5 1.5L1.5 16.5" stroke="white" stroke-width="1.5" />
        </svg>
      </custom-button>
      <h3 class="modal__title"></h3>
      <form @submit.prevent="saveTask">
        <label class="modal__label">
          НАЗВАНИЕ
          <input
            v-model="task.title"
            type="text"
            class="modal__input"
            required
          />
        </label>
        <label class="modal__label">
          ОПИСАНИЕ
          <textarea
            v-model="task.description"
            class="modal__textarea"
            required
          ></textarea>
        </label>
        <label class="modal__label">
          СРОК ВЫПОЛНЕНИЕ
          <input
            v-model="task.dueDate"
            type="date"
            class="modal__input"
            required
          />
        </label>
        <div class="modal__footer">
          <custom-button type="submit">СОХРАНИТЬ</custom-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useTasks } from '../stores'
import { Task } from '../types'

import CustomButton from '../../shared/components/CustomButton.vue'

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
  }

  &__title {
    margin-bottom: 20px;
    text-align: center;
  }

  &__label {
    display: block;
    margin-bottom: 15px;
    color: #8d8d8d;
  }

  &__input,
  &__textarea {
    width: 95%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  &__textarea {
    resize: none;
    height: 80px;
  }
  &__footer {
    display: flex;
    justify-content: center;
  }
}
</style>
