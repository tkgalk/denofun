import curry from "./curry.ts";

/**
 * **omit** returns a copy of an object but without specified keys
 * @param keys keys to be omitted
 * @param object object to be copied
 * @returns an object without specified keys
 */
function omit(keys: string[], object: object): object {
    let target = {};

    for (let i in object) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(object, i)) continue;

        target[i] = object[i];
    }

    return target;
}

export default curry(omit);
