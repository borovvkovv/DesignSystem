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
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconName } from '@/components/icons/models';

export default defineComponent({
  name: IconName.IconArrowDown,
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 16,
  },
});

const svgProps = computed(() => {
  if (props.size <= 16) {
    return {
      viewBox: '0 0 16 16',
      path: 'M13.5 5.5L7.5 10.5L1.5 5.5',
    };
  } else {
    return {
      viewBox: '0 0 20 20',
      path: 'M17.5 6.5L10.5 13.5L3.5 6.5',
    };
  }
});
</script>
