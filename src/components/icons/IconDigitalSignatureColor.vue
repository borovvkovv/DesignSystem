<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.02201 53C7.57846 40.3256 18.6125 28 32 28C45.3875 28 56.4215 40.3256 56.978 53H7.02201Z"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26 27C11.6406 27 0 40.5 0 54H52C52 40.5 40.3594 27 26 27Z"
      fill="white"
    />
    <path
      d="M7.02201 53C7.57846 40.3256 18.6125 28 32 28C36.9243 28 41.5302 29.6612 45.423 32.4111C52.1163 37.1392 56.6266 45.0311 56.9779 53H7.02201Z"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="32"
      cy="16"
      r="12"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M40 16C40 21.4079 36.6979 26.0446 32 28.0037C25.6835 30.6378 20 20.4358 20 15.5C20 10.6003 26.3955 1.36297 32.5 4.21736C36.9305 6.28902 40 10.7861 40 16Z"
      fill="white"
    />
    <circle
      cx="32"
      cy="16"
      r="12"
      stroke="#0079C2"
      stroke-width="2"
    />
    <circle
      cx="50"
      cy="47"
      r="13"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M59 47C59 52.9704 55.2627 58.0679 50 60.0807C42.8765 62.8053 37.587 51.7829 37 46.5C37 41.3747 43.4293 31.4062 50 33.9193C55.2627 35.9321 59 41.0296 59 47Z"
      fill="white"
    />
    <path
      d="M63 47C63 54.1797 57.1797 60 50 60C42.8203 60 37 54.1797 37 47C37 39.8203 42.8203 34 50 34C57.1797 34 63 39.8203 63 47Z"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M57 43L48.3333 51L44 47"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconDigitalSignatureColor',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 64,
  },
});
</script>