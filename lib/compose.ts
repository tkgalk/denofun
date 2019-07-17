import curry from "./curry.ts";

function compose(...fns) {
    return fns.reduceRight((f, g) => (...args) => g(f(...args)));
}

export default curry(compose);
