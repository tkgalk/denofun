import curry from "./curry.ts";

/**
 * **split** splits a string by a given deliminator/separator
 * @param d deliminator/separator
 * @param s string to be split
 * @returns an array of strings
 */
function split(d: string, s: string): string[] {
    return s.split(d);
}

export default curry(split);
