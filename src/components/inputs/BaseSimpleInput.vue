<template>
  <BaseInput
    ref="baseInputRef"
    v-bind="props"
    :type="type"
    :icon-left="iconLeft"
    :icon-right="{
      iconName: iconRightName,
      onIconClick: () => {
        emit('update:modelValue', '');
        emit('change:modelValue', '');
      },
    }"
    @update:model-value="(value: string) => emit('update:modelValue', value)"
    @change:model-value="(value: string) => emit('change:modelValue', value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseSimpleInput',
});
</script>

<script setup lang="ts">
import type { ISimpleInputProps } from '@/components/inputs/models';
import BaseInput from '@/components/inputs/BaseInput.vue';
import { computed, ref } from 'vue';
import { IconName } from '@/components/icons/models';
import { InputType } from '@/components/inputs/models';

const props = withDefaults(defineProps<ISimpleInputProps>(), {
  type: InputType.Text,
});
const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: string): void;
  (eventName: 'change:modelValue', newValue: string): void;
}>();
const baseInputRef = ref();

defineExpose({
  focus: () => baseInputRef.value.focus(),
});

const iconRightName = computed(() => (!props.disabled && props.modelValue ? IconName.IconCross : IconName.IconNone));
</script>
