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
import { IconName } from '@/components/icons/models';
import { defineComponent } from 'vue';

export default defineComponent({
  name: IconName.IconPlus,
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
      path: 'M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V7H2C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9H7L7 14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7L9 7V2Z',
    };
  }

  return {
    viewBox: '0 0 20 20',
    path: 'M11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H9V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H11V3Z',
  };
});
</script>