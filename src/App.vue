<template>
  <LayoutGridCheckSwitch v-if="devModeStore.isDevMode" />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import LayoutGridCheckSwitch from '@/components/layout/LayoutGridCheckSwitch.vue';
import { onMounted } from 'vue';
import { useDevMode } from '@/stores/dev-mode';

const devModeStore = useDevMode();

onMounted(() => {
  if (import.meta.env.MODE === 'development') {
    // devModeStore.isDevMode = true;
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/tailwind';
@import '@/assets/styles/normalize';
@import '@/assets/styles/fonts';
@import '@/assets/styles/spacing';
@import '@/assets/styles/layout-grid';
@import '@/assets/styles/links';

html,
#app {
  height: 100%;
}

body,
input,
button,
label {
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: 400;
}
</style>
