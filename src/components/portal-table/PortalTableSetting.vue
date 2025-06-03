<template>
  <div class="flex justify-between py-3">
    <div class="flex items-center gap-x-2">
      <AppIcon
        :icon="IconName.IconColumn"
        :size="20"
        class="text-blueGrey-2"
      />
      <span>{{ modelValue.title }}</span>
    </div>
    <AppSwitcher
      v-model="isVisible"
      :is-disabled="modelValue.isDisabled"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTableSetting',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import AppSwitcher from '@/components/inputs/AppSwitcher.vue';
import type { ColumnSetting } from '@/components/portal-table/utils/models';

const props = defineProps<{
  modelValue: ColumnSetting;
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: ColumnSetting): void;
}>();

const isVisible = computed<boolean>({
  get() {
    return !props.modelValue.isHidden;
  },
  set(newValue): void {
    emit('update:modelValue', {
      ...props.modelValue,
      isHidden: !newValue,
    });
  },
});

const isChanged = computed(
  () =>
    props.modelValue.isHidden !== props.modelValue.isHiddenInitially ||
    props.modelValue.index !== props.modelValue.initialIndex,
);

const reset = () => {
  emit('update:modelValue', {
    ...props.modelValue,
    isHidden: props.modelValue.isHiddenInitially,
    index: props.modelValue.initialIndex,
  });
};

defineExpose({
  isChanged,
  reset,
});
</script>
