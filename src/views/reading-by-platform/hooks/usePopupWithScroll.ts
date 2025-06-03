import type { BasePopupRef } from '@/components/popup/utils/models';
import type { Point } from 'chart.js';
import { computed, ref, unref, watch, type MaybeRef } from 'vue';

/**
 * Отслеживание приближения/удаления курсора от попапа
 * @param popupRef Попап
 * @returns Метод создания события отслеживания курсора
 */
export function usePopupWithScroll(popupRef: MaybeRef<BasePopupRef | undefined>) {
  const popupUnref = computed(() => unref(popupRef));
  const popup = computed<HTMLElement | undefined>(() => popupUnref.value?.popup);
  const currentDistanceFromPointerToPopup = ref<number | undefined>();

  const getPopupMiddlePoint = (): Point | undefined => {
    if (popup.value) {
      const popupElement = popup.value.getBoundingClientRect();
      return { x: popupElement.x + popupElement.width / 2, y: popupElement.y + popupElement.height / 2 };
    }
  };

  /**
   * Удалить событие передвижения курсора и сбросить расстояние от мыши до центра попапа
   */
  const resetMouseMoveParameters = () => {
    document.removeEventListener('mousemove', onMouseMoveHandler, false);
    currentDistanceFromPointerToPopup.value = undefined;
  };

  /**
   * Создать событие передвижения курсора
   */
  const startCheckIfPointerReachPopup = () => {
    document.addEventListener('mousemove', onMouseMoveHandler, false);
  };

  /**
   * Хэндлер для проверки приближения курсора к попапу. Если курсор удаляется, то попап закрывается и событие передвижения мыши удаляется
   * @param evt Событие курсора
   */
  const onMouseMoveHandler = (evt: MouseEvent) => {
    if (popupUnref.value?.checkIsPointerOnPopup(evt.clientX, evt.clientY)) {
      return;
    }

    const newDistanceFromPointerToPopup = getDistanceFromPointerToPopup(evt, getPopupMiddlePoint());

    if (newDistanceFromPointerToPopup === undefined) {
      popupUnref.value?.closePopup();
      return;
    }

    if (!currentDistanceFromPointerToPopup.value) {
      currentDistanceFromPointerToPopup.value = newDistanceFromPointerToPopup;
      return;
    }

    const isPointerFurtherToPopup = newDistanceFromPointerToPopup > currentDistanceFromPointerToPopup.value;

    if (isPointerFurtherToPopup) {
      popupUnref.value?.closePopup();
    } else {
      currentDistanceFromPointerToPopup.value = newDistanceFromPointerToPopup;
    }
  };

  watch(
    () => popupUnref.value?.isShown,
    () => {
      if (popupUnref.value?.isShown === false) resetMouseMoveParameters();
    },
  );

  return { startCheckIfPointerReachPopup };
}

/**
 * Получить расстояние от курсора до попапа
 * @param evt Событие мыши
 * @param popupMiddlePoint Точка на попапе с которой отсчитывается расстояние до курсора
 * @returns x - расстояние от курсора до попапа, если попап не определен, то возвращается undefined
 */
function getDistanceFromPointerToPopup(evt: MouseEvent, popupMiddlePoint: Point | undefined): number | undefined {
  if (popupMiddlePoint === undefined) {
    return undefined;
  }

  return Math.pow(popupMiddlePoint.x - evt.clientX, 2) + Math.pow(popupMiddlePoint.y - evt.clientY, 2);
}
