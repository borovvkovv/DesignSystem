<template>
  <BaseSimpleDropDown
    :is-disabled="isDisabled"
    :class="[isFirstInList ? 'pb-5' : 'py-5']"
  >
    <template #title="{ isDropDownShown }">
      <div class="group flex gap-x-10">
        <AppLink :class="['grow text-left', hasSlot('belowText', slots) && 'flex flex-col gap-y-2']">
          <span class="hover-compatible:group-hover:text-grey-1 hover-incompatible:group-active:text-grey-1">
            {{ text }}
          </span>
          <slot name="belowText" />
        </AppLink>
        <div
          v-if="hasSlot('betweenTextAndArrow', slots)"
          class="shrink-0 grow-0"
        >
          <slot name="betweenTextAndArrow" />
        </div>
        <span
          :class="[
            'hover-compatible:group-hover:text-black-1 hover-incompatible:group-active:text-black-1',
            'block w-5 shrink-0 grow-0 cursor-pointer text-blueGrey-2',
          ]"
        >
          <AppIcon
            :icon="isDropDownShown ? IconName.IconArrowUp : IconName.IconArrowDown"
            :size="20"
          />
        </span>
      </div>
    </template>
    <template #dropDown>
      <div class="pb-16 md:pb-18">
        <slot name="dropDown" />
      </div>
    </template>
    <template #border>
      <div
        v-show="showBorder && !isLastInList"
        :class="['border-blueGrey-4', 'border-t']"
      />
    </template>
  </BaseSimpleDropDown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimpleDropDown',
});
</script>

<script setup lang="ts">
import { useSlots } from 'vue';
import { IconName } from '@/components/icons/models';
import AppIcon from '@/components/AppIcon.vue';
import AppLink from '@/components/app-link/AppLink.vue';
import { hasSlot } from '@/utils/slots';
import BaseSimpleDropDown from '@/components/selects/BaseSimpleDropDown.vue';
import type { ISimpleDropDown } from '@/components/selects/models';

withDefaults(defineProps<ISimpleDropDown>(), {
  isDisabled: false,
  isFirstInList: false,
  isLastInList: false,
  showBorder: false,
});

const slots = useSlots();
</script>
