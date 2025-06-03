<template>
  <div class="m-10 flex flex-col">
    <AccordionItem
      v-for="(role, roleIndex) in accordionModelData"
      :key="roleIndex"
      :actions="[
        { icon: IconName.IconEdit, isActive: false, onIconClick: () => {}, title: 'Редактировать роль' },
        { icon: IconName.IconWasteBin, isActive: false, onIconClick: () => {}, title: 'Удалить роль' },
      ]"
    >
      <template #title="{ isItemHover }">
        <h4 :class="['inline-block max-w-144', isItemHover ? 'text-blue-2' : 'text-black-1']">
          {{ role.groupDescription }}
        </h4>
        {{ ' ' }}
        <h4 :class="['inline-block max-w-144', isItemHover ? 'text-blue-2' : 'text-blueGrey-2']">
          ({{ role.groupName }})
        </h4>
      </template>
      <template #dropDown>
        <AppTable
          :model-value="rolesTableBuilder(role, pattern)"
          :is-loading="false"
          class="mb-5"
        />
      </template>
    </AccordionItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccordionPage',
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { IconName } from '@/components/icons/models';
import AppTable from '@/components/table/AppTable.vue';
import AccordionItem from '@/components/selects/AccordionItem.vue';
import { accordionModelData } from './utils/models';
import { rolesTableBuilder } from '@/views-portal/roles/utils';

const pattern = ref('');
</script>
