<template>
  <div class="m-4">
    <h2 class="my-1">Статусы согласования</h2>
    <div class="mb-10 flex gap-x-5">
      <AppLink
        @click="
          addSnackBar({
            id: createGuid(),
            message: 'Изменения сохранены',
            status: SnackBarStatus.Success,
            timer: 3000,
          })
        "
      >
        Добавить Success
      </AppLink>
      <AppLink
        @click="
          addSnackBar({
            id: createGuid(),
            message: 'Не удалось удалить организацию',
            status: SnackBarStatus.Alert,
            timer: 3000,
          })
        "
      >
        Добавить Alert
      </AppLink>
      <AppLink
        @click="
          addSnackBar({
            id: createGuid(),
            message: 'Письмо с инструкцией отправлено',
            status: SnackBarStatus.Normal,
            timer: 3000,
          })
        "
      >
        Добавить Normal
      </AppLink>
    </div>
    <SnackBarList />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SnackBarPage',
};
</script>

<script setup lang="ts">
import AppLink from '@/components/app-link/AppLink.vue';
import SnackBarList from '@/components/snack-bar/SnackBarList.vue';
import { SnackBarStatus } from '@/components/snack-bar/utils/models';
import { createGuid } from '@/utils/guid';
import { useSnackBar } from '@/stores/snackBar';

const { addSnackBar } = useSnackBar();
</script>
