<template>
  <div
    ref="containerRef"
    class="p-18"
  >
    <IconTextButton
      text="Фильтры"
      :icon-name="IconName.IconParameters"
      :color="AppColor.Blue"
      class="mb-5 mr-3"
      @button-click="() => portalTableFilter?.openModal()"
    />
    <IconButton
      :icon-name="IconName.IconSettings"
      :color="AppColor.Grey"
      class="mb-5 text-blueGrey-2"
      @button-click="() => portalTableSettings?.openModal()"
    />
    <div
      ref="container"
      class="max-w-360 border border-blueGrey-5"
    >
      <PortalTable
        ref="portalTable"
        v-model="dataTable"
        :is-loading="false"
        :table-container="container"
        show-no-data-stub
        class="overflow-visible"
      />
    </div>
  </div>
  <PortalTableSettings
    ref="portalTableSettings"
    v-model:table-data="dataTable"
  />
  <PortalTableFilterSlider
    ref="portalTableFilter"
    v-model:table-data="dataTable"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTablePage',
});
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { AppColor } from '@/enums';
import PortalTable from '@/components/portal-table/PortalTable.vue';
import PortalTableSettings from '@/components/portal-table/PortalTableSettings.vue';
import PortalTableFilterSlider from '@/components/portal-table/PortalTableFilterSlider.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import { IconName } from '@/components/icons/models';
import type { PortalTableRef } from '@/components/portal-table/utils/models';
import IconTextButton from '@/components/buttons/IconTextButton.vue';
import { getPortalTableData, portalTableBuilder } from './utils';

const portalTable = ref<PortalTableRef | undefined>();
const queryParams = computed(() => portalTable.value?.queryParams);
const data = computed(() => getPortalTableData(queryParams.value));
const dataTable = ref(portalTableBuilder(data.value));
const container = ref<HTMLElement | undefined>();

const containerRef = ref<HTMLElement | undefined>();
const portalTableSettings = ref();

const portalTableFilter = ref();

watch(data, () => {
  // @ts-ignore
  dataTable.value.rows = portalTableBuilder(data.value).rows;
});
</script>
