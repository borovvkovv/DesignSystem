import { inject, provide, type MaybeRef } from 'vue';

/**
 * Добавить зависимость (элемент со скролом) в поставщик зависимостей
 * @param scrollElement Элемннт со скролом
 */
export const setScrollElementToProvider = (scrollElement: MaybeRef<HTMLElement | undefined>): void => {
  provide('scrollElement', scrollElement);
};

/**
 * Получить зависимость (элемент со скролом) из поставщика зависимостей
 * @returns Реактивный элемент со скролом
 */
export const getScrollElementToProvider = (): MaybeRef<HTMLElement | undefined> =>
  inject<MaybeRef<HTMLElement | undefined>>('scrollElement', undefined);
