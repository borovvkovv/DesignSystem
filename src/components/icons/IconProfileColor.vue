<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.5 32.5C38.4588 29.6453 34.1546 28 29 28C14.6406 28 3 41.5 3 55H33"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="29"
      cy="16"
      r="12"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M37 16C37 21.4079 33.6979 26.0446 29 28.0037C22.6835 30.6378 17 20.4358 17 15.5C17 10.6003 23.3955 1.36297 29.5 4.21736C33.9305 6.28902 37 10.7861 37 16Z"
      fill="white"
    />
    <circle
      cx="29"
      cy="16"
      r="12"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      d="M38 58.598L54.718 41.88L58.2535 45.4156L45.0711 58.598C43.1184 60.5506 39.9526 60.5506 38 58.598V58.598Z"
      fill="#C4EAFF"
    />
    <path
      d="M53.0072 39.7107L59.718 33L63.2535 36.5355L56.5428 43.2463L53.0072 39.7107Z"
      fill="#C4EAFF"
    />
    <path
      d="M54.7107 48.2463L40.9393 34.4748L44.4748 30.9393L58.2463 44.7107L54.7107 48.2463Z"
      fill="#C4EAFF"
    />
    <path
      d="M46.6001 32.8667L52.4414 27L62.0001 36.5584L56.1334 42.4"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M56.8664 35.8001L54.6664 38.0001"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53.1999 32.1333L50.9999 34.3333"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M37.6666 58.6999L37.1733 58.2066L30.7665 51.7998L30.3001 51.3334C28.5666 49.6 28.5666 46.7111 30.3001 44.9054L34.181 41.0452L43.8777 31.4L57.6 45.1223L47.2573 55.52L44.0946 58.6999C42.2889 60.4333 39.4719 60.4333 37.6666 58.6999Z"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.1333 54.8668L47.3333 41.6668"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.4664 35.0668L53.9331 47.5335"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconProfileColor',
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