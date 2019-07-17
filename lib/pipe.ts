import curry from "./curry.ts";

/**
 * **pipe** takes a list of functions and does left-to-right function composition
 * @param fns a list of functions to pipe
 * @returns a new function composed from the provided functions
 */
function pipe(...fns) {
    return fns.reduce((f, g) => (...args) => g(f(...args)));
}

export default curry(pipe);
