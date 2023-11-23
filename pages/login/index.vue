<template>
  <div class="max-h-screen h-screen w-full flex flex-col justify-center">
    <div>
      <div
        class="relative flex mx-auto max-w-5xl w-full justify-center items-center mb-8 pb-2"
      >
        <button
          :class="tabSelected === 1 ? 'text-purple-700' : 'text-gray-800'"
          class="px-5 py-2 w-full bg-white font-medium duration-300"
          @click="tabSelected = 1"
        >
          Version 1
        </button>
        <button
          :class="tabSelected === 2 ? 'text-purple-700' : 'text-gray-800'"
          class="px-5 py-2 w-full bg-white font-medium duration-300"
          @click="tabSelected = 2"
        >
          Version 2
        </button>
        <div
          :class="tabSelected == 1 ? 'translate-x-0' : ' translate-x-full'"
          class="h-1 w-1/2 bottom-0 left-0 rounded-md bg-purple-700 absolute duration-300"
        ></div>
      </div>
      <div class="flex overflow-hidden">
        <div
          :class="
            tabSelected == 1 ? 'flex translate-x-1/2' : '-translate-x-full'
          "
          class="mx-auto max-w-5xl bg-white w-full flex justify-center items-center duration-500"
        >
          <div class="rounded-lg border shadow-2xl flex w-full">
            <div class="px-8 py-6 w-full lg:w-1/2 shrink-0">
              <h1 class="text-2xl font-bold leading-10 text-gray-800">Login</h1>
              <p class="text-xs text-gray-700">
                ¿No tienes una cuenta aún?
                <a
                  class="text-purple-700 cursor-pointer hover:text-purple-800 underline duration-100"
                  >¡Registrate aquí!</a
                >
              </p>
              <form action="" @submit="checkForm">
                <div class="flex flex-col gap-y-5 w-full mt-6">
                  <div class="flex flex-col-reverse">
                    <input
                      class="peer/input mt-2 font-light outline-none text-sm border border-gray-400 px-3 py-2 leading-8 w-full rounded-md focus:border-purple-700"
                      type="text"
                      required
                      placeholder="Ingresa tu correo electronico"
                      autocomplete="username"
                      name="email"
                    />
                    <label
                      class="px-1 text-gray-900 text-sm font-semibold peer-focus/input:text-purple-800"
                      for="email"
                      >Correo electronico:</label
                    >
                  </div>
                  <div class="flex flex-col-reverse">
                    <input
                      class="peer/input mt-2 outline-none text-sm font-normal border border-gray-400 px-3 py-2 leading-8 w-full rounded-md focus:border-purple-700"
                      type="password"
                      name="password"
                      autocomplete="current-password"
                      required
                      placeholder="Ingresa tu contraseña"
                    />
                    <label
                      class="px-1 text-gray-900 text-sm font-semibold peer-focus/input:text-purple-800"
                      for="password"
                      >Contraseña:</label
                    >
                  </div>
                </div>
                <div class="mt-8">
                  <input
                    type="button"
                    value="Iniciar sesión"
                    class="bg-purple-700 hover:bg-purple-800 duration-200 w-full px-3 py-2 font-medium text-white rounded-md cursor-pointer"
                  />
                </div>
              </form>
            </div>
            <img
              class="rounded-lg w-1/2 shrink-0 hidden lg:block"
              src="https://picsum.photos/1920/1080?random"
              alt=""
            />
          </div>
        </div>
        <div
          :class="
            tabSelected == 2 ? 'flex -translate-x-1/2' : 'translate-x-full'
          "
          class="mx-auto max-w-5xl w-full flex justify-center items-center duration-500"
        >
          <div class="rounded-lg border shadow-2xl flex w-full">
            <div class="px-8 py-6 w-1/2 mx-auto shrink-0">
              <h1 class="text-2xl font-bold leading-10">
                Inicia sesión en tu cuenta
              </h1>
              <p class="text-sm text-gray-500">
                ¿Aún no tienes una?
                <a
                  class="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-700 duration-100"
                  >¡Registrate aquí!</a
                >
              </p>
              <form class="mt-6">
                <div class="flex flex-col-reverse">
                  <input
                    class="mt-2 peer/input block w-full outline-0 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="email"
                  />
                  <label
                    class="text-gray-900 text-sm leading-6 font-medium peer-focus/input:text-indigo-700"
                    for="email"
                    >Correo electronico:</label
                  >
                </div>
                <div class="mt-6">
                  <label
                    class="text-gray-900 text-sm leading-6 font-medium"
                    for="email"
                    >Contraseña:</label
                  >
                  <input
                    type="password"
                    name="password"
                    class="mt-2 block w-full outline-0 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div class="mt-6">
                  <button
                    type="button"
                    class="shadow-sm text-white bg-indigo-600 flex justify-center items-center leading-6 font-semibold text-sm py-[6px] px-3 rounded-md w-full"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login-layout",
});

function checkForm() {
  console.log(1);
}

const tabSelected = ref(1);
</script>
