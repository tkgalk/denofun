/**
 * **flatten** takes an array of elements and flattens it by one level
 * @param xs array to be flattened
 * @returns a flattened array
 */
export default function flatten<A>(xs: A[]): A[] {
    return xs.flat();
}
