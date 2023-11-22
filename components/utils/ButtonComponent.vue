<template>
  <button
    :disabled="loading"
    class="bg-purple-600 text-white font-semibold rounded-md flex justify-center items-center"
    :class="[getSize, getWidth, getVariant]"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

enum Size {
  "extra-small",
  "small",
  "normal",
  "large",
}
enum Width {
  "small",
  "normal",
  "large",
  "full",
}

enum Variant {
  "normal",
  "outlined",
  "text",
}

const props = defineProps<{
  text: string;
  background: string;
  border?: string;
  color: string;
  loading?: boolean;
  size?: keyof typeof Size;
  width?: keyof typeof Width;
  variant?: keyof typeof Variant;
}>();

const getSize = computed(() => {
  switch (props.size) {
    case "extra-small":
      return "py-2 text-xs";
    case "small":
      return "py-2 px-3 text-sm";
    case "normal":
      return "px-6 text-sm h-12";
    case "large":
      return "py-3 text-base";
    default:
      return "py-2 px-3 text-sm";
  }
});

const getWidth = computed(() => {
  switch (props.width) {
    case "normal":
      return "w-min shrink-0";
    default:
      return "w-full shrink-0";
  }
});

const getVariant = computed(() => {
  switch (props.variant) {
    case "normal":
      return `bg-${props.background} text-${props.color}`;
    case "outlined":
      return `bg-${props.color} ring-1 ring-${props.background}/10`;
    case "text":
      return `${props.color} px-0 py-0 w-min h-min`;
    default:
      return `bg-${props.background} text-${props.color}`;
  }
});
</script>
