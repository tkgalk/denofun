import curry from "./curry.ts";

/**
 * **nth** returns element under given index, if negative index is provided element at (length + index) is returned
 * @param i index
 * @param xs a list of elements or a string 
 * @returns an element or a character
 */
function nth(i: number, xs: string | any[]): string | any[] {
    if (i < 0) {
        return xs[xs.length + i];
    }

    return xs[i];
}

export default curry(nth);
