import curry from "./curry.ts";

/**
 * **reverse** reverses the order of the elements in array or string
 * @param x array or string to be reversed
 * @returns a reversed array or string
 */
function reverse<T>(x: T[] | string): T[] | string {
    if (Array.isArray(x)) {
        return x.reverse();
    }

    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

export default curry(reverse);
