<template>
  <AppTextArea
    v-bind="props"
    v-model="modelValue.$model"
    :error-list="modelValue.$errors.map((error) => unref(error.$message))"
    :is-error="modelValue.$error"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppValidatableTextArea',
});
</script>

<script setup lang="ts">
import type { IAppValidatableTextAreaProps } from '@/components/inputs/models';
import AppTextArea from '@/components/inputs/AppTextArea.vue';
import { unref } from 'vue';

const props = defineProps<IAppValidatableTextAreaProps>();
</script>
