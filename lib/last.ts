/**
 * **last** accepts a list of items (or a string) and returns the last element (or character)
 * @param xs elements that function will be applied to
 * @returns the last element of the array
 */
export default function last(xs: string): string;
export default function last<A>(xs: A[]): A;
export default function last<A>(xs: string | A[]): string | A {
  return xs[xs.length - 1];
}
