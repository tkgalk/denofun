/**
 * **pluck** takes an array of objects and a property name and returns an array containing the named property of each object
 * @param key property's key name
 * @param xs input object
 * @returns the list of values for a given key from each of the objects
 */
export default function pluck(
  key: string,
  xs: Array<{ [key: string]: any }>,
): any {
  const result = [];
  for (const x in xs) {
    if (xs[x].hasOwnProperty(key)) {
      result.push(xs[x][key]);
    }
  }
  return result;
}
