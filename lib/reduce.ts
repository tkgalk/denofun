import curry from "./curry.ts";

/**
 * **reduce** applies a reductor function to all elements of the array while
 * keeping the aggragete of previous iterations; returns a single value
 * @param fn a reductor function
 * @param def default value
 * @param xs input array
 * @returns a single element (the aggregate/accumulator)
 */
function reduce<T, R>(fn: (aggr: R, x: T) => R, def: R, xs: T[]): R {
    return xs.reduce(fn, def);
}

export default curry(reduce);
