import { Lens } from "./lens.ts";

/**
 * **set** uses a provided lens, copies the provided object with a changed value
 * @param lens {Lens} the lens that will be used
 * @param obj the object to be copied with the changed data
 * @param value the value to be used by the lens
 */
export default function set<T, V>(lens: Lens<T,V>, obj: T, value: V): T {
    return lens.setter(obj, value);
}
