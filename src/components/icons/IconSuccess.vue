<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 24C17.8513 24 23 18.6274 23 12C23 5.37258 17.8513 0 11.5 0C5.14873 0 0 5.37258 0 12C0 18.6274 5.14873 24 11.5 24ZM5.60539 13.1446L4.89829 12.4375L6.3125 11.0233L7.01961 11.7304L9.8125 14.5233L16.5429 7.79289L17.25 7.08579L18.6642 8.5L17.9571 9.20711L10.5196 16.6446L9.8125 17.3517L9.10539 16.6446L5.60539 13.1446Z"
      fill="#00BF2A"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconSuccess',
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 24,
  },
);
</script>
