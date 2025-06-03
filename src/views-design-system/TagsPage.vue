<template>
  <div class="m-4">
    <h2 class="my-1">Статусы согласования</h2>
    <div
      v-for="status in approvementStatuses"
      :key="status"
      class="flex gap-x-4"
    >
      Status: {{ status }}
      <BaseTag
        :text="ApprovementStatusesNamesMap[status]"
        :type="ApprovementStatusesColorMap[status]"
        class="mb-4"
      />
    </div>

    <br />
    <h2 class="my-1">Статусы отправки показаний</h2>
    <div
      v-for="status in sendNotifyStatuses"
      :key="status"
      class="flex gap-x-4"
    >
      Status: {{ status }}
      <BaseTag
        :text="SendNotifyStatusesNamesMap[status]"
        :type="SendNotifyStatusesColorMap[status]"
        class="mb-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TagsPage',
};
</script>

<script setup lang="ts">
import BaseTag from '@/components/tags/BaseTag.vue';
import {
  ApprovementStatusesColorMap,
  ApprovementStatusesNamesMap,
  SendNotifyStatusesColorMap,
  SendNotifyStatusesNamesMap,
} from '@/components/tags/utils/models';

const approvementStatuses = Object.keys(ApprovementStatusesNamesMap).map(
  (key) => Number(key) as keyof typeof ApprovementStatusesNamesMap,
);

const sendNotifyStatuses = Object.keys(SendNotifyStatusesNamesMap).map(
  (key) => Number(key) as keyof typeof SendNotifyStatusesNamesMap,
);
</script>
