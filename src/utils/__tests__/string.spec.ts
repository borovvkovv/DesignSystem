import { describe, expect, test } from 'vitest';
import {
  isEmail,
  lowercaseFirst,
  pad,
  removePxMeasureFromValue,
  sortISelectItems,
  uppercaseFirst,
} from '@/utils/string';
import type { ISelectItem } from '@/components/selects/models';
import { SortType } from '@/utils/compare';

describe('Библиотека string', () => {
  test.each([
    [1, '01'],
    [5, '05'],
    [0, '00'],
    [18, '18'],
    [345, '345'],
  ])('Pad test (%s => %s)', (input, output) => {
    expect(pad(input)).toBe(output);
  });

  test.each([
    ['sdfrDrgsE', 'SdfrDrgsE'],
    ['SDFsdf', 'SDFsdf'],
    ['SDF', 'SDF'],
    ['', ''],
  ])('Uppercase first letter test (%s => %s)', (input, output) => {
    expect(uppercaseFirst(input)).toBe(output);
  });

  test.each([
    ['sdfrDrgsE', 'sdfrDrgsE'],
    ['SDFsdf', 'sDFsdf'],
    ['SDF', 'sDF'],
    ['', ''],
  ])('Lowercase first letter test (%s => %s)', (input, output) => {
    expect(lowercaseFirst(input)).toBe(output);
  });

  test.each([
    ['sdfrDrgsE', false],
    ['SDFsdf', false],
    ['SDF', false],
    ['', false],
    ['test_test.test@test.ru', true],
    ['TEST-Test.test@test.com', true],
    ['TESTTest.test@test.secong.com', true],
    ['1TESTTest.test@test.secong.com', true],
    ['TESTTes123t.123test@test.secong.com', true],
    ['!TESTTes123t.123test@test.secong.com', true],
  ])('isEmail test (%s => %s)', (input, output) => {
    expect(isEmail(input)).toBe(output);
  });

  test.each([
    [
      SortTestArray,
      SortType.Asc,
      [
        { title: 'alpha', value: 'zzz' },
        { title: 'Alpha', value: 'Alpha' },
        { title: 'Beta', value: 'Beta' },
        { title: 'beta', value: 'beta' },
        { title: 'Charly', value: 'Charly' },
      ],
    ],
    [
      SortTestArray,
      SortType.Desc,
      [
        { title: 'Charly', value: 'Charly' },
        { title: 'Beta', value: 'Beta' },
        { title: 'beta', value: 'beta' },
        { title: 'alpha', value: 'zzz' },
        { title: 'Alpha', value: 'Alpha' },
      ],
    ],
  ])('sortISelectItems test (%s, %s) => (%s)', (input, option, output) => {
    expect(sortISelectItems(input, option)).toStrictEqual(output);
  });

  test.each([
    ['158px', 158],
    ['158PX', 158],
    ['158', 158],
    ['0', 0],
  ])('removePxMeasureFromValue test (%s => %s)', (input, output) => {
    expect(removePxMeasureFromValue(input)).toBe(output);
  });
});

const SortTestArray: ISelectItem[] = [
  { title: 'Beta', value: 'Beta' },
  { title: 'alpha', value: 'zzz' },
  { title: 'Alpha', value: 'Alpha' },
  { title: 'Charly', value: 'Charly' },
  { title: 'beta', value: 'beta' },
];
