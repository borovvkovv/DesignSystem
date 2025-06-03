import { describe, expect, test } from 'vitest';
import {
  addOrReplaceItemsInArray,
  equalsOrIncludes,
  findItemIndexInArray,
  getArray,
  getEnumRecordKeys,
  getFirst,
  getIndexByItem,
  isArrayEquals,
  isArrayIncludesObject,
  mapEnumRecordToArray,
  mergeArrays,
  removeItemFromArray,
  removeItemFromArrayByModel,
  removeItemsInArray,
  replaceItemInArray,
  replaceItemInArrayByIndex,
} from '@/utils/array';

enum MockKeys {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}
type MockObj = Partial<Record<MockKeys, string>>;
const mockObjA: MockObj = { [MockKeys.A]: 'a' };
const mockObjB: MockObj = { [MockKeys.B]: 'b' };
const mockObjC: MockObj = { [MockKeys.C]: 'c' };
const mockObjD: MockObj = { [MockKeys.D]: 'd' };
const mockObjEmpty: MockObj = {};
const mockObjAB: MockObj = { ...mockObjA, ...mockObjB };
const mockObjAD: MockObj = { ...mockObjA, ...mockObjD };

describe('Библиотка array', () => {
  test.each([
    [9, -5, [1, 2, 3], [9, 1, 2, 3]],
    [9, -1, [1, 2, 3], [9, 1, 2, 3]],
    [9, 0, [1, 2, 3], [9, 2, 3]],
    [9, 4, [1, 2, 3], [1, 2, 3, 9]],
    [9, 5, [1, 2, 3], [1, 2, 3, 9]],
    [9, 0, [-1], [9]],
    [9, 0, [1], [9]],
    [9, 0, [], [9]],
  ])('replaceItemInArrayByIndex(%i, %i, %s) -> %s', (item, index, array, output) => {
    expect(replaceItemInArrayByIndex(item, index, array)).toStrictEqual(output);
  });

  test.each([
    [1, -1, [1, 2], [2, 1]],
    [0, 1, [1, 2], [2, 1]],
    [0, 0, [1, 2], [1, 2]],
    [1, 0, [1, 2], [1, 2]],
    [1, 1, [1, 2], [1, 2]],
    [0, 1, [1], [1]],
    [0, 1, [], []],
  ])('replaceItemInArray(%i, %i, %s) -> %s', (sourceIndex, indexBeforeNewPlace, array, output) => {
    expect(replaceItemInArray(sourceIndex, indexBeforeNewPlace, array)).toStrictEqual(output);
  });

  test.each([
    [mockObjB, [mockObjA, mockObjB], true],
    [mockObjC, [mockObjA, mockObjB], false],
    [mockObjEmpty, [mockObjA, mockObjB], false],
    [mockObjA, [], false],
    [mockObjEmpty, [], false],
  ])('isArrayIncludesObject(%s, %s) -> %s', (object, array, output) => {
    expect(isArrayIncludesObject(object, array)).toBe(output);
  });

  test.each([
    [[mockObjA, mockObjB], [mockObjA, mockObjB], true],
    [[mockObjB, mockObjA], [mockObjA, mockObjB], false],
    [[mockObjA, mockObjB, mockObjC], [mockObjA, mockObjB], false],
    [[mockObjA, mockObjB], [mockObjA, mockObjB, mockObjC], false],
    [[mockObjA, mockObjB], [], false],
    [[], [mockObjA, mockObjB], false],
    [[], [], true],
  ])('isArrayEquals(%s, %s) -> %s', (array1, array2, output) => {
    expect(isArrayEquals(array1, array2)).toBe(output);
  });

  test.each([
    [[1, 2, 3], 0, [2, 3]],
    [[1, 2, 3], 1, [1, 3]],
    [[1, 2, 3], 2, [1, 2]],
    [[1, 2, 3], 3, [1, 2, 3]],
    [[1], 0, []],
    [[], 0, []],
  ])('removeItemFromArray(%s, %s) -> %s', (array, index, output) => {
    expect(removeItemFromArray(array, index)).toStrictEqual(output);
  });

  test.each([
    [mockObjA, [mockObjA, mockObjA, mockObjB], 0],
    [mockObjB, [mockObjA, mockObjA, mockObjB], 2],
    [mockObjC, [mockObjA, mockObjA, mockObjB], -1],
    [mockObjA, [], -1],
    [mockObjEmpty, [mockObjA, mockObjB], -1],
    [mockObjEmpty, [], -1],
  ])('getIndexByItem(%s, %s) -> %s', (item, array, output) => {
    expect(getIndexByItem(item, array)).toBe(output);
  });

  test.each([
    [[mockObjA, mockObjA, mockObjB], MockKeys.A, mockObjA.A, [mockObjA, mockObjB]],
    [[mockObjA, mockObjA, mockObjB], MockKeys.B, mockObjB.B, [mockObjA, mockObjA]],
    [[mockObjA, mockObjB], MockKeys.D, mockObjD.D, [mockObjA, mockObjB]],
    [[mockObjA, mockObjB, mockObjC], MockKeys.A, mockObjB.B, [mockObjA, mockObjB, mockObjC]],
    [[mockObjA, mockObjB, mockObjC], MockKeys.B, mockObjA.A, [mockObjA, mockObjB, mockObjC]],
    [[], MockKeys.A, mockObjA.A, []],
  ])('removeItemFromArrayByModel(%s, %s, %s) -> %s', (array, key, value, output) => {
    expect(removeItemFromArrayByModel(array, key, value)).toStrictEqual(output);
  });

  test.each([
    [[1, 2, 3], 1],
    [[], undefined],
    [[1], 1],
  ])('getFirst(%s, %s) -> %s', (array, output) => {
    expect(getFirst(array)).toBe(output);
  });

  test.each([
    [mockObjAB, [mockObjA.A, mockObjB.B]],
    [mockObjA, [mockObjA.A]],
    [mockObjEmpty, []],
  ])('mapEnumRecordToArray(%s) -> %s', (record, output) => {
    expect(mapEnumRecordToArray<string, string>(record)).toStrictEqual(output);
  });

  test.each([
    [mockObjAB, [MockKeys.A, MockKeys.B]],
    [mockObjA, [MockKeys.A]],
    [mockObjEmpty, []],
  ])('getEnumRecordKeys(%s) -> %s', (record, output) => {
    expect(getEnumRecordKeys<string, string>(record)).toStrictEqual(output);
  });

  test.each([
    [[1, 2, 3], 3, true],
    [[1, 2, 3], 4, false],
    [1, 1, true],
    [1, 4, false],
    [[], 1, false],
  ])('equalsOrIncludes(%s) -> %s', (arrayOrItem, item, output) => {
    expect(equalsOrIncludes(arrayOrItem, item)).toBe(output);
  });

  test.each([
    [
      [1, 2],
      [1, 2],
    ],
    [1, [1]],
    [[], []],
  ])('getArray(%s) -> %s', (array, output) => {
    expect(getArray(array)).toStrictEqual(output);
  });

  test.each([
    {
      newItems: [mockObjAD],
      array: [mockObjAB, mockObjC],
      compareItemsPropertyKey: MockKeys.A,
      output: [mockObjAD, mockObjC],
    },
    {
      newItems: [mockObjAD],
      array: [mockObjA, mockObjB, mockObjC],
      compareItemsPropertyKey: MockKeys.D,
      output: [mockObjA, mockObjB, mockObjC, mockObjAD],
    },
    {
      newItems: [mockObjAD],
      array: [],
      compareItemsPropertyKey: MockKeys.A,
      output: [mockObjAD],
    },
    {
      newItems: [mockObjA],
      array: [mockObjAB, mockObjAD],
      compareItemsPropertyKey: MockKeys.A,
      output: [mockObjA, mockObjAD],
    },
  ])(
    'addOrReplaceItemsInArray($newItems, $array, $compareItemsPropertyKey) -> $output',
    ({ newItems, array, compareItemsPropertyKey, output }) => {
      expect(addOrReplaceItemsInArray(newItems, array, compareItemsPropertyKey)).toStrictEqual(output);
    },
  );

  test.each([
    [[mockObjAD], [mockObjAB, mockObjC], MockKeys.A, [mockObjC]],
    [[mockObjAD], [mockObjAB, mockObjC], MockKeys.D, [mockObjAB, mockObjC]],
    [[mockObjA], [mockObjAB, mockObjAD], MockKeys.A, [mockObjAD]],
    [[mockObjAB], [mockObjAD, mockObjAB], MockKeys.A, [mockObjAB]],
    [[], [mockObjA, mockObjB], MockKeys.A, [mockObjA, mockObjB]],
    [[mockObjA], [], MockKeys.A, []],
  ])('removeItemsInArray(%s, %s, %s) -> %s', (newItems, array, compareItemsPropertyKey, output) => {
    expect(removeItemsInArray(newItems, array, compareItemsPropertyKey)).toStrictEqual(output);
  });

  test.each([
    [[mockObjAB, mockObjAD], mockObjAD, MockKeys.A, 0],
    [[mockObjAB, mockObjC], mockObjC, MockKeys.C, 1],
    [[mockObjA, mockObjB], mockObjC, MockKeys.C, -1],
    [[], mockObjAD, MockKeys.D, -1],
  ])('findItemIndexInArray(%s, %s, %s) -> %s', (array, item, compareItemsPropertyKey, output) => {
    expect(findItemIndexInArray(array, item, compareItemsPropertyKey)).toStrictEqual(output);
  });

  test.each([
    { array1: [1, 2], array2: [1, 2, 3], output: [1, 2, 3] },
    { array1: [1, 2, 3], array2: [1, 2], output: [1, 2, 3] },
    { array1: [1, 2, 3], array2: [4, 5, 6], output: [1, 2, 3, 4, 5, 6] },
    { array1: [1, 2, 3], array2: [1, 2, 3], output: [1, 2, 3] },
    { array1: [1, 2, 3], array2: [], output: [1, 2, 3] },
    { array1: [], array2: [1, 2, 3], output: [1, 2, 3] },
    { array1: [], array2: [], output: [] },

    {
      array1: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
      array2: [{ d: 'd' }, { e: 'e' }, { f: 'f' }],
      output: [{ a: 'a' }, { b: 'b' }, { c: 'c' }, { d: 'd' }, { e: 'e' }, { f: 'f' }],
    },
    {
      array1: [{ d: 'd' }, { e: 'e' }, { f: 'f' }],
      array2: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
      output: [{ d: 'd' }, { e: 'e' }, { f: 'f' }, { a: 'a' }, { b: 'b' }, { c: 'c' }],
    },
    {
      array1: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
      array2: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
      output: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
    },
    {
      array1: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
      array2: [{ c: 'c' }, { a: 'a' }, { b: 'b' }],
      output: [{ a: 'a' }, { b: 'b' }, { c: 'c' }],
    },
    { array1: [{ a: 'a' }, { b: 'b' }, { c: 'c' }], array2: [], output: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
    { array1: [], array2: [{ a: 'a' }, { b: 'b' }, { c: 'c' }], output: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
    { array1: [], array2: [], output: [] },
  ])('mergeArrays(%s, %s) -> %s', ({ array1, array2, output }) => {
    expect(mergeArrays<any>(array1, array2)).toStrictEqual(output);
  });
});
