/**
 * **filter** runs filter function on every element of array and returns a new
 * array with only those elements for which filter function returned true
 * @param fn filter function
 * @param xs input array to be filtered
 * @returns filtered output array
 */
export default function filter<T>(fn: (x: T) => boolean, xs: T[]): T[] {
    return xs.filter(fn);
}
