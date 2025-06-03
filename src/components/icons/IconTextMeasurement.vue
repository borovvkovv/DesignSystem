<template>
  <IconText
    text="тыс. м³"
    :width="50"
    :height="20"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconTextMeasurement',
});
</script>

<script setup lang="ts">
import IconText from '@/components/icons/IconText.vue';
</script>
