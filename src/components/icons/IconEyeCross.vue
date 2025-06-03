<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3192_108180)">
      <path
        d="M1 8.58353C1 8.58353 3.36923 3.91699 7.46154 3.91699C11.5538 3.91699 13.9231 8.58353 13.9231 8.58353C13.9231 8.58353 11.5538 13.2501 7.46154 13.2501C3.36923 13.2501 1 8.58353 1 8.58353Z"
        stroke="currentColor"
        stroke-width="1.57949"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.46089 10.3782C8.45217 10.3782 9.25576 9.57465 9.25576 8.5834C9.25576 7.59214 8.45217 6.78857 7.46089 6.78857C6.46961 6.78857 5.66602 7.59214 5.66602 8.5834C5.66602 9.57465 6.46961 10.3782 7.46089 10.3782Z"
        stroke="currentColor"
        stroke-width="1.57949"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.49316 1.9873L14.4996 14.9937"
        stroke="currentColor"
        stroke-width="1.57949"
      />
      <path
        d="M3 1.2998L16 14.2998"
        stroke="white"
        stroke-width="1.57949"
      />
    </g>
    <defs>
      <clipPath id="clip0_3192_108180">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(16) rotate(90)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconEyeCross',
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
