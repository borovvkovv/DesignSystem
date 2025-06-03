import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type SnackBarProps, type SnackBarPropsStrict, SnackBarStatus } from '@/components/snack-bar/utils/models';
import { createGuid } from '@/utils/guid';

export const useSnackBar = defineStore('snackBar', () => {
  const snackBarList = ref<SnackBarPropsStrict[]>([]);

  const addSnackBar = (snackBarProps: SnackBarProps) => {
    snackBarList.value = [
      ...snackBarList.value,
      {
        id: snackBarProps.id ?? createGuid(),
        message: snackBarProps.message,
        status: snackBarProps.status ?? SnackBarStatus.Normal,
        timer: snackBarProps.timer ?? 3000,
      },
    ];
  };

  const changeSnackBarList = (newValue: SnackBarPropsStrict[]) => {
    snackBarList.value = [...newValue];
  };

  return {
    snackBarList,
    addSnackBar,
    changeSnackBarList,
  };
});
