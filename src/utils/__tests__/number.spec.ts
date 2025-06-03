import { describe, expect, test } from 'vitest';
import { stringToNumber } from '@/utils/number';

describe('Библиотека number', () => {
  test.each([
    ['5', 5],
    ['5.5', 5.5],
    ['5,5', undefined],
    ['.5', 0.5],
    ['notNumber', undefined],
    ['', undefined],
    ['NaN', undefined],
  ])('stringToNumber(%s) -> %s', (str, output) => {
    expect(stringToNumber(str)).toBe(output);
  });
});
