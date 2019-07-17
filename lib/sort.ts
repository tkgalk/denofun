import curry from "./curry.ts";

function sort<T>(fn: (a: T, b: T) => -1 | 0 | 1, xs: T[]): T[] {
    return xs.sort(fn);
}

export default curry(sort);
