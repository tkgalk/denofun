import curry from "./curry.ts";

function map(fn, xs: any[]) {
    return xs.map(fn);
}

export default curry(map);
