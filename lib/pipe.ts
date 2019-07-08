import curry from "./curry.ts";

function pipe(...fns) {
    return fns.reduce((f, g) => (...args) => g(f(...args)));
}

export default curry(pipe);
