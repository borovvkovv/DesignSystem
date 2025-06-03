<template>
  <BaseInput
    ref="baseInputRef"
    v-bind="props"
    :icon-right="{
      iconName: icon,
      onIconClick: toggleType,
    }"
    :type="passwordType"
    @update:model-value="(value : string) => emit('update:modelValue', value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasePasswordInput',
});
</script>

<script setup lang="ts">
import type { IPasswordInputProps } from '@/components/inputs/models';
import BaseInput from '@/components/inputs/BaseInput.vue';
import { computed, ref } from 'vue';
import { IconName } from '@/components/icons/models';
import { InputType } from '@/components/inputs/models';

const props = defineProps<IPasswordInputProps>();
const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: string): void;
}>();
const baseInputRef = ref();
const passwordType = ref(InputType.Password);
const icon = computed(() => (passwordType.value === InputType.Password ? IconName.IconEyeClose : IconName.IconEyeOpen));

const toggleType = () => {
  passwordType.value = passwordType.value === InputType.Password ? InputType.Text : InputType.Password;
};

defineExpose({
  focus: () => baseInputRef.value.focus(),
});
</script>
