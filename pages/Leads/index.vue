<template>
  <div class="">
    <div>
      <p class="text-3xl font-medium">Estos son todos tus leads</p>
      <div>
        <p class="leading-6 text-gray-900 font-semibold text-sm">Ver como:</p>
        <div class="relative">
          <div>
            <Icon class="h-7 w-7" name="ph:table"></Icon>
          </div>
          <div
            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 w-64"
          >
            <div class="relative grid gap-8 bg-white p-7 grid-cols-1">
              <a
                href="##"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                ><div
                  class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div class="w-12 h-12 flex justify-center items-center bg-purple-100">
                    <Icon
                      class="h-8 w-8 text-indigo-700"
                      name="ph:table"
                    ></Icon>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Insights</p>
                  <p class="text-sm text-gray-500">
                    Measure actions your users take
                  </p>
                </div></a
              ><a
                href="##"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                ><div
                  class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
                      <path
                        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                        stroke="#FB923C"
                        stroke-width="2"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                        stroke="#FDBA74"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Automations</p>
                  <p class="text-sm text-gray-500">
                    Create your own targeted content
                  </p>
                </div></a
              ><a
                href="##"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                ><div
                  class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
                      <rect
                        x="13"
                        y="32"
                        width="2"
                        height="4"
                        fill="#FDBA74"
                      ></rect>
                      <rect
                        x="17"
                        y="28"
                        width="2"
                        height="8"
                        fill="#FDBA74"
                      ></rect>
                      <rect
                        x="21"
                        y="24"
                        width="2"
                        height="12"
                        fill="#FDBA74"
                      ></rect>
                      <rect
                        x="25"
                        y="20"
                        width="2"
                        height="16"
                        fill="#FDBA74"
                      ></rect>
                      <rect
                        x="29"
                        y="16"
                        width="2"
                        height="20"
                        fill="#FB923C"
                      ></rect>
                      <rect
                        x="33"
                        y="12"
                        width="2"
                        height="24"
                        fill="#FB923C"
                      ></rect>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Reports</p>
                  <p class="text-sm text-gray-500">Keep track of your growth</p>
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-6"
      >
        <template v-for="i in 18" :key="i">
          <LeadCardComponent @click="openModal()"></LeadCardComponent>
        </template>
      </div>
    </div>
    <ModalComponent :modal="modal">
      <div class="bg-white w-full max-w-md h-auto rounded-lg">
        <div class="flex flex-col">
          <div class="flex px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div
              class="mx-auto flex h-12 w-12 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100"
            >
              <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col sm:ml-4">
              <p class="text-base font-semibold leading-6 text-gray-900">
                Desactivate account
              </p>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-end px-4 py-3 sm:flex sm:px-6">
            <button
              class="bg-white text-gray-900 text-sm font-semibold px-3 py-2 ring-1 ring-inset ring-gray-300 rounded-md"
              @click="modal = false"
            >
              Cancel
            </button>
            <button
              class="bg-red-600 text-white text-sm font-semibold px-3 py-2 ml-3 rounded-md"
            >
              Desactivate
            </button>
          </div>
        </div>
      </div>
    </ModalComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LeadCardComponent from "../../components/leads/LeadCardComponent.vue";
import ModalComponent from "../../components/utils/ModalComponet.vue";

const modal = ref(false);

function openModal() {
  modal.value = !modal.value;
}
</script>
