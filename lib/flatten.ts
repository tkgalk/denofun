import curry from "./curry.ts";

/**
 * **flatten** takes an array of elements and flattens it until all elements are on the root-level (`flat(Infinity)`)
 * @param xs array to be flattened
 * @returns a flattened array
 */
function flatten<T>(xs: T[]): T[] {
    return xs.flat(Infinity);
}

export default curry(flatten);