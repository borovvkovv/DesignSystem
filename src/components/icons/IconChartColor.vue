<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="3"
      y1="45"
      x2="45"
      y2="45"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M3 2L3 45"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <rect
      x="38"
      y="6.99994"
      width="3"
      height="37"
      fill="#C4EAFF"
    />
    <rect
      x="25"
      y="18.9999"
      width="3"
      height="25"
      fill="#C4EAFF"
    />
    <rect
      x="12"
      y="33.9999"
      width="3"
      height="10"
      fill="#C4EAFF"
    />
    <path
      d="M8 33.9999C8 33.4477 8.44772 32.9999 9 32.9999H15C15.5523 32.9999 16 33.4477 16 33.9999V44.9999H8V33.9999Z"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M21 19.9999C21 19.4477 21.4477 18.9999 22 18.9999H28C28.5523 18.9999 29 19.4477 29 19.9999V44.9999H21V19.9999Z"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M34 7.99994C34 7.44765 34.4477 6.99994 35 6.99994H41C41.5523 6.99994 42 7.44765 42 7.99994V44.9999H34V7.99994Z"
      stroke="#0079C2"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconChartColor',
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