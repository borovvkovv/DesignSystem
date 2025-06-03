<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.19971 2.3999H13.5997V8.7999"
      stroke="currentColor"
      stroke-width="1.6"
    />
    <path
      d="M6.3999 9.9999L13.5999 2.3999"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linejoin="round"
    />
    <path
      d="M2.3999 2.3999V12.7999C2.3999 13.2417 2.75807 13.5999 3.1999 13.5999H13.5999"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconOut',
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 16,
  },
);
</script>
