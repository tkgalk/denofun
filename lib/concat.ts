import curry from "./curry.ts";

/**
 * **concat** adds two arrays or strings together
 * @param a first element
 * @param b second element
 * @returns concatenated array or string
 */
function concat<T>(a: T[] | string, b: T[] | string): T[] | string {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    
    return [...<T[]>a, ...<T[]>b];
}

export default curry(concat);
