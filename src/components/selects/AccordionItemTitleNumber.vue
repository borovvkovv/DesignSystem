<template>
  <div class="flex h-6 items-center justify-center rounded-full border border-blueGrey-4 px-2">
    <h3 :class="[isDisabled ? 'text-grey-2' : 'text-blue-2', 'text-size-7 font-medium']">
      {{ number }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccordionItemTitleNumber',
});
</script>

<script setup lang="ts">
defineProps<{
  number: string;
  isDisabled: boolean;
}>();
</script>
