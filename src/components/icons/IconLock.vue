<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.28578 10.2857C9.28578 10.9958 8.71015 11.5714 8.00007 11.5714C7.28999 11.5714 6.71436 10.9958 6.71436 10.2857C6.71436 9.57563 7.28999 9 8.00007 9C8.71015 9 9.28578 9.57563 9.28578 10.2857Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2857 4.28571C12.2857 1.91878 10.3669 0 8 0C5.63306 0 3.71428 1.91878 3.71428 4.28571L3.71429 5.14278C2.76751 5.14278 2 5.91029 2 6.85706V13.7142C2 14.661 2.76751 15.4285 3.71429 15.4285H12.2857C13.2325 15.4285 14 14.661 14 13.7142V6.85706C14 5.91029 13.2325 5.14278 12.2857 5.14278L12.2857 4.28571ZM10.5714 5.14278V4.28571C10.5714 2.86555 9.42016 1.71429 8 1.71429C6.57984 1.71429 5.42857 2.86555 5.42857 4.28571V5.14278H10.5714ZM3.71429 13.7142V6.85706H12.2857V13.7142H3.71429Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconLock',
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
