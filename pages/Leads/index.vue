<template>
  <div class="">
    <div>
      <p class="font-nunito">Estos son todos tus leads (Nunito)</p>
      <p class="font-inter">Estos son todos tus leads (Inter)</p>
      <p class="">Estos son todos tus leads (DM Sans)</p>
      <div class="mt-10 flex">
        <LeadCardComponent @click="openModal()"></LeadCardComponent>
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
