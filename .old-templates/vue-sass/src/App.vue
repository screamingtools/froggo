<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const incCount = () => {
  count.value++
}
</script>

<template>
  <div class="app">
    <div class="app__container">
      <div class="froggo">
        <div class="froggo__container">
          <img
            src="/assets/svg/frog.svg"
            alt="froggo logo"
            class="froggo__logo"
          />
          <h1 class="froggo__title">¡Bienvenido!</h1>

          <p class="froggo__message">
            You are using the
            <a
              class="froggo__link"
              href="https://github.com/froggo-templates/vue-scss"
              target="_blank"
              rel="noreferrer noopener"
              >Vue + SCSS</a
            >
            template.
          </p>

          <hr class="froggo__divider" />

          <p class="froggo__message">Also here's a button:</p>

          <button class="froggo__button" @click="incCount">
            Count: {{ count }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* Do not remove this line */
@import './scss/base/_all';

.app {
  background-color: $grey-50;
  padding: 0 spacing(4);
  min-height: 100vh;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
}

.froggo {
  box-shadow: $shadow-sm;
  border-radius: 0.25rem;
  background-color: $white;
  padding: spacing(8);
  width: 100%;
  max-width: 36rem;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * + * {
      margin-top: spacing(4);
    }
  }

  &__logo {
    width: spacing(36);

    @include sm {
      width: spacing(48);
    }
  }

  &__title {
    text-align: center;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: $font-medium;

    @include sm {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  &__message {
    text-align: center;
    color: $grey-400;
    font-weight: $font-medium;
  }

  &__link {
    font-weight: $font-semibold;
    &:hover {
      color: $grey-500;
      text-decoration: underline;
    }
  }

  &__divider {
    width: 100%;
  }

  &__button {
    box-shadow: $shadow-sm;
    border-radius: 0.25rem;
    background-color: #6366F1;
    padding: spacing(2) spacing(3);
    color: $white;

    &:hover {
      background-color: #4F46E5;
    }
  }
}
</style>
