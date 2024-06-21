<template>
  <div class="container">
    <div :style="currentState.inputGroup" class="container__input-group" />
    <div :style="currentState.inputLabel" class="container__input-label">
      Label
    </div>
    <div :style="currentState.inputField" class="container__input-field" />

    <div class="container__values">
      <div
        :style="currentState.values_1"
        class="container__values-item container__values-item--1"
      >
        <div
          :style="currentState.vector_1"
          class="container__vector container__vector--1"
        />
        <input type="number" :disabled="state === 4" />
      </div>
      <div
        :style="currentState.values_2"
        class="container__values-item container__values-item--2"
      >
        <div
          :style="currentState.vector_2"
          class="container__vector container__vector--2"
        />
        <input type="number" />
      </div>
      <div
        :style="currentState.values_3"
        class="container__values-item container__values-item--3"
      >
        <div
          :style="currentState.vector_3"
          class="container__vector container__vector--3"
        />
        <input type="number" />
      </div>
      <ToggleButton
        :state="state"
        @click="changeState"
        class="container__toggle-button"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, StyleValue } from 'vue'
import ToggleButton from '../components/ToggleButton.vue'

type Elements =
  | 'inputGroup'
  | 'inputLabel'
  | 'inputField'
  | 'values_1'
  | 'values_2'
  | 'values_3'
  | 'vector_1'
  | 'vector_2'
  | 'vector_3'

type State = Record<Elements, StyleValue>

const state = ref(0)
const changeState = () => {
  state.value = (state.value + 1) % 5
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
  state_5: {
    inputGroup: { height: '40px' },
    inputLabel: {
      width: '65%',
      transform: 'translate(34.5%, 120%)',
      display: 'none',
    },
    inputField: { width: '79.5%', transform: 'translate(10%, 27%)' },
    values_1: { transform: 'translate(130%, 0)' },
    values_2: { transform: 'translate(0, 0)' },
    values_3: { transform: 'translate(260%, 0)' },
    vector_1: { height: '32px', display: 'none' },
    vector_2: { height: '56px' },
    vector_3: { height: '47px' },
  },
}

const currentState = computed(() => states[`state_${state.value + 1}`])
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  &__toggle-button {
    position: absolute;
    bottom: -30px;
    right: 0;
  }

  &__input-group,
  &__input-label,
  &__input-field {
    position: absolute;
    top: 0;
    left: 0;
    transition-property: width height transform;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
  &__input-group {
    background-color: #f7f7f7;
    border: 1px solid #ced1d9;
    width: 100%;
    border-radius: 4px;
  }
  &__input-label {
    color: #969696;
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    border: 1px dashed #ced1d9;
  }
  &__input-field {
    border: 1px solid #ced1d9;
    height: 24px;
    background-color: #ffffff;
  }
  &__values {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 90px);
  }
  &__values-item {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.7%;
    height: 30px;
    transition: transform 0.4s ease;

    &--1 {
      transform: translate(0, 0);
    }
    &--2 {
      transform: translate(130%, 0);
    }
    &--3 {
      transform: translate(260%, 0);
    }
  }
  &__vector {
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

    &--1 {
      height: 56px;
    }
    &--2 {
      height: 56px;
    }
    &--3 {
      height: 47px;
    }
  }
}

input {
  width: 100%;
  height: 100%;
  border: 1px solid #ced1d9;
  border-radius: 5px;
  &:disabled {
    background-color: gray;
  }
}
</style>
