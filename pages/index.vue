<script setup lang="ts">
// import { useCounterStore } from "#imports";
interface Pokemon {
  name: string;
  url: string;
}

// const counterStore = useCounterStore();
// const count = computed(() => counterStore.count);
// const { increment } = counterStore;

// get pokemons from pokeApi
const pokemons = ref<Pokemon[]>([]);
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
const data = (await response.json()) as { results: Pokemon[] };
console.log(data.results);
pokemons.value = data.results;
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
    <section>
      <!-- list pokemons by pokeApi -->
      <ul class="grid grid-cols-4 gap-4">
        <li
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          class="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <!-- <img
            :src="pokemon.sprites.front_default"
            :alt="pokemon.name"
            class="w-32 h-32 rounded-full"
          /> -->
          <h2
            class="mt-4 mb-2 text-xl font-medium text-gray-700 dark:text-white"
          >
            {{ pokemon.name }}
          </h2>
          <!-- <p class="text-sm text-gray-400 dark:text-gray-300">
            {{ pokemon.types[0].type.name }}
          </p> -->
        </li>
      </ul>
    </section>
  </div>
</template>
