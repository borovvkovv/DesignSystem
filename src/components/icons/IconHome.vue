<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="svgProps.path1"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      :d="svgProps.path2"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      :d="svgProps.path3"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'IconHome',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
    validator: (value: number) => [20, 32].indexOf(value) >= 0,
  },
});

const svgProps = computed(() => {
  if (props.size <= 20)
    return {
      viewBox: '0 0 20 20',
      path1: 'M4.375 6.61536V17H15.625V6.61536',
      path2: 'M1 8.92308L10 2L19 8.92308',
      path3: 'M10 16.9999V11.2307',
    };

  return {
    viewBox: '0 0 32 32',
    path1: 'M7 11V28H25V11',
    path2: 'M2 15L16 4L30 15',
    path3: 'M16 28.0013V17.9987',
  };
});
</script>