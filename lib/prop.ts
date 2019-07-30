import curry from "./curry.ts";

/**
 * **prop** returns a value from object under a specific key
 * @param key property's key name 
 * @param obj input object
 * @returns value of object's `key` property
 */
function prop(key: string, obj: object): any {
    return obj[key];
}

export default curry(prop);
