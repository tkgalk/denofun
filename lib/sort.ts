/**
 * **sort** performs a sorting of array or string via provided sorting function,
 * sorting function has to accept two arguments and return postive number if first argument
 * is bigger than second, 0 if equal and negative number if lesser
 * @param fn a sorting function, has to accept two arguments and return negative number, 0 or positive number
 * @param xs array or string to be sorted
 * @returns a sorted array or string
 */
export default function sort<A>(fn: (a: A, b: A) => number, xs: A[]): A[] {
  return [...xs].sort(fn);
}
