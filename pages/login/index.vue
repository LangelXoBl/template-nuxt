<template>
  <div>
    <div
      class="mx-auto max-w-4xl w-full grid grid-cols-2 rounded-lg border shadow-xl font-dm"
    >
      <div class="p-4">
        <h1 class="text-xl font-bold leading-10 text-purple-800">Login</h1>
        <p class="text-xs text-gray-700">
          ¿No tienes una cuenta aún?
          <a
            class="text-purple-600 cursor-pointer hover:text-purple-700 underline duration-100"
            >¡Registrate aquí!</a
          >
        </p>
        <div class="flex flex-col gap-y-5 w-full mt-6">
          <div class="shrink-0">
            <label class="px-1 text-gray-900 text-sm font-bold" for="email"
              >Correo electronico:</label
            >
            <input
              class="outline-none text-sm font-normal border border-gray-400 px-3 py-2 leading-8 w-full rounded-md focus:border-purple-700"
              type="text"
              placeholder="Ingresa tu correo electronico"
              name="email"
            />
          </div>
          <div class="shrink-0">
            <label class="px-1 text-gray-900 text-sm font-bold" for="email"
              >Contraseña:</label
            >
            <input
              class="outline-none text-sm font-normal ring-1 ring-inset ring-gray-400 px-3 py-2 leading-8 w-full rounded-md focus:border focus:border-purple-600"
              type="password"
              placeholder="Ingresa tu contraseña"
              name="passoword"
            />
          </div>
          <div>
            <button type="button" class="bg-purple-600 w-full px-3 py-2 font-medium text-white rounded-md">Iniciar sesión</button>
          </div>
        </div>
      </div>
      <img
        class="rounded-lg"
        src="https://picsum.photos/1920/1080?random"
        alt=""
      />
    </div>
  </div>
</template>
