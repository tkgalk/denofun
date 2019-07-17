import curry from "./curry.ts";

/**
 * **head** returns the first element of an array or a string
 * @param xs input array
 * @returns first element of an array or string
 */
function head<T>(xs: T[] | string): T | string {
    return xs[0];
}

export default curry(head);
