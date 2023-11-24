<template>
  <div>
    <a
      class="block rounded-lg p-4 shadow-md border shadow-indigo-100 max-w-sm w-full bg-white"
    >
      <div class="mt-2">
        <div class="flex gap-x-0 items-center">
          <img
            class="mr-2 h-10 w-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
          <div>
            <div class="text-sm text-gray-600">Wayaweb Testing</div>
            <div class="font-medium">Capital 28 from contact</div>
          </div>
        </div>
        <div class="mt-3">
          <p class="font-medium text-gray-600 text-sm">Llegó por:</p>
          <div class="text-gray-900 text-sm mt-[2px]">
            <p>Alom Living</p>
          </div>
        </div>
        <div class="mt-3">
          <p class="font-medium text-gray-600 text-sm">¿Comó nos encontró?</p>
          <div class="text-gray-900 text-sm mt-[2px] flex items-center gap-x-2">
            <p>Google</p>
            <img
              class="w-5 h-5"
              src="https://res.cloudinary.com/capital28-investments/image/upload/v1633986483/Capital%2028/Traffic_Source_Medium/google_logo.png"
              alt=""
            />
          </div>
        </div>
        <div class="mt-3">
          <p class="font-medium text-gray-600 text-sm">Observaciones:</p>
          <div class="text-gray-900 text-sm mt-[2px]">
            <p>
              Enim feugiat ut ipsum, neque ut. Tristique mi id elementum
              praesent. Gravida in tempus feugiat netus enim aliquet a, quam
              scelerisque. Dictumst in convallis nec in bibendum aenean arcu.
            </p>
          </div>
        </div>
        <div class="mt-6 grid grid-cols-3 justify-items-center gap-x-3 text-xs">
          <div
            class="flex flex-col sm:flex-row sm:shrink-0 w-full items-center justify-center sm:gap-2 hover:bg-indigo-600/10 duration-100 px-3 py-2 rounded-lg"
          >
            <Icon class="h-5 w-5 text-indigo-700" name="ph:magic-wand"></Icon>

            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Perfil app</p>

              <p class="font-medium">20%</p>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row sm:shrink-0 w-full items-center justify-center sm:gap-2 hover:bg-indigo-600/10 duration-100 px-3 py-2 rounded-md"
          >
            <Icon class="h-5 w-5 text-indigo-700" name="ph:flower-lotus"></Icon>

            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Cultivo</p>

              <p class="font-medium">8 sms</p>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row sm:shrink-0 w-full items-center justify-center sm:gap-2 hover:bg-indigo-600/10 duration-100 px-3 py-2 rounded"
          >
            <Icon
              class="h-5 w-5 text-indigo-700"
              name="ph:warning-circle"
            ></Icon>

            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Agenda</p>

              <p class="font-medium">4 días</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
