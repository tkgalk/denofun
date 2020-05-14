import equals from "./equals.ts";

/**
 * **includes** checks if an element exists in a string or array (including objects)
 * @param x element to search for
 * @param xs list of elements or a string to be search
 * @returns true if found, false if not
 */
export default function includes<A>(x: string, xs: string | A[]): boolean;
export default function includes<A>(x: A, xs: A[]): boolean;
export default function includes<A>(x: string | A, xs: string | A[]): boolean {
  if (typeof (x) === "object" && typeof (xs) !== "string") {
    return xs.some((y) => equals(x, y));
  }

  return Array.from(xs as string).includes(x as string);
}
