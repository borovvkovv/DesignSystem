<template>
  <AppTableBase
    ref="tableBaseRef"
    :table="modelValue"
  >
    <template #header>
      <AppTableBaseHeader
        :header="modelValue.header"
        :is-header-sticky="modelValue.isHeaderSticky"
        @change:header="(isSticky) => emit('change:header', isSticky)"
      />
    </template>
    <template #default>
      <AppTableModelBody
        v-model="modelRows"
        @change:row="onRowChanged"
      />
    </template>
  </AppTableBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTableModelData',
});
</script>

<script setup lang="ts" generic="T">
import type { TTableModel, TTableModelRows } from '@/components/table/models';
import AppTableModelBody from '@/components/table/AppTableModelBody.vue';
import { computed, ref } from 'vue';
import AppTableBase from '@/components/table/AppTableBase.vue';
import AppTableBaseHeader from '@/components/table/AppTableBaseHeader.vue';

const props = defineProps<{
  modelValue: TTableModel<T>;
}>();

const emit = defineEmits<{
  (eventName: 'change:row', changedRowIndex: number, newModel: TTableModel<T>): void;
  (eventName: 'update:modelValue', newValue: TTableModel<T>): void;
  (eventName: 'change:header', isSticky: boolean): void;
}>();

const tableBaseRef = ref();
const tableRef = computed(() => tableBaseRef.value?.tableRef);
const modelRows = computed<TTableModelRows<T>>({
  get() {
    return props.modelValue.rows;
  },
  set(newRows): void {
    emit('update:modelValue', {
      ...props.modelValue,
      rows: newRows,
    });
  },
});

const onRowChanged = (changedRowIndex: number, newModelRows: TTableModelRows<T>) => {
  emit('change:row', changedRowIndex, {
    ...props.modelValue,
    rows: newModelRows,
  });
};

defineExpose({
  tableRef,
});
</script>
