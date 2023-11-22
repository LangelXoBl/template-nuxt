<template>
  <Transition>
    <div v-show="props.modal" class="absolute inset-0 z-50">
      <div class="fixed bg-black/30 inset-0">
        <div
          class="flex justify-center w-full h-full items-center overflow-y-auto"
        >
          <Transition appear name="bounce">
            <slot></slot>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  modal: boolean;
}>();

watch(
  () => props.modal,
  (newValue) => {
    if (newValue) {
      document.body.classList.add("modal-activo");
    } else {
      document.body.classList.remove("modal-activo");
    }
  },
);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.bounce-enter {
  animation: bounce-in 0.5s;
}

.bounce-leave-to {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
