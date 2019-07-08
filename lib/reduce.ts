import curry from "./curry.ts";

function reduce(fn, def, xs: any[]) {
    return xs.reduce(fn, def);
}

export default curry(reduce);
