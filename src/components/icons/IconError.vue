<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProp.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="svgProp.path"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <rect
      :x="svgProp.rect1.x"
      :y="svgProp.rect1.y"
      width="2"
      height="2"
      rx="1"
      :transform="svgProp.rect1.transform"
      fill="currentColor"
    />
    <rect
      :x="svgProp.rect2.x"
      y="1.41421"
      :width="svgProp.rect2.width"
      :height="svgProp.rect2.height"
      rx="1"
      :transform="svgProp.rect2.transform"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconError',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});

const svgProp = computed(() => {
  if (prop.size <= 20) {
    return {
      viewBox: '0 0 20 20',
      path: 'M9.89951 11L9.89951 6',
      rect1: {
        x: 10.8995,
        y: 15,
        transform: 'rotate(-180 10.8995 15)',
      },
      rect2: {
        x: 10,
        transform: 'rotate(45 10 1.41421)',
        width: '12',
        height: '12',
      },
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: 'M16 19L16 8',
    rect1: {
      x: 17,
      y: 24,
      transform: 'rotate(-180 17 24)',
    },
    rect2: {
      x: 16,
      transform: 'rotate(45 16 1.41421)',
      width: '20',
      height: '20',
    },
  };
});
</script>