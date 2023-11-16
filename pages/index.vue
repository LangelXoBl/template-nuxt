<script setup lang="ts">
import { useCounterStore } from "#imports";

const counterStore = useCounterStore();
const count = computed(() => counterStore.count);
const { increment } = counterStore;
</script>

<template>
  <div class="text-center">
    <h1 class="text-6xl pb-6 dark:text-white">PokeApi UI</h1>

    <!-- text field search -->
    <div class="">
      <input
        type="text"
        class="w-2/5 m-2 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
        placeholder="Search Pokemon by name"
      />
      <button
        class="outline outline-2 rounded outline-gray-500 px-2 py-1 bg-gray-200 hover:bg-gray-400"
        type="button"
      >
        search
      </button>
    </div>

    <p>Counter: {{ count }}</p>

    <button
      class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      @click="increment"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        increment
      </span>
    </button>
  </div>
</template>
