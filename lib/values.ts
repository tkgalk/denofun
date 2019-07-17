import curry from "./curry.ts";

/**
 * **values** returns values from a provided object
 * @param x input object
 * @returns list of values
 */
function values(x: object): any[] {
    return Object.values(x);
}

export default curry(values);
