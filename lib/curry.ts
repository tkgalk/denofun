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
