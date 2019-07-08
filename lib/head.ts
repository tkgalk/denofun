import curry from "./curry.ts";

function head(xs: any[] | string): any[] | string {
    return xs[0];
}

export default curry(head);
