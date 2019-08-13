import equals from "./equals.ts";

/**
 * **includes** checks if an element exists in a string or array (including objects)
 * @param x element to search for
 * @param xs list of elements or a string to be search 
 * @returns true if found, false if not
 */
export default function includes(x: string, xs: string | string[]): boolean;
export default function includes<T>(x: T, xs: T[]): boolean;
export default function includes(x: any, xs: any[]): boolean {
    if (typeof(x) === "object" && !Array.isArray(x)) {
        return xs.some(y => equals(x, y));
    }
    return Array.from(xs).includes(x);
}
