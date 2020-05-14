/**
 * **groupBy** accepts a selector function and a list of elements, the elements will be grouped by the return value of the selector function
 * @param fn selector function, whatever is returned is used to group the keys of the returned object
 * @param arr the list of elements to be sorted
 * @returns a object with elements grouped by preferred key
 */
export default function groupBy<A>(fn: (x: A) => any, arr: A[]) {
  const result: { [key: string]: any } = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}
