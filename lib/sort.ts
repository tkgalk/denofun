/**
 * **sort** performs a sorting of array or string via provided sorting function,
 * sorting function has to accept two arguments and retrun 1 if first argument
 * is bigger than second, 0 if equal and -1 if lesser
 * @param fn a sorting function, has to accept two arguments and return -1, 0 or 1
 * @param xs array or string to be sorted
 * @returns a sorted array or string
 */
export default function sort<T>(fn: (a: T, b: T) => -1 | 0 | 1, xs: T[]): T[] {
    return xs.sort(fn);
}
