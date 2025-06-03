<template>
  <AccordionItem
    :actions
    :active-arrow-on-title-hover="!isDisabled"
  >
    <template #title="{ isItemHover }">
      <div class="ml-2 flex items-center">
        <BaseInput
          v-model="model"
          :size="Size.XS"
          :disabled="isDisabled"
          :is-error="isInputError"
          :text-before-input="textBeforeInput"
          class="mr-4 w-13.5 shrink-0"
          @click.stop=""
          @blur="confirm"
        >
          <template #beforeInput>
            <span>{{ textBeforeInput }}</span>
          </template>
        </BaseInput>
        <SearchResultSpan
          :text="title"
          :pattern
          :color-type="TextColorType.BackGround"
          :grey-text-on-hover="false"
          :class="[
            'text-size-h3 max-w-144 font-bold',
            isDisabled ? 'text-grey-2' : isItemHover ? 'text-blue-2' : 'text-black-1',
          ]"
        />
        <slot name="afterText" />
      </div>
    </template>
    <template #dropDown>
      <slot name="dropDown" />
    </template>
  </AccordionItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccordionItemWithInput',
});
</script>

<script setup lang="ts" generic="T">
import { Size } from '@/enums';
import BaseInput from '@/components/inputs/BaseInput.vue';
import AccordionItem from '@/components/selects/AccordionItem.vue';
import SearchResultSpan from '@/components/selects/SearchResultSpan.vue';
import { TextColorType } from '@/components/selects/utils/models';
import type { IAccordionWithInputProps } from './models';
import { computed, ref } from 'vue';

const props = defineProps<IAccordionWithInputProps<T>>();
const model = ref<string>(props.orderValue);
const initialOrderNumber = computed(() => props.orderValue);

const emit = defineEmits<{
  (eventName: 'set-order:item', orderValue: string): void;
}>();

const confirm = () => {
  if (model.value != initialOrderNumber.value) {
    emit('set-order:item', model.value);
  }
};
</script>
