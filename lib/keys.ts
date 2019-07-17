import curry from "./curry.ts";

function keys(x: object): any[] {
    return Object.keys(x);
}

export default curry(keys);
