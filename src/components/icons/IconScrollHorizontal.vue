<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="svgProps.path1"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      :d="svgProps.path2"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconScrollHorizontal',
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
      path1: 'M6 14.8857L6 3V3C3.79086 3 2 4.79086 2 7L2 16',
      path2:
        'M7 14.2857H3.85714C2.83147 14.2857 2 15.1172 2 16.1429V16.1429C2 17.1685 2.83147 18 3.85714 18H17C17.5523 18 18 17.5523 18 17V14.1684V6C18 5.44771 17.5523 5 17 5L5.15152 5',
    };
  } else {
    return {
      viewBox: '0 0 32 32',
      path1: 'M10 23L10 3V3C6.13401 3 3 6.13401 3 10L3 26',
      path2:
        'M11 22.4286H6.28571C4.47106 22.4286 3 23.8996 3 25.7143V25.7143C3 27.5289 4.47106 29 6.28571 29L28 29C28.5523 29 29 28.5523 29 28V22.2211L29 7C29 6.44771 28.5523 6 28 6L9.76667 6',
    };
  }
});
</script>