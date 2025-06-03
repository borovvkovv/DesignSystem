import { mergeArrays } from './array';

export function isObject(item: any): boolean {
  return !!item && typeof item === 'object' && !Array.isArray(item);
}

export function isArray(item: any): boolean {
  return Array.isArray(item);
}

/**
 * Глубокое копирование параметров из объекта source в объект target. Массивы копируются ссылкой.
 * @param target Объект в копию которого будут записываться или перезаписываться параметры из объекта source.
 * @param source Объект, паараметры которого будут записываться в результирующий массив.
 * @returns Результирующий массив, изначально копия target.
 */
export function mergeDeep<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const output: T = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else if (source[key]) {
          output[key as keyof T] = mergeDeep(target[key], source[key] as any);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

/**
 * Заполнение пустых параметров объекта withEmpty параметрами из объекта filler.
 * @param withEmpty Объект в копию которого будут записываться параметры из объекта filler, если его параметры пустые.
 * @param filler Объект чьи парамерты будут записываться в результирующий массив.
 * @returns Результирующий объект, изначально копия withEmpty.
 */
export function fillEmptyProperties<T extends Record<string, any>>(withEmpty: T, filler: T): T {
  const output: T = Object.assign({}, withEmpty);
  if ((isObject(withEmpty) || withEmpty === undefined) && isObject(filler)) {
    Object.keys(filler).forEach((key) => {
      if (isObject(filler[key])) {
        output[key as keyof T] = fillEmptyProperties(withEmpty?.[key], filler[key]);

        return;
      }

      if (isArray(filler[key])) {
        const mergedArray = mergeArrays(output[key as keyof T], filler[key]);
        if (mergedArray) (output[key as keyof T] as Array<any>) = mergedArray;

        return;
      }

      Object.assign(output, { [key]: withEmpty?.[key] ?? filler[key] });
    });
  }
  return output;
}
