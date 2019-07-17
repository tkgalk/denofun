import curry from "./curry.ts";

/**
 * **identity** returns the provided element, otherwise does nothing
 * @param x supplied element
 * @returns x supplied element
 */
function identity<T>(x: T): T {
    return x;
}

export default curry(identity);
