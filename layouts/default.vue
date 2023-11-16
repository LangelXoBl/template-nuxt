<script setup lang="ts">
import NavBar from "~/components/NavBar/NavBar.vue";
import Footer from "~/components/Footer/AppFooter.vue";
</script>

<template>
  <div>
    <NavBar />
    <main>
      <slot> </slot>
    </main>
    <Footer />
  </div>
</template>
