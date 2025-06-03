<template>
  <div class="flex">
    <div class="max-w-full basis-full">
      <SimpleDropDownSkeleton v-if="isLoading" />
      <IconTextStub
        v-else-if="isContentEmpty"
        :icon="IconName.IconEmptyGraph"
        :texts="emptyDataTexts"
        :height="height"
      />
      <slot v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropDownListLoadingWrapper',
});
</script>

<script setup lang="ts">
import SimpleDropDownSkeleton from '@/components/skeletons/SimpleDropDownSkeleton.vue';
import IconTextStub from '@/components/stubs/IconTextStub.vue';
import { IconName } from '@/components/icons/models';

withDefaults(
  defineProps<{
    isLoading?: boolean;
    isContentEmpty?: boolean;
    emptyDataTexts?: string[];
    height?: number;
  }>(),
  {
    isLoading: false,
    isContentEmpty: false,
    emptyDataTexts: undefined,
    height: 350,
  },
);
</script>
