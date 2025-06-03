<template>
  <div class="mb-2">
    <label class="text-size-5 inline text-grey-1">
      {{ label }}
    </label>
    <AppIcon
      v-if="required"
      :icon="IconName.IconMarker"
      :size="10"
      class="ml-2 inline align-middle text-red-3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputLabel',
});
</script>

<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';

defineProps<{
  label: string;
  required?: boolean;
}>();
</script>
