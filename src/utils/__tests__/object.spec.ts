import { describe, expect, test } from 'vitest';
import { isObject, isArray, mergeDeep, fillEmptyProperties } from '@/utils/object';

-describe('Библиотека object', () => {
  test.each([
    [{ a: 'a' }, true],
    [{}, true],
    [undefined, false],
    [null, false],
    [NaN, false],
    [new Date(), true],
    [[], false],
    [[{ a: 'a' }], false],
    ['str', false],
    ['', false],
    [0, false],
  ])('isObject(%s) -> %s', (item, output) => {
    expect(isObject(item)).toBe(output);
  });

  test.each([
    [{ a: 'a' }, false],
    [{}, false],
    [undefined, false],
    [null, false],
    [NaN, false],
    [new Date(), false],
    [[], true],
    [[{ a: 'a' }], true],
    ['str', false],
    ['', false],
    [0, false],
  ])('isArray(%s) -> %s', (item, output) => {
    expect(isArray(item)).toBe(output);
  });

  const testObj1 = { a: { b: { c: { d: { e: 'f' } } } } };
  const testObj2 = { a: { b: { c: { d: { e: 'g' } } } } };

  test.each([
    { target: { a: 'a' }, source: { b: 'b' }, output: { a: 'a', b: 'b' } },
    { target: { a: 'a' }, source: { b: null }, output: { a: 'a', b: null } },
    { target: { a: 'a' }, source: { a: 'b' }, output: { a: 'b' } },
    { target: { a: 'a' }, source: {}, output: { a: 'a' } },
    { target: {}, source: { a: 'a' }, output: { a: 'a' } },
    { target: {}, source: {}, output: {} },

    { target: { b: null }, source: { b: 5 }, output: { b: 5 } },
    { target: { b: 5 }, source: { b: null }, output: { b: null } },

    { target: { c: [1, 2, 3] }, source: { c: [4, 5, 6] }, output: { c: [4, 5, 6] } },
    { target: { c: [1, 2, 3] }, source: { c: [] }, output: { c: [] } },
    { target: { c: [] }, source: { c: [{ a: 'a' }] }, output: { c: [{ a: 'a' }] } },

    { target: testObj1, source: testObj2, output: testObj2 },
  ])('mergeDeep(%s, %s) -> %s', ({ target, source, output }) => {
    expect(mergeDeep(target, source)).toStrictEqual(output);
  });

  const testObjWithNull = { a: { b: { c: { d: { e: null } } } } };
  const testObjFilled = { a: { b: { c: { d: { e: 'e' } } } } };

  test.each([
    { withEmpty: testObjWithNull, filler: testObjFilled, output: testObjFilled },
    { withEmpty: {}, filler: {}, output: {} },
  ])('Recursive fillEmptyProperties(%s, %s) -> %s', ({ withEmpty, filler, output }) => {
    expect(fillEmptyProperties(withEmpty, filler)).toStrictEqual(output);
  });

  test.each([
    { withEmpty: { a: 'a' }, filler: {}, output: { a: 'a' } },
    { withEmpty: {}, filler: { a: 'a' }, output: { a: 'a' } },

    { withEmpty: { b: 0 }, filler: { b: 5 }, output: { b: 0 } },
    { withEmpty: { b: NaN }, filler: { b: 5 }, output: { b: NaN } },
    { withEmpty: { b: 5 }, filler: { b: NaN }, output: { b: 5 } },
    { withEmpty: { b: 5 }, filler: { c: 6 }, output: { b: 5, c: 6 } },

    { withEmpty: { c: [1, 2] }, filler: { c: [2, 3] }, output: { c: [1, 2, 3] } },
    { withEmpty: { c: [1, 2] }, filler: { c: [1, 2, 3] }, output: { c: [1, 2, 3] } },
    { withEmpty: { c: [1, 2, 3] }, filler: { c: [1, 2] }, output: { c: [1, 2, 3] } },
    { withEmpty: { c: [1, 2, 3] }, filler: { c: [4, 5, 6] }, output: { c: [1, 2, 3, 4, 5, 6] } },
    { withEmpty: { c: [1, 2, 3] }, filler: {}, output: { c: [1, 2, 3] } },
    { withEmpty: {}, filler: { c: [1, 2, 3] }, output: { c: [1, 2, 3] } },
    { withEmpty: { c: [] }, filler: { c: [1, 2, 3] }, output: { c: [1, 2, 3] } },
    { withEmpty: { c: [1, 2, 3] }, filler: { c: [] }, output: { c: [1, 2, 3] } },
    {
      withEmpty: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
      filler: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
      output: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
    },
    {
      withEmpty: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
      filler: { c: [{ c: 'c' }, { a: 'a' }, { b: 'b' }] },
      output: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
    },
    {
      withEmpty: { c: [{ a: 'a' }, { b: 'b' }] },
      filler: { c: [{ b: 'b' }, { c: 'c' }] },
      output: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
    },
    {
      withEmpty: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }] },
      filler: { c: [{ d: 'd' }, { e: 'e' }, { f: 'f' }] },
      output: { c: [{ a: 'a' }, { b: 'b' }, { c: 'c' }, { d: 'd' }, { e: 'e' }, { f: 'f' }] },
    },
    { withEmpty: { c: [] }, filler: { c: [{ a: 'a' }] }, output: { c: [{ a: 'a' }] } },
    { withEmpty: { c: [{ a: 'a' }] }, filler: { c: [] }, output: { c: [{ a: 'a' }] } },
  ])('fillEmptyProperties(%s, %s) -> %s', ({ withEmpty, filler, output }) => {
    expect(fillEmptyProperties<any>(withEmpty, filler)).toStrictEqual(output);
  });
});
