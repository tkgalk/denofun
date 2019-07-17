import curry from "./curry.ts";

/**
 * **keys** returns key names from a provided object
 * @param x input object
 * @returns an array of key names
 */
function keys(x: object): any[] {
    return Object.keys(x);
}

export default curry(keys);
