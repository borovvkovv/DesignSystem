<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M41.2175 24L46 24C46 11.8498 36.1502 2 24 2C11.8497 2 1.99991 11.8498 1.99991 24L6.78261 24C6.78262 14.4911 14.4911 6.78262 24 6.78262C33.509 6.78262 41.2175 14.4911 41.2175 24Z"
      fill="#C4EAFF"
    />
    <circle
      cx="23.9999"
      cy="24"
      r="21"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M35.9529 23C35.6298 19.5769 33.6644 16.617 30.8355 14.7814L35.3794 6.34726C40.9078 9.91856 44.649 16.0134 44.9765 23H35.9529ZM33.6488 5.34278L29.0739 13.8345C27.5303 13.1607 25.81 12.7857 23.9999 12.7857C22.1898 12.7857 20.4695 13.1607 18.9259 13.8345L14.3511 5.34278C17.2393 3.84589 20.5196 3 23.9999 3C27.4802 3 30.7605 3.84589 33.6488 5.34278ZM12.6204 6.34726L17.1643 14.7814C14.3354 16.617 12.37 19.5769 12.0469 23H3.0233C3.35079 16.0134 7.09205 9.91856 12.6204 6.34726Z"
      stroke="#0079C2"
      stroke-width="2"
    />
    <circle
      cx="24"
      cy="25"
      r="2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <rect
      x="13.9999"
      y="34.0001"
      width="20"
      height="4"
      rx="1"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
    <line
      x1="26.128"
      y1="23.5916"
      x2="29.9691"
      y2="20.3907"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconIndicatorColor48',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 48,
  },
});
</script>
