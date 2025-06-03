<template>
  <div class="flex flex-col">
    <LineSkeleton
      v-for="(_, i) in new Array(rowsCount)"
      :key="i"
      :class="[
        styles.line,
        'text-blueGrey-4',
        i === 0 ? styles.pb : i === rowsCount - 1 ? styles.pt : [styles.pt, styles.pb],
        i < rowsCount - 1 && 'border-b',
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimpleDropDownSkeleton',
});
</script>

<script setup lang="ts">
import { useCssModule, computed } from 'vue';
import type { LineSkeletonProps } from '@/components/skeletons/models';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';

const props = withDefaults(defineProps<LineSkeletonProps>(), {
  rowHeight: 26,
  rowsCount: 5,
  rowsGap: 40,
});

const styles = useCssModule();

const lineHeightPx = computed(() => `${props.rowHeight}px`);
const paddingYPx = computed(() => `${Math.round(props.rowsGap / 2)}px`);
</script>

<style module lang="scss">
@import '@/assets/styles/colors.module.scss';

.pt {
  padding-top: v-bind(paddingYPx);
}
.pb {
  padding-bottom: v-bind(paddingYPx);
}

.line {
  padding-left: 0;
  padding-right: 0;
  height: v-bind(lineHeightPx);
}
</style>
