/**
 * **curry** returns a curried version of the provided n-arity function, it will return new
 * 1-arity functions until all arguments are supplied
 * @param fn function to be curried
 * @returns curried version of the provided function
 */
export default function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return function(a) {
            return curried(...[...args, a]);
        }
    }
}
