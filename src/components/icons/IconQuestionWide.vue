<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProp.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="svgProp.path.d1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      :d="svgProp.path.d2"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="svgProp.path.d3"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconQuestionWide',
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
      path: {
        d1: 'M19 9.99957C19 14.97 14.9709 19 10.0004 19C5.02999 19 1 14.97 1 9.99957C1 5.02913 5.02999 1 10.0004 1C14.9709 1 19 5.02913 19 9.99957Z',
        d2: 'M7 7.60351C7 6.16602 8.34383 5 10.0005 5C11.6573 5 13 6.16602 13 7.60351C13 10 10 10.7143 10 11.2857C10 11.8571 10 12.4286 10.0005 13',
        d3: 'M11 16C11 16.5525 10.5525 17 10 17C9.44851 17 9 16.5525 9 16C9 15.4475 9.44851 15 10 15C10.5525 15 11 15.4475 11 16Z',
      },
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: {
      d1: 'M30 15.9993C30 23.7311 23.7325 30 16.0007 30C8.26888 30 2 23.7311 2 15.9993C2 8.26753 8.26888 2 16.0007 2C23.7325 2 30 8.26753 30 15.9993Z',
      d2: 'M10 12.207C10 9.33204 12.6877 7 16.0011 7C19.3145 7 22 9.33204 22 12.207C22 17 16.0011 18.8571 16.0011 20C16.0011 21.1429 16 20.8571 16.0011 22',
      d3: 'M17 26C17 26.5525 16.5525 27 16 27C15.4485 27 15 26.5525 15 26C15 25.4475 15.4485 25 16 25C16.5525 25 17 25.4475 17 26Z',
    },
  };
});
</script>