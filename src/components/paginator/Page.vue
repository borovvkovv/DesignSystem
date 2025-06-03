<template>
  <div
    :class="[
      pageNumber === currentPage ? 'pointer-events-none rounded-sm bg-grey-5' : ' cursor-pointer bg-white',
      'h-8 min-w-8',
      'flex shrink-0 grow-0 items-center justify-center',
    ]"
    @click="() => emit('click:page', pageNumber)"
  >
    {{ pageNumber }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page',
});
</script>

<script setup lang="ts">
defineProps<{
  pageNumber: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (eventName: 'click:page', newPage: number): void;
}>();
</script>
