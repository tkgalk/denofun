import curry from "./curry.ts";

/**
 * **has** checks if a key exists inside an object (does NOT check the prototype's keys!)
 * @param x name of the key to look up
 * @param y an object to check
 * @returns true or false
 */
function has(x: string, y: Object) {
    return y.hasOwnProperty(x);
}

export default curry(has);
