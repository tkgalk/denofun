import curry from "./curry.ts";

function values(x: object): any[] {
    return Object.values(x);
}

export default curry(values);
