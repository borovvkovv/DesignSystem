<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 0C10.3669 0 12.2857 1.91878 12.2857 4.28571L12.2857 5.1428C13.2325 5.1428 14 5.91031 14 6.85709V13.7142C14 14.661 13.2325 15.4285 12.2857 15.4285H3.71429C2.76751 15.4285 2 14.661 2 13.7142V6.85709C2 5.91031 2.76751 5.1428 3.71429 5.1428L3.71429 4.28571C3.71429 1.91878 5.63307 0 8 0ZM10.5714 4.28571V5.1428H5.42857V4.28571C5.42857 2.86555 6.57984 1.71429 8 1.71429C9.42016 1.71429 10.5714 2.86555 10.5714 4.28571ZM7.99998 11.5713C8.71006 11.5713 9.2857 10.9957 9.2857 10.2856C9.2857 9.5755 8.71006 8.99987 7.99998 8.99987C7.2899 8.99987 6.71427 9.5755 6.71427 10.2856C6.71427 10.9957 7.2899 11.5713 7.99998 11.5713Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconLocked',
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
