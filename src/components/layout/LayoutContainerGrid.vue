<template>
  <LayoutContainer>
    <LayoutGridCheck v-if="devModeStore.isDevMode" />
    <LayoutGrid>
      <slot />
    </LayoutGrid>
  </LayoutContainer>
</template>

<script lang="ts">
export default {
  name: 'LayoutContainerGrid',
};
</script>

<script setup lang="ts">
import LayoutGridCheck from '@/components/layout/LayoutGridCheckGrid.vue';
import LayoutGrid from '@/components/layout/LayoutGrid.vue';
import { useDevMode } from '@/stores/dev-mode';
import LayoutContainer from '@/components/layout/LayoutContainer.vue';

const devModeStore = useDevMode();
</script>
