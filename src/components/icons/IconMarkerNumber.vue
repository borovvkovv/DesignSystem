<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 2"
      :fill="fill"
    />
    <text
      :class="style.text"
      :x="size / 2"
      :y="size / 2"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="currentColor"
    >
      {{ svgText }}
    </text>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconMarkerNumber',
});
</script>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';

const style = useCssModule();
const props = withDefaults(
  defineProps<{
    size?: number;
    number?: number;
    fontSize?: string;
    fontWeight?: number;
    fill?: string;
  }>(),
  {
    size: 32,
    number: 10,
    fontSize: 'auto',
    fontWeight: 500,
    fill: '#eff3f5',
  },
);

const svgText = computed(() => {
  if (props.number >= 100) {
    return '99+';
  }

  return props.number;
});
</script>

<style module lang="scss">
@import '@/assets/styles/colors.module.scss';

.text {
  font-style: normal;
  font-weight: v-bind('fontWeight');
  font-size: v-bind('fontSize');
  line-height: v-bind('size') + 'px';
}
</style>
