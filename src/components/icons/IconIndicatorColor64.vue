<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M55 31H59C59 16.6406 46.9117 5 32 5C17.0883 5 5 16.6406 5 31H9C9 18.8497 19.2975 9 32 9C44.7025 9 55 18.8497 55 31Z"
      fill="#C4EAFF"
    />
    <circle
      cx="32"
      cy="32"
      r="27"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M46.9624 31C46.626 26.544 44.0592 22.6874 40.3396 20.3611L46.3821 9.14499C53.7016 13.7609 58.6466 21.7928 58.9818 31H46.9624ZM44.6512 8.14108L38.5779 19.4143C36.5891 18.5074 34.356 18 32 18C29.644 18 27.4109 18.5074 25.4221 19.4143L19.3488 8.14108C23.1217 6.13616 27.4269 5 32 5C36.5731 5 40.8783 6.13616 44.6512 8.14108ZM17.6179 9.14499L23.6604 20.3611C19.9408 22.6874 17.374 26.544 17.0376 31H5.01817C5.35337 21.7928 10.2984 13.7609 17.6179 9.14499Z"
      stroke="#0079C2"
      stroke-width="2"
    />
    <circle
      cx="32"
      cy="34"
      r="2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M33.5 32.4999L40.5 27"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <rect
      x="20"
      y="43"
      width="24"
      height="6"
      rx="1"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconIndicatorColor64',
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