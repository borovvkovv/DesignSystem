<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="svgProps.path"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconMessage',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});

const svgProps = computed(() => {
  if (props.size <= 20) {
    return {
      viewBox: '0 0 20 20',
      path: 'M14.26 14.304C13.9421 14.1053 13.5748 14 13.2 14H4V4L16 4V14V15.3915L14.26 14.304ZM4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H13.2L16.47 18.0438C17.136 18.46 18 17.9812 18 17.1958V16V14V4C18 2.89543 17.1046 2 16 2H4ZM6 11C6 11.5523 6.44772 12 7 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H7C6.44772 10 6 10.4477 6 11ZM6 7C6 7.55228 6.44772 8 7 8H13C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6H7C6.44772 6 6 6.44772 6 7Z',
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: 'M22.6347 23.9867C22.3226 23.798 21.9648 23.6982 21.6 23.6982H4V4L28 4V22.3127V25.6982V27.2302L22.6347 23.9867ZM4 2C2.89543 2 2 2.89543 2 4V23.6982C2 24.8028 2.89543 25.6982 4 25.6982H21.6L28.4826 29.8591C29.1491 30.262 30 29.7821 30 29.0033V25.6982V22.3127V4C30 2.89543 29.1046 2 28 2H4ZM9 17C9 16.4477 9.44771 16 10 16H22C22.5523 16 23 16.4477 23 17C23 17.5523 22.5523 18 22 18H10C9.44771 18 9 17.5523 9 17ZM9 9.99999C9 9.4477 9.44772 8.99999 10 8.99999H22C22.5523 8.99999 23 9.4477 23 9.99999C23 10.5523 22.5523 11 22 11H10C9.44772 11 9 10.5523 9 9.99999Z',
  };
});
</script>