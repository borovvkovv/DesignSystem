<template>
  <BaseSelectDropDown
    ref="baseSelectDropDown"
    is-drop-down-fixed
    @before:visible="() => onDropDownOpenHandler(dropdown)"
  >
    <template #input="{ toggleDropDown }">
      <AppIcon
        :icon="icon"
        :size="16"
        :class="['cursor-pointer hover:text-blue-2', isDropDownShown || isActive ? 'text-black-1' : 'text-blueGrey-2']"
        @click="toggleDropDown"
      />
    </template>
    <template #dropDown="{ registerCallSection, unregisterCallSection, setDropDownVisibility }">
      <BaseForm
        :validator="validatorLocal"
        @submit="() => submit(setDropDownVisibility)"
        @vue:mounted="registerCallSection"
        @vue:unmounted="unregisterCallSection"
      >
        <div class="flex w-110 items-start justify-between gap-x-3 bg-white px-6 py-5 shadow-2">
          <div class="w-72 grow"><slot /></div>
          <div class="flex shrink-0 items-end gap-x-3">
            <IconButton
              type="submit"
              :icon-name="IconName.IconMark"
              :size="Size.S"
            />
            <IconButton
              :icon-name="IconName.IconCross"
              :color="AppColor.Grey"
              :size="Size.S"
              class="text-red-2"
              @button-click="() => onCrossClickHandler(setDropDownVisibility)"
            />
          </div>
        </div>
      </BaseForm>
    </template>
  </BaseSelectDropDown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColumnFilterBase',
});
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import BaseSelectDropDown from '@/components/selects/BaseSelectDropDown.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import { AppColor, Size } from '@/enums';
import BaseForm from '@/components/forms/BaseForm.vue';
import { shiftElementIntoContainer } from '@/components/popup/utils';

const props = defineProps<{
  icon: IconName;
  validator?: {
    $validate(): Promise<boolean>;
    $touch(): void;
    $reset(): void;
  };
  isActive: boolean;
  tableContainer?: HTMLElement;
}>();

const emit = defineEmits<{
  (eventName: 'ok:click'): void;
  (eventName: 'cross:click'): void;
}>();

const validatorLocal = computed(
  () =>
    props.validator ?? {
      $validate: () => new Promise<boolean>(() => void 0),
      $touch: (): void => void 0,
      $reset: (): void => void 0,
    },
);
const baseSelectDropDown = ref<InstanceType<typeof BaseSelectDropDown>>();
const isDropDownShown = computed<boolean>(() => !!baseSelectDropDown.value?.isDropDownShown);
const dropdown = computed(() => baseSelectDropDown.value?.dropdown);

const submit = (setDropDownVisibility: (isVisible: boolean) => void) => {
  emit('ok:click');
  setDropDownVisibility(false);
};

const onCrossClickHandler = (setDropDownVisibility: (isVisible: boolean) => void) => {
  emit('cross:click');
  setDropDownVisibility(false);
};

const onDropDownOpenHandler = (dropDownElement?: HTMLElement) => {
  if (!dropDownElement) return;

  const { originalPosition, shiftedPosition } = shiftElementIntoContainer(
    dropDownElement,
    props.tableContainer,
    {},
    false,
    false,
  );

  if (originalPosition.left !== shiftedPosition.left) {
    dropDownElement.style.left = `${shiftedPosition.left}px`;
  }
};

defineExpose({
  isDropDownShown,
});
</script>
