<template>
  <div class="container">
    <span class="vector_1" :style="states[state].vector_1" />
    <span class="vector_2" :style="states[state].vector_2" />
    <span class="vector_3" :style="states[state].vector_3" />
    <div class="input-group" :style="states[state].inputGroup">
      <label :style="states[state].inputLabel" class="input-label">Label</label>
      <span :style="states[state].inputField" class="input-field" />
    </div>
    <div class="values">
      <div :style="states[state].values_1" class="values_1">
        <input type="number" />
      </div>
      <div :style="states[state].values_2" class="values_2">
        <input type="number" />
      </div>
      <div :style="states[state].values_3" class="values_3">
        <input type="number" />
      </div>
      <ToggleButton :state="state" @click="changeState" class="toggle-button" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ToggleButton from '../components/ToggleButton.vue'

interface State {
  inputGroup: string
  inputLabel: string
  inputField: string
  values_1: string
  values_2: string
  values_3: string
  vector_1: string
  vector_2: string
  vector_3: string
}

const state = ref(0)
const changeState = () => {
  state.value === 3 ? (state.value = 0) : state.value++
}
// You can put this into static values
const states: State[] = [
  {
    inputGroup: 'height: 40px;',
    inputLabel: 'width: 28.4%; transform: translate(17%, 27%);',
    inputField: 'width: 51.1%; transform: translate(64%, 27%);',
    values_1: 'transform: translate(0, 0);',
    values_2: 'transform: translate(130%, 0);',
    values_3: 'transform: translate(260%, 0);',
    vector_1: 'height: 47px;',
    vector_2: 'height: 47px;',
    vector_3: 'height: 38px;',
  },
  {
    inputGroup: 'height: 40px;',
    inputLabel: 'width: 28.4%; transform: translate(205%, 27%);',
    inputField: 'width: 51.1%; transform: translate(17%, 27%);',
    values_1: 'transform: translate(260%, 0);',
    values_2: 'transform: translate(130%, 0);',
    values_3: 'transform: translate(0, 0);',
    vector_1: 'height: 38px;',
    vector_2: 'height: 47px;',
    vector_3: 'height: 47px;',
  },
  {
    inputGroup: 'height: 62px;',
    inputLabel: 'width: 79.5%; transform: translate(10%, 27%);',
    inputField: 'width: 65%; transform: translate(34%, 120%);',
    values_1: 'transform: translate(0, 0);',
    values_2: 'transform: translate(130%, 0);',
    values_3: 'transform: translate(260%, 0);',
    vector_1: 'height: 43px;',
    vector_2: 'height: 18px;',
    vector_3: 'height: 13px;',
  },
  {
    inputGroup: 'height: 62px;',
    inputLabel: 'width: 65%; transform: translate(34%, 120%);',
    inputField: 'width: 79.5%; transform: translate(10%, 27%);',
    values_1: 'transform: translate(130%, 0);',
    values_2: 'transform: translate(0, 0);',
    values_3: 'transform: translate(260%, 0);',
    vector_1: 'height: 43px;',
    vector_2: 'height: 18px;',
    vector_3: 'height: 13px;',
  },
]
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  background-color: red;

  .vector_1 {
    position: absolute;
    bottom: -89px;
    left: 55px;
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
  .vector_2 {
    position: absolute;
    bottom: -89px;
    left: 106px;
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
  .vector_3 {
    position: absolute;
    bottom: -89px;
    left: 158px;
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
}

.input-group {
  background-color: #f7f7f7;
  border: 1px solid #ced1d9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 4px;
  transform: translate(20%, 20%);

  transition: height 0.4s ease;
}

.input-label {
  color: #969696;
  display: flex;

  height: 24px;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ced1d9;
  position: absolute;
  top: 0;
  left: 0;
  transition-property: transform, width;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

.input-field {
  border: 1px solid #ced1d9;

  height: 24px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  transition-property: transform, width;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

.values {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 90px);
  &_1 {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.7%;
    height: 30px;

    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
  &_2 {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.7%;
    height: 30px;

    transition-property: transform;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
  &_3 {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.7%;
    height: 30px;

    transition-property: transform, width;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
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
