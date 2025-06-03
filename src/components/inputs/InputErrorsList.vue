<template>
  <ul
    v-if="errorList.length"
    class="mt-2 p-0 text-size-7 text-red-3"
  >
    <li
      v-for="(error, index) in errorList"
      :key="index"
      class="m-0 list-none p-0"
    >
      {{ error }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputErrorsList',
});
</script>

<script setup lang="ts">
defineProps<{
  errorList: string[];
}>();
</script>
