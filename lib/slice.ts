/**
 * **slice** return a given slice of an array or string (wrapper over Array.prototype.slice)
 * @param a start at (inclusive)
 * @param b end at (exclusive)
 * @param xs array or string to slice
 * @returns a subarray of an array or a substring of a string
 */
export default function slice<T>(a: number, b: number, xs: string | T[]) {
  return xs.slice(a, b);
}
