<template>
  <div class="flex flex-col">
    <LineSkeleton
      v-for="(_, i) in new Array(rowsCount)"
      :key="i"
      :class="[styles.line]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinesSkeleton',
});
</script>

<script setup lang="ts">
import { useCssModule, computed } from 'vue';
import type { LineSkeletonProps } from '@/components/skeletons/models';
import LineSkeleton from '@/components/skeletons/LineSkeleton.vue';

const props = withDefaults(defineProps<LineSkeletonProps>(), {
  rowsCount: 12,
  rowHeight: 22,
  rowsGap: 25,
});

const styles = useCssModule();

const lineHeightPx = computed(() => `${props.rowHeight}px`);
const paddingYPx = computed(() => `${Math.round(props.rowsGap / 2)}px`);
</script>

<style module lang="scss">
@import '@/assets/styles/colors.module.scss';

.line {
  padding: v-bind(paddingYPx) 0;
  height: v-bind(lineHeightPx);
}
</style>
