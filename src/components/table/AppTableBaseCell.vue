<template>
  <AppTableCellText
    v-if="modelValue.type === 'text'"
    :cell="modelValue"
  />
  <AppTableCellTexts
    v-if="modelValue.type === 'texts'"
    :cell="modelValue"
  />
  <AppTableCellButtons
    v-if="modelValue.type === 'buttons'"
    :cell-buttons="modelValue.buttons"
  />
  <AppTableCellLink
    v-if="modelValue.type === 'link'"
    :cell="modelValue"
  />
  <AppTableCellTag
    v-if="modelValue.type === 'tag'"
    :cell="modelValue"
  />
  <AppTableCellSearch
    v-if="modelValue.type === 'search'"
    :cell="modelValue"
  />
  <AppTableCellInput
    v-if="value.type === 'input'"
    v-model="value"
  />
  <AppTableCellIcon
    v-if="modelValue.type === 'icon'"
    :cell="modelValue"
  />
  <AppTableCellCustomRender
    v-if="modelValue.type === 'render'"
    :cell="modelValue"
  />
  <AppTableCellCheckBox
    v-if="modelValue.type === 'checkBox'"
    v-model="value"
  />
</template>

<script lang="ts">
export default {
  name: 'AppTableBaseCell',
};
</script>

<script setup lang="ts">
import type { TCell } from '@/components/table/models';
import { computed } from 'vue';
import AppTableCellText from '@/components/table/cells/AppTableCellText.vue';
import AppTableCellTexts from '@/components/table/cells/AppTableCellTexts.vue';
import AppTableCellButtons from '@/components/table/cells/AppTableCellButtons.vue';
import AppTableCellLink from '@/components/table/cells/AppTableCellLink.vue';
import AppTableCellTag from '@/components/table/cells/AppTableCellTag.vue';
import AppTableCellSearch from '@/components/table/cells/AppTableCellSearch.vue';
import AppTableCellInput from '@/components/table/cells/AppTableCellInput.vue';
import AppTableCellIcon from '@/components/table/cells/AppTableCellIcon.vue';
import AppTableCellCustomRender from '@/components/table/cells/AppTableCellCustomRender.vue';
import AppTableCellCheckBox from './cells/AppTableCellCheckBox.vue';

const props = defineProps<{
  modelValue: TCell;
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: TCell): void;
}>();

const value = computed<TCell>({
  get() {
    return props.modelValue;
  },
  set(newValue): void {
    emit('update:modelValue', newValue);
  },
});
</script>
