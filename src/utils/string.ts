/* tslint:disable no-bitwise*/
import type { ISelectItem } from '@/components/selects/models';
import { compareByStringKey, SortType } from '@/utils/compare';

/**
 * Добавить лидирующие нули
 * @param num
 */
export const pad = (num: number) => (num < 10 ? `0${num}` : num.toString());

/**
 * Преобразовать первый символ строки в прописной формат
 * @param str
 */
export const uppercaseFirst = (str: string): string => {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
};

/**
 * Преобразовать первый символ строки в строчный формат
 * @param str
 */
export const lowercaseFirst = (str: string): string => {
  return str.substring(0, 1).toLowerCase() + str.substring(1);
};

export const cmp = (a: string, b: string): 1 | 0 | -1 => {
  return a > b ? 1 : a < b ? -1 : 0;
};

export const hashCode = (s: string) => s.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);

/**
 * Проверка строки на соответствие формату адреса электронной почты
 *  @param email Строка для проверки
 *  @return boolean значение соответствует ли переданная строка формату электронной почты
 */
export const isEmail = (email: string): boolean => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

/**
 * Отсортировать массив ISelectItem по свойству title.
 * @param array Массив ISelectItem
 * @param sortType Тип сортировки
 * @returns Отсортированная копия переданного параметром array массива
 */
export const sortISelectItems = (array: ISelectItem[], sortType: SortType) =>
  [...array].sort(compareByStringKey('title', sortType));

export const removePxMeasureFromValue = (stringWithPx: string) => {
  if (stringWithPx.toLowerCase().endsWith('px')) {
    return Number(stringWithPx.slice(0, -2));
  }

  return Number(stringWithPx);
};

/**
 * Преобразовать строку в логический тип "true" - true, остальное -> false
 * @param string Строка
 * @returns Логический тип
 */
export const stringToBoolean = (string: string | null | undefined) => string?.toLowerCase() === 'true';

export const checkStringIncludesSubstring = (string: string, substring: string) =>
  string.toLowerCase().includes(substring.toLowerCase());
