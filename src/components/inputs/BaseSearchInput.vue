<template>
  <BaseSimpleInput
    v-model="model"
    :type="InputType.Text"
    :icon-left="IconName.IconMagnifier"
    :placeholder="placeholder"
    :size="size"
    :label="label"
    :is-disabled="disabled"
    :min-width="minWidth"
    @change:model-value="(value) => emit('change:modelValue', value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BaseSearchInput',
});
</script>

<script setup lang="ts">
import BaseSimpleInput from '@/components/inputs/BaseSimpleInput.vue';
import { InputType, type IBaseSearchInputProps } from './models';
import { Size } from '@/enums';
import { computed } from 'vue';
import { IconName } from '@/components/icons/models';

const props = withDefaults(defineProps<IBaseSearchInputProps>(), {
  placeholder: 'Поиск',
  size: Size.S,
  label: undefined,
  disabled: false,
  minWidth: undefined,
});

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: string): void;
  (eventName: 'change:modelValue', newValue: string): void;
}>();

const model = computed({
  get(): string {
    return props.modelValue;
  },
  set(newValue: string): void {
    emit('update:modelValue', newValue);
  },
});
</script>
