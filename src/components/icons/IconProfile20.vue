<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.258 14.6211C16.3424 13.3882 17 11.7709 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 11.7709 3.65762 13.3882 4.74198 14.6211C5.88747 13.0387 7.81512 12 10 12C12.1849 12 14.1125 13.0387 15.258 14.6211ZM13.7259 15.9271C12.9788 14.796 11.6319 14 10 14C8.3681 14 7.02117 14.796 6.27407 15.9271C7.35303 16.6068 8.63059 17 10 17C11.3694 17 12.647 16.6068 13.7259 15.9271ZM10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 9C10.5523 9 11 8.55229 11 8C11 7.44771 10.5523 7 10 7C9.44771 7 9 7.44771 9 8C9 8.55229 9.44771 9 10 9ZM10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconProfile20',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});
</script>