<template>
  <component
    :is="inputComponent"
    v-bind="props"
    v-model="modelValue.$model"
    :error-list="modelValue.$errors.map((error) => unref(error.$message))"
    :is-error="modelValue.$error"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppValidatableInput',
});
</script>

<script setup lang="ts">
import type { IAppValidatableInputProps } from '@/components/inputs/models';
import { InputComponents, InputType } from '@/components/inputs/models';
import { computed, unref } from 'vue';

const props = withDefaults(defineProps<IAppValidatableInputProps>(), {
  inputType: InputType.Text,
});
// TODO: разобраться с типом
const inputComponent: any = computed(() =>
  props.inputType === InputType.Password ? InputComponents['BasePasswordInput'] : InputComponents['BaseSimpleInput'],
);
</script>
