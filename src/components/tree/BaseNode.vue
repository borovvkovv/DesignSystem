<template>
  <div
    :class="[
      'relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-blueGrey-5 hover:text-darkBlue-4',
      isDisabled ? 'pointer-events-none text-blueGrey-2' : 'text-blue-2',
    ]"
    @click="() => emits('onButtonClick')"
  >
    <AppIcon
      :icon="icon"
      :size="20"
    />
    <AppIcon
      v-if="state !== AccountingNodeEquipStateCheck.None"
      :icon="IconName.IconPoint"
      :size="10"
      :class="[
        'absolute -right-[5px] -top-[5px] border-white bg-white',
        isDisabled || state === AccountingNodeEquipStateCheck.Warning ? 'text-orange' : 'text-red-3',
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseNode',
});
</script>

<script setup lang="ts">
import { IconName } from '@/components/icons/models';
import AppIcon from '@/components/AppIcon.vue';
import { AccountingNodeEquipStateCheck } from '@/api';

withDefaults(
  defineProps<{
    state?: AccountingNodeEquipStateCheck;
    isDisabled?: boolean;
    icon: IconName;
  }>(),
  {
    state: AccountingNodeEquipStateCheck.None,
    isDisabled: false,
  },
);

const emits = defineEmits<{
  (e: 'onButtonClick'): void;
}>();
</script>
