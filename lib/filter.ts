import curry from "./curry.ts";

function filter(fn, xs: any[]) {
    return xs.filter(fn);
}

export default curry(filter);
