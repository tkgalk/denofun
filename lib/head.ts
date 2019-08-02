/**
 * **head** returns the first element of an array or a string
 * @param xs input array
 * @returns first element of an array or string
 */
export default function head<T>(xs: T[] | string): T | string {
    return xs[0];
}
