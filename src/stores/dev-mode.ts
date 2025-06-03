import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDevMode = defineStore('dev-mode', () => {
  const showGrid = ref(false);
  const isDevMode = ref(false);
  const showNotReadyComponents = ref(false);

  function toggleShowGrid() {
    showGrid.value = !showGrid.value;
  }

  return { showGrid, isDevMode, toggleShowGrid, showNotReadyComponents };
});
