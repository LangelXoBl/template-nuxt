<template>
  <div v-show="props.modal" class="bg-black/40 fixed w-full h-full top-0">
    <div class="flex w-full h-full text-white justify-center items-center">
      <div class="flex w-full h-full justify-center items-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modal: boolean;
}>();

watch(
  () => props.modal,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>
