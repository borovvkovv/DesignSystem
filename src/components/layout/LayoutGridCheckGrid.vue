<template>
  <LayoutGrid
    v-if="devModeStore.showGrid"
    class="overflow"
  >
    <div
      v-for="index in 12"
      :key="index"
      :class="['col-1', 'column']"
    ></div>
  </LayoutGrid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutGridCheckGrid',
});
</script>

<script setup lang="ts">
import LayoutGrid from '@/components/layout/LayoutGrid.vue';
import { useDevMode } from '@/stores/dev-mode';

const devModeStore = useDevMode();
</script>

<style scoped lang="scss">
@import '@/assets/styles/colors.module';
@import '@/assets/styles/breaks.module';
@import '@/assets/styles/layout.module';

.overflow {
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  @media (min-width: $break_744) {
    width: calc(100% + get-gutter($break_744));
  }

  @media (min-width: $break_1140) {
    width: calc(100% + get-gutter($break_1140));
  }

  @media (min-width: $break_1360) {
    width: calc(100% + get-gutter($break_1360));
  }

  @media (min-width: $break_1520) {
    width: calc(100% + get-gutter($break_1520));
  }
}

.column {
  background-color: $red5;
  opacity: 0.1;
}
</style>
