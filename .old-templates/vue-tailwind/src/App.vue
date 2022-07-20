<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const incCount = () => {
  count.value++
}
</script>

<template>
  <div class="bg-gray-50 px-4 min-h-screen">
    <div class="flex flex-col justify-center items-center min-h-screen">
      <div class="shadow-sm rounded bg-white p-8 w-full max-w-xl">
        <div class="flex flex-col items-center space-y-4">
          <img
            src="/assets/svg/frog.svg"
            alt="froggo logo"
            class="w-36 sm:w-48"
          />

          <h1 class="text-center text-3xl sm:text-4xl font-medium">
            ¡Bienvenido!
          </h1>

          <p class="text-center text-gray-400 font-medium">
            You are using the
            <a
              class="font-semibold hover:underline hover:text-gray-500"
              href="https://github.com/froggo-templates/vue-tailwind"
              target="_blank"
              rel="noreferrer noopener"
              >Vue + Tailwind</a
            >
            template.
          </p>

          <hr class="w-full" />

          <p class="text-center text-gray-400 font-medium">
            Also here's a button:
          </p>

          <button
            class="shadow-sm rounded bg-indigo-500 hover:bg-indigo-600 px-3 py-2 text-white"
            @click="incCount"
          >
            Count: {{ count }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
