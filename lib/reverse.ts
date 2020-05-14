/**
 * **reverse** reverses the order of the elements in array or string
 * @param x array or string to be reversed
 * @returns a reversed array or string
 */
export default function reverse(x: string): string;
export default function reverse<A>(x: A[]): A[];
export default function reverse<A>(x: string | A[]): A[] | string | undefined {
  if (Array.isArray(x)) {
    return x.reverse();
  }

  if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
