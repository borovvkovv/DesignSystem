import { defineStore } from 'pinia';
import { ref } from 'vue';
import { RgkCodes } from '@/enums/rgk/rgk-codes';

export const useSession = defineStore('session', () => {
  const rgkCode = ref<RgkCodes>(RgkCodes.Test);

  return {
    rgkCode,
  };
});
