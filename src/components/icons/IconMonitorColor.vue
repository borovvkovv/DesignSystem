<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="61"
      y="6"
      width="41"
      height="5"
      transform="rotate(90 61 6)"
      fill="#C4EAFF"
    />
    <rect
      x="4"
      y="5"
      width="56"
      height="5"
      fill="#C4EAFF"
    />
    <rect
      x="3"
      y="5"
      width="58"
      height="42"
      rx="3"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M32 44C33.1046 44 34 43.1046 34 42C34 40.8954 33.1046 40 32 40C30.8954 40 30 40.8954 30 42C30 43.1046 30.8954 44 32 44Z"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.4568 47.7284L36.4568 57.7284"
      stroke="#0079C2"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.3951 47.7284L27.3951 57.7284"
      stroke="#0079C2"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 58H40"
      stroke="#0079C2"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 37H60"
      stroke="#0079C2"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconMonitorColor',
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