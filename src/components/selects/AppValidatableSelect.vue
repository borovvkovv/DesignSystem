<template>
  <SimpleSelect
    v-bind="props"
    v-model="optionsSelected"
    :options="options ?? []"
    :is-error="validationModel.$error"
    :error-list="validationModel.$errors.map((error) => unref(error.$message))"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppValidatableSelect',
});
</script>

<script setup lang="ts" generic="TKey extends SelectKeyType">
import SimpleSelect from '@/components/selects/SimpleSelect.vue';
import type { SelectQueryResult } from '@/selects/types';
import type { SelectKeyType } from '@/components/selects/models';
import type { BaseValidation } from '@vuelidate/core';
import { watch, unref } from 'vue';
import type { ISimpleSelectBase, ISimpleSelectProps } from '@/components/inputs/models';

const props = defineProps<
  ISimpleSelectBase & {
    dataSelector: (initialSelectedId?: TKey) => SelectQueryResult<TKey>;
  }
>();

const validationModel = defineModel<BaseValidation<TKey | undefined>>({ required: true });
const { options, optionsSelected, selectedItemValue } = props.dataSelector(validationModel.value.$model);
watch(
  () => selectedItemValue.value,
  () => {
    validationModel.value.$model = selectedItemValue.value ?? undefined;
  },
);
</script>
