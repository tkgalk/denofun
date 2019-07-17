import curry from "./curry.ts";

/**
 * **map** applies a function to each element of the array, returns the array of results
 * @param fn function that will be applied on each element
 * @param xs elements that function will be applied to
 * @returns new array with results of the map
 */
function map<T, R>(fn: (x: T) => R, xs: T[]): R[] {
    return xs.map(fn);
}

export default curry(map);
