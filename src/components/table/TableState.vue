<template>
  <LinesSkeleton
    v-if="isLoading"
    v-bind="{ ...calculatedLoading, ...attrs }"
  />
  <IconTextStub
    v-else-if="showNoDataStub && isNoData"
    :icon="IconName.IconEmptyGraph"
    :texts="noDataStubTexts"
    :height="noDataStubHeight"
    v-bind="attrs"
  />
  <slot
    v-else-if="!isNoData"
    v-bind="attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableState',
});
</script>

<script setup lang="ts" generic="T">
import LinesSkeleton from '@/components/skeletons/LinesSkeleton.vue';
import type { LineSkeletonProps } from '@/components/skeletons/models';
import type { AppTableProps } from '@/components/table/models';
import { computed, ref, useAttrs, watch } from 'vue';
import { getLoadingConfig } from '@/components/table/utils/loading';
import IconTextStub from '@/components/stubs/IconTextStub.vue';
import { IconName } from '@/components/icons/models';
import type { PortalTableProps } from '@/components/portal-table/utils/models';

const props = withDefaults(defineProps<AppTableProps | PortalTableProps<T>>(), {
  loadingConfig: undefined,
  showNoDataStub: false,
  noDataStubTexts: () => ['Для выбранных настроек данные недоступны.', 'Выберите другие настройки в фильтре.'],
});

const attrs = useAttrs();
const calculatedLoading = ref<LineSkeletonProps | undefined>(props.loadingConfig);
const isNoData = computed(() => (props.modelValue?.rows?.length ?? 0) === 0);

watch(
  () => props.modelValue,
  () => {
    if (!props.loadingConfig && props.modelValue) {
      calculatedLoading.value = getLoadingConfig(props.modelValue);
    }
  },
);
</script>
