<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="svgProps.path"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconName } from '@/components/icons/models';

export default defineComponent({
  name: IconName.IconArrowUpTriangle,
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 8,
  },
});

const svgProps = computed(() => {
  if (props.size <= 8) {
    return {
      viewBox: '0 0 8 8',
      path: 'M1 7L8 7L4.50022 2L1 7Z',
    };
  } else {
    return {
      viewBox: '0 0 16 16',
      path: 'M3 12L13 12L8.00032 5L3 12Z',
    };
  }
});
</script>
