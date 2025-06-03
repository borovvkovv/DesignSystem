<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      :class="style.text"
      :x="width / 2"
      :y="height / 2"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="currentColor"
    >
      {{ text }}
    </text>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconText',
});
</script>

<script setup lang="ts">
import { useCssModule } from 'vue';

const style = useCssModule();
withDefaults(
  defineProps<{
    height?: number;
    width?: number;
    text?: string;
    fontSize?: string;
    fontWeight?: number;
    fill?: string;
  }>(),
  {
    height: 32,
    width: 32,
    text: '',
    fontSize: 'auto',
    fontWeight: 400,
    fill: '#eff3f5',
  },
);
</script>

<style module lang="scss">
@import '@/assets/styles/colors.module.scss';

.text {
  font-style: normal;
  font-weight: v-bind('fontWeight');
  font-size: v-bind('fontSize');
  line-height: v-bind('height') + 'px';
}
</style>
