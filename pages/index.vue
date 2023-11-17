<script setup lang="ts">
// import { useCounterStore } from "#imports";
// interface by product for fakestoreapi
interface IRating {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

const products = ref<IProduct[]>([]);
// se renderiza en el server
const { data } = await useFetch<IProduct[]>(
  "https://fakestoreapi.com/products",
);
if (data.value) products.value = data.value;
</script>

<template>
  <div class="text-center">
    <h1 class="text-6xl pb-6 dark:text-white">FakeStore API - UI</h1>

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
          v-for="product in products"
          :key="product.id"
          class="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-32 h-32 rounded-full"
          />
          <h2
            class="mt-4 mb-2 text-xl font-medium text-gray-700 dark:text-white"
          >
            {{ product.title }}
          </h2>
          <p class="text-sm text-gray-400 dark:text-gray-300">
            {{ product.category }}
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>
