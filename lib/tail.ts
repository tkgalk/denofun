import curry from "./curry.ts";

function tail(xs: any[] | string): any[] | string {
    return xs.slice(1);
}

export default curry(tail);
