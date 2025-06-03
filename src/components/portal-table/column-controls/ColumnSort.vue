<template>
  <AppIcon
    :icon="iconArrange"
    :size="16"
    :class="['cursor-pointer hover:text-blue-2', isActive ? 'text-black-1' : 'text-blueGrey-2']"
    @click="onIconClick"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColumnSort',
});
</script>

<script setup lang="ts">
import { computed, nextTick } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import { SortOrderEnum } from '@/api';
import { type TColumnControlSort } from '../utils/models';
import { switchSortTypeToNext } from '../utils/sortColumnControlUtils';

const props = defineProps<{
  columnControl: TColumnControlSort;
}>();

const emit = defineEmits<{
  (eventName: 'update:columnControl', newValue: TColumnControlSort): void;
  (eventName: 'before:sort'): void;
}>();

const isActive = computed(() => props.columnControl.sortOrder !== undefined);
const iconArrange = computed(() =>
  props.columnControl.sortOrder === SortOrderEnum.Desc ? IconName.IconArrangeDesc : IconName.IconArrangeAsc,
);

const onIconClick = () => {
  if (props.columnControl.sortOrder === undefined) emit('before:sort');

  // Обновление пропа в компоненте, обновление инициализировал хэндлер before:sort в PortalTableBaseHeader.
  nextTick(() => {
    emit('update:columnControl', {
      ...props.columnControl,
      sortOrder: switchSortTypeToNext(props.columnControl.sortOrder),
    });

    nextTick(() => {
      props.columnControl.onChangeSortOrderHandler();
    });
  });
};

defineExpose({
  isActive,
  type: props.columnControl.type,
});
</script>
