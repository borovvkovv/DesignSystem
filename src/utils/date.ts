import formatRaw from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import rawParse from 'date-fns/parse';
import getStartOfDay from 'date-fns/startOfDay';
import getStartOfMonth from 'date-fns/startOfMonth';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfYear from 'date-fns/startOfYear';
import getEndOfMonth from 'date-fns/endOfMonth';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import getDaysInYear from 'date-fns/getDaysInYear';
import subMonths from 'date-fns/subMonths';
import addMonths from 'date-fns/addMonths';
import subYears from 'date-fns/subYears';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import addYears from 'date-fns/addYears';
import compareAsc from 'date-fns/compareAsc';
import getQuarter from 'date-fns/getQuarter';
import isValid from 'date-fns/isValid';
import getStartOfYear from 'date-fns/startOfYear';
import getEndOfYear from 'date-fns/endOfYear';
import startOfWeek from 'date-fns/startOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isSameYear from 'date-fns/isSameYear';
import isSameMonth from 'date-fns/isSameMonth';
import isWeekend from 'date-fns/isWeekend';
import { format as dateFnsFormat, getDay as dateFnsGetWeekDay } from 'date-fns';
import { CalendarType } from '@/components/calendars/utils/models';

/**
 * Получение из даты объекта со свойствами год и месяц
 * @param date Дата
 * @param calendarType Тип календаря
 * @returns Объект со свойствами год и порядковый номер месяца (если тип календаря - "Год")
 */
export const splitCalendarTypedDate = (date: Date, calendarType: CalendarType.years | CalendarType.year) => ({
  year: date.getFullYear(),
  month: calendarType === CalendarType.year ? date.getMonth() + 1 : undefined,
});

/**
 * Получение строки заданного формата из даты
 * @param date Дата
 * @param fmt Шаблон
 * @returns Строка, форматированная согласно шаблону.
 * Пустая строка, если задан некорректный шаблон или дата
 */
export const format = (date: Date, fmt: string): string => {
  try {
    return formatRaw(date, fmt, { locale: ru });
  } catch (e) {
    return '';
  }
};

/**
 * Преобразование строки в дату
 * @param raw Строка
 * @param fmt Шаблон, применяемый в строке
 * @param date Дата, части которой будут использоваться, если в строке не указан день/месяц/год
 * @returns Дата
 */
export const parse = (raw: string, fmt: string, date: Date = new Date()): Date => rawParse(raw, fmt, date);

/**
 * Получить день недели по дате
 * @param date Дата
 * @returns Число. 1 - Пн, ..., 7 - Вс
 */
const getWeekDay = (date: Date | number): number => dateFnsGetWeekDay(date) || 7;

export {
  ru,
  addMonths,
  addYears,
  compareAsc,
  getWeekDay,
  getQuarter,
  getStartOfDay,
  endOfDay as endofDay,
  getStartOfMonth,
  getEndOfMonth,
  startOfDay,
  endOfDay,
  startOfMonth,
  startOfYear,
  getDaysInMonth,
  getDaysInYear,
  subMonths,
  subYears,
  subDays,
  addDays,
  getStartOfYear,
  getEndOfYear,
  startOfWeek,
  isSameDay,
  isSameYear,
  isSameMonth,
  isWeekend,
};

/**
 * Получение даты из строки стандарта ISO
 * @param date Строка стандарта ISO
 * @returns Дата, преобразованная из строки без учета часового пояса
 */
export const parseMsDate = (date: string): Date => {
  const prepared = date.replace(/\.[0-9]+Z?/, '');

  return parse(prepared, "yyyy-MM-dd'T'HH:mm:ss", new Date());
};

/**
 * Получение строки стандарта ISO из даты
 * @param date Дата
 * @returns Строка формата ISO, с обнуленными миллисекундами, в UTC.
 * Пустая строка, если дата некорректна
 */
export const makeMsDate = (date: Date): string => format(date, "yyyy-MM-dd'T'HH:mm:ss.000'Z");
export const toString = (date: Date) => makeMsDate(date);

/**
 * Преобразование даты в виде строки стандарта ISO в строку заданного формата
 * @param date Дата в виде строки стандарта ISO
 * @param fmt Шаблон
 * @returns Дата в виде строки заданного формата. Пустая строка, если строка или шаблон некорректны
 */
export const formatMsDate = (date: string, fmt: string): string => format(parseMsDate(date), fmt);

/**
 * Получение объекта со свойствами: год месяц и день из заданной даты
 * @param date Дата
 * @param realMonth True - индекс месяца начинается с 1, иначе - с 0
 * @returns Объект: год месяц и день
 */
export const splitDate = (date: Date, realMonth: boolean = true) => {
  const year = date.getFullYear();
  const month = date.getMonth() + (realMonth ? 1 : 0);
  const day = date.getDate();

  return {
    year,
    month,
    day,
  };
};

/**
 * Преобразование строки в дату, форматирование полученной даты по шаблону
 * @param dateAsString Строка любого формата, пригодного для преобразования в дату через конструктор Date
 * @param dateFormat Шаблон, по умолчанию 'dd.MM.yyyy HH:mm'
 * @returns Один из вариантов:
 *
 * - отформатированная строка;
 *
 * - пустая строка если не удалось преобразоавть переданную строку в дату, либо передан неизвестный шаблон;

* - undefined, если переданная строка - null.
 */
export const getFormattedStringDate = (
  dateAsString?: string | null,
  dateFormat: string = 'dd.MM.yyyy HH:mm',
): string | undefined => {
  const date = dateAsString ? new Date(dateAsString) : undefined;
  return date ? format(date, dateFormat) : undefined;
};

/**
 * Получить часть даты в виде строки
 * @param date Дата
 * @param datePart Часть даты: число, месяц (номер месяца, не индекс), год
 * @returns Часть даты в виде строки
 */
export const getDatePartAsString = (date: Date, datePart: 'day' | 'month' | 'year'): string => {
  switch (datePart) {
    case 'day':
      return date.getDate().toString();
    case 'month':
      return (date.getMonth() + 1).toString();
    case 'year':
      return date.getFullYear().toString();
  }
};
