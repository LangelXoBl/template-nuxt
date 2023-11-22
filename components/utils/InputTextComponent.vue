<template>
  <div class="flex flex-col">
    <label class="font-bold text-black/90">{{ label }}:</label>
    <div class="relative w-full">
      <input
        v-model="valueInput"
        class="border border-black/50 rounded-md w-full"
        :class="[getSize]"
        type="text"
        :placeholder="placeholder"
      />
      <span
        class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4"
        >
          <path
            fill-rule="evenodd"
            d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type WritableComputedRef } from "vue";

enum Size {
  "extra-small",
  "small",
  "normal",
  "large",
}

const props = defineProps<{
  modelValue: string;
  label: string;
  placeholder?: string;
  size?: keyof typeof Size;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const valueInput: WritableComputedRef<string> = computed({
  get: () => props.modelValue,
  set: (value: string) => emit("update:modelValue", value),
});

const getSize = computed(() => {
  switch (props.size) {
    case "extra-small":
      return "py-2 text-xs";
    case "small":
      return "py-2 px-3 text-xs";
    case "large":
      return "py-3 tex-base";
    default:
      return "py-3";
  }
});
</script>
