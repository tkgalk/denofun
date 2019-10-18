/**
 * **last** accepts a list of items (or a string) and returns the last element (or character)
 * @param xs elements that function will be applied to
 * @returns the last element of the array
 */
export default function last<T extends any>(xs: T[] | string): string | T {
    return xs[xs.length - 1];
}
