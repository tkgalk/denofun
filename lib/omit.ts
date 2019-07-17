import curry from "./curry.ts";

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
