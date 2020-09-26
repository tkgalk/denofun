import { Lens } from "../lib/lens.ts";

/**
 * **view** uses a lens to get value from an object
 * @param lens {Lens} a lens created by _lens_ function
 * @param obj data from which to get the value
 */
export default function view<T, V>(lens: Lens<T, V>, obj: T): V {
    return lens.getter(obj);
}
