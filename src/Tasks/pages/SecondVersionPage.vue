<template>
  <div class="container">
    <div :style="currentState.inputGroup" class="input-group" />
    <div :style="currentState.inputLabel" class="input-label">Label</div>
    <div :style="currentState.inputField" class="input-field" />

    <div class="values">
      <div :style="currentState.values_1" class="values_1">
        <div :style="currentState.vector_1" class="vector" />
        <input type="number" />
      </div>
      <div :style="currentState.values_2" class="values_2">
        <div :style="currentState.vector_2" class="vector" />
        <input type="number" />
      </div>
      <div :style="currentState.values_3" class="values_3">
        <div :style="currentState.vector_3" class="vector" />
        <input type="number" />
      </div>
      <ToggleButton :state="state" @click="changeState" class="toggle-button" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, StyleValue } from 'vue'
import ToggleButton from '../components/ToggleButton.vue'

interface State {
  inputGroup: StyleValue
  inputLabel: StyleValue
  inputField: StyleValue
  values_1: StyleValue
  values_2: StyleValue
  values_3: StyleValue
  vector_1: StyleValue
  vector_2: StyleValue
  vector_3: StyleValue
}

const state = ref(0)
const changeState = () => {
  state.value = (state.value + 1) % 4
}

const states: Record<string, State> = {
  state_1: {
    inputGroup: { height: '40px' },
    inputLabel: { width: '28.4%', transform: 'translate(17%, 27%)' },
    inputField: { width: '51.1%', transform: 'translate(64%, 27%)' },
    values_1: { transform: 'translate(0, 0)' },
    values_2: { transform: 'translate(130%, 0)' },
    values_3: { transform: 'translate(260%, 0)' },
    vector_1: { height: '56px' },
    vector_2: { height: '56px' },
    vector_3: { height: '47px' },
  },
  state_2: {
    inputGroup: { height: '40px' },
    inputLabel: { width: '28.4%', transform: 'translate(205%, 27%)' },
    inputField: { width: '51.1%', transform: 'translate(17%, 27%)' },
    values_1: { transform: 'translate(260%, 0)' },
    values_2: { transform: 'translate(130%, 0)' },
    values_3: { transform: 'translate(0, 0)' },
    vector_1: { height: '56px' },
    vector_2: { height: '56px' },
    vector_3: { height: '47px' },
  },
  state_3: {
    inputGroup: { height: '62px' },
    inputLabel: { width: '79.5%', transform: 'translate(10%, 27%)' },
    inputField: { width: '65%', transform: 'translate(34.5%, 120%)' },
    values_1: { transform: 'translate(0, 0)' },
    values_2: { transform: 'translate(130%, 0)' },
    values_3: { transform: 'translate(260%, 0)' },
    vector_1: { height: '56px' },
    vector_2: { height: '32px' },
    vector_3: { height: '26px' },
  },
  state_4: {
    inputGroup: { height: '62px' },
    inputLabel: { width: '65%', transform: 'translate(34.5%, 120%)' },
    inputField: { width: '79.5%', transform: 'translate(10%, 27%)' },
    values_1: { transform: 'translate(130%, 0)' },
    values_2: { transform: 'translate(0, 0)' },
    values_3: { transform: 'translate(260%, 0)' },
    vector_1: { height: '32px' },
    vector_2: { height: '56px' },
    vector_3: { height: '26px' },
  },
}

const currentState = computed(() => states[`state_${state.value + 1}`])
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
}

.input-group,
.input-label,
.input-field {
  position: absolute;
  top: 0;
  left: 0;
  transition-property: width height transform;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

.input-group {
  background-color: #f7f7f7;
  border: 1px solid #ced1d9;
  width: 100%;
  border-radius: 4px;
}

.input-label {
  color: #969696;
  display: flex;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ced1d9;
}

.input-field {
  border: 1px solid #ced1d9;
  height: 24px;
  background-color: #ffffff;
}

.values {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 90px);
}

.values_1,
.values_2,
.values_3 {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.7%;
  height: 30px;
  transition: transform 0.4s ease;
}

.vector {
  position: absolute;
  bottom: 31px;
  left: 50%;
  width: 1px;
  background-color: #ced1d9;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -1.3px;
    width: 4px;
    height: 4px;
    background-color: #ced1d9;
    border-radius: 50%;
  }

  transition: height 0.4s ease;
}

.toggle-button {
  position: absolute;
  bottom: -30px;
  right: 0;
}

input {
  width: 100%;
  height: 100%;
  border: 1px solid #ced1d9;
  border-radius: 5px;
}
</style>
