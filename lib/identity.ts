import curry from "./curry.ts";

function identity(x) {
    return x;
}

export default curry(identity);
