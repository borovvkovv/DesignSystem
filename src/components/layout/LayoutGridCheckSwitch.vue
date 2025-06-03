<template>
  <div class="overflowCheckBox">
    <AppCheckbox
      v-model="devModeStore.showGrid"
      label="включить сетку"
    />
  </div>
</template>
<script lang="ts">
import AppCheckbox from '@/components/inputs/AppCheckbox.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutGridCheckSwitch',
  components: { AppCheckbox },
});
</script>

<script setup lang="ts">
import { useDevMode } from '@/stores/dev-mode';

const devModeStore = useDevMode();
</script>

<style scoped lang="scss">
@import '@/assets/styles/colors.module';
@import '@/assets/styles/breaks.module';
@import '@/assets/styles/layout.module';

.overflowCheckBox {
  position: absolute;
  z-index: 1100;
  top: 6px;
  right: 6px;
  padding: 10px;
  border-radius: 6px;
  background-color: $white;
}
</style>
