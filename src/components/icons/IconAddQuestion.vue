<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3192_108390)">
      <rect
        width="16"
        height="16"
        fill="white"
      />
      <path
        d="M7.80371 4.70943C7.80371 3.21345 9.20221 2 10.9263 2C12.6504 2 14.0478 3.21345 14.0478 4.70943C14.0478 7.20341 10.9257 7.94676 10.9257 8.54143C10.9257 9.13611 10.9257 9.73078 10.9263 10.3255"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.889 13.2394C11.889 13.7702 11.4591 14.2001 10.9284 14.2001C10.3986 14.2001 9.96777 13.7702 9.96777 13.2394C9.96777 12.7087 10.3986 12.2788 10.9284 12.2788C11.4591 12.2788 11.889 12.7087 11.889 13.2394Z"
        fill="currentColor"
      />
      <path
        d="M4.24121 7.68481V13.1484"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.97363 10.4165L1.51008 10.4165"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3192_108390">
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
  name: 'IconAddQuestion',
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
