<template>
  <PortalTableModelData
    v-bind="props"
    v-model="model"
    @change:row="onChangeRowHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTableModel',
});
</script>

<script setup lang="ts" generic="T">
import { computed } from 'vue';
import type { PortalTableModelProps, TPortalTableModel } from '@/components/portal-table-model/utils/models';
import PortalTableModelData from '@/components/portal-table-model/PortalTableModelData.vue';

const props = defineProps<PortalTableModelProps<T>>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TPortalTableModel<T> | null): void;
  (eventName: 'change:row', changedRowIndex: number, newModel: TPortalTableModel<T>): void;
}>();

const model = computed<TPortalTableModel<T> | null>({
  get() {
    return props.modelValue;
  },
  set(newValue): void {
    emit('update:modelValue', newValue);
  },
});

const onChangeRowHandler = (changedRowIndex: number, newModel: TPortalTableModel<T>) => {
  emit('change:row', changedRowIndex, newModel);
};
</script>
