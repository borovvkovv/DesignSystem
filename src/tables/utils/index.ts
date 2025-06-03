/**
 * В массив firstArray после каждого n-го элемента кратного mergeAfterNth вставляется очередной подмассив из secondArray длиной mergeAfterNth.
 * ([1,2,3,4], ,[5,6,7,8], 2) => [[1,2],[5,6],[3,4],[7,8]]
 */
export function mergeArrays<T>(firstArray: Array<T>, secondArray: Array<T>, mergeAfterNth: number) {
  let count = 0;
  const newArray: T[][] = [];
  while (count < firstArray.length) {
    newArray.push(firstArray.slice(count, count + mergeAfterNth));
    newArray.push(secondArray.slice(count, count + mergeAfterNth));
    count += mergeAfterNth;
  }

  return newArray;
}
