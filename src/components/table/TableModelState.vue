<template>
  <LinesSkeleton
    v-if="isLoading"
    v-bind="{ ...calculatedLoading, ...attrs }"
  />
  <IconTextStub
    v-else-if="showNoDataStub && isNoData"
    :icon="IconName.IconEmptyGraph"
    :texts="noDataStubTexts"
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
  name: 'TableModelState',
});
</script>

<script setup lang="ts" generic="T">
import LinesSkeleton from '@/components/skeletons/LinesSkeleton.vue';
import type { LineSkeletonProps } from '@/components/skeletons/models';
import type { AppTableModelProps } from '@/components/table/models';
import { computed, useAttrs, watch, ref } from 'vue';
import { getTableModelLoadingConfig } from '@/components/table/utils/loading';
import IconTextStub from '@/components/stubs/IconTextStub.vue';
import { IconName } from '@/components/icons/models';
import type { PortalTableModelProps } from '@/components/portal-table-model/utils/models';

const props = withDefaults(defineProps<AppTableModelProps<T> | PortalTableModelProps<T>>(), {
  loadingConfig: undefined,
  showNoDataStub: false,
  noDataStubTexts: () => ['Для выбранных настроек данные недоступны.', 'Выберите другие настройки в фильтре.'],
});

const attrs = useAttrs();
const calculatedLoading = ref<LineSkeletonProps | undefined>(props.loadingConfig);
const isNoData = computed(() => (props.modelValue?.rows?.model.length ?? 0) === 0);

watch(
  () => props.modelValue,
  () => {
    if (!props.loadingConfig && props.modelValue) {
      calculatedLoading.value = getTableModelLoadingConfig(props.modelValue.rows);
    }
  },
  {
    immediate: true,
  },
);
</script>
