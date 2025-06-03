import { describe, expect, test } from 'vitest';
import {
  splitCalendarTypedDate,
  format,
  getWeekDay,
  parseMsDate,
  parse,
  makeMsDate,
  formatMsDate,
  splitDate,
  getFormattedStringDate,
  getDatePartAsString,
} from '@/utils/date';
import { CalendarType } from '@/components/calendars/utils/models';

describe('Библиотека date', () => {
  test.each([
    [new Date('01-01-2024'), CalendarType.year as const, { year: 2024, month: 1 }],
    [new Date('12-31-2024'), CalendarType.year as const, { year: 2024, month: 12 }],
    [new Date('01-01-2024'), CalendarType.years as const, { year: 2024, month: undefined }],
    [new Date('err'), CalendarType.year as const, { year: NaN, month: NaN }],
  ])('splitCalendarTypedDate(%s, %s) -> %s', (date, calendarType, output) => {
    expect(splitCalendarTypedDate(date, calendarType)).toStrictEqual(output);
  });

  test.each([
    [new Date('05-06-2025'), 'dd.MM.yyyy', '06.05.2025'],
    [new Date('2025-06-05T10:15:35.000'), 'HH:mm:ss', '10:15:35'],
    [new Date('05-06-2025'), 'err', ''],
    [new Date('err'), 'dd.MM.yyyy', ''],
  ])('format(%s, %s) -> %s', (date, fmt, output) => {
    expect(format(date, fmt)).toBe(output);
  });

  test.each([
    ['03', 'MM', new Date(2000, 0, 1, 6, 10, 15, 777), new Date(2000, 2, 1, 0, 0, 0, 0)],
    ['10:15:35', 'HH:mm:ss', new Date(2000, 0, 1, 0, 0, 0, 0), new Date(2000, 0, 1, 10, 15, 35, 0)],
    ['01/03/2024', 'MM/dd/yyyy', new Date(2000, 1, 1), new Date(2024, 0, 3)],
    ['err', 'MM/dd/yyyy', new Date(2000, 1, 1), new Date(NaN)],
    ['01/03/2024', 'MM/dd/yyyy', new Date('err'), new Date(NaN)],
  ])('parse(%s, %s, %s) -> %s', (raw, fmt, date, output) => {
    expect(parse(raw, fmt, date)).toStrictEqual(output);
  });

  test.each([
    [new Date('02-03-2025'), 1],
    [new Date('02-04-2025'), 2],
    [new Date('02-05-2025'), 3],
    [new Date('02-06-2025'), 4],
    [new Date('02-07-2025'), 5],
    [new Date('02-08-2025'), 6],
    [new Date('02-09-2025'), 7],
    [new Date('02-10-2025'), 1],
  ])('getWeekDay(%s) -> %s', (date, output) => {
    expect(getWeekDay(date)).toBe(output);
  });

  test.each([
    ['2025-03-01T06:10:15', new Date(2025, 2, 1, 6, 10, 15, 0)],
    ['2025-03-01T06:10:15.000Z', new Date(2025, 2, 1, 6, 10, 15, 0)],
    ['2025-03-01T06:10:15', new Date(2025, 2, 1, 6, 10, 15, 0)],
    ['2025-03-01T06:10:15.123Z', new Date(2025, 2, 1, 6, 10, 15, 0)],
    ['2025-03-01', new Date(NaN)],
  ])('parseMsDate(%s) -> %s', (date, output) => {
    expect(parseMsDate(date)).toStrictEqual(output);
  });

  test.each([
    [new Date(2025, 2, 1, 6, 10, 15, 777), '2025-03-01T06:10:15.000Z'],
    [new Date(2025, 2, 1), '2025-03-01T00:00:00.000Z'],
    [new Date('err'), ''],
  ])('makeMsDate(%s) -> %s', (date, output) => {
    expect(makeMsDate(date)).toBe(output);
  });

  test.each([
    ['2025-03-01T06:10:15.000Z', 'dd-MM-yyyy', '01-03-2025'],
    ['2025-03-01T06:10:15.000Z', 'HH:mm:ss', '06:10:15'],
    ['err', 'HH:mm:ss', ''],
    ['2025-03-01T06:10:15.000Z', 'err', ''],
  ])('formatMsDate(%s, %s) -> %s', (date, fmt, output) => {
    expect(formatMsDate(date, fmt)).toBe(output);
  });

  test.each([
    [new Date('2025-03-01T00:00:00.000'), false, { year: 2025, month: 2, day: 1 }],
    [new Date('2025-03-01T00:00:00.000'), true, { year: 2025, month: 3, day: 1 }],
    [new Date('err'), false, { year: NaN, month: NaN, day: NaN }],
  ])('splitDate(%s, %s) -> %s', (date, realMonth, output) => {
    expect(splitDate(date, realMonth)).toStrictEqual(output);
  });

  test.each([
    ['2025-03-01T00:00:00', 'dd.MM.yyyy HH:mm:ss', '01.03.2025 00:00:00'],
    ['2025/03/01', 'dd.MM.yyyy HH:mm', '01.03.2025 00:00'],
    ['2025/03/01', undefined, '01.03.2025 00:00'],
    ['err', 'dd.MM.yyyy HH:mm', ''],
    [null, 'dd.MM.yyyy HH:mm', undefined],
    [undefined, 'dd.MM.yyyy HH:mm', undefined],
    ['2025-03-01T00:00:00', 'err', ''],
  ])('getFormattedStringDate(%s, %s) -> %s', (dateAsString, dateFormat, output) => {
    expect(getFormattedStringDate(dateAsString, dateFormat)).toBe(output);
  });

  test.each([
    [new Date(2024, 1, 7, 10, 35, 15, 0), 'day' as const, '7'],
    [new Date(2024, 1, 7, 10, 35, 15, 0), 'month' as const, '2'],
    [new Date(2024, 1, 7, 10, 35, 15, 0), 'year' as const, '2024'],
    [new Date('err'), 'month' as const, 'NaN'],
  ])('getDatePartAsString(%s, %s) -> %s', (date, datePart, output) => {
    expect(getDatePartAsString(date, datePart)).toBe(output);
  });
});
