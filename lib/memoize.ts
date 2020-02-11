/**
 * **memoize** returns a function that remembers the result of a function with a given parameters so it can cache the previous results
 * @param fn function which results can be cached
 * @returns function returning cached results (after first call)
 */
export default function memoize<T>(fn: (...xs: any[]) => T): (...xs: any[]) => T {
    const cache = new Map();
    return (...xs: any[]): T => {
        const args = JSON.stringify(xs);

        if (cache.has(args)) {
            return cache.get(args);
        }

        const result = fn.apply(null, xs);
        cache.set(args, result);
        return result;
    };
}
