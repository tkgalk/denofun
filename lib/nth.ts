/**
 * **nth** returns element under given index, if negative index is provided element at (length + index) is returned
 * @param i index
 * @param xs a list of elements or a string
 * @returns an element or a character
 */
export default function nth(i: number, xs: string): string;
export default function nth<A>(i: number, xs: A[]): A;
export default function nth<A>(i: number, xs: string | A[]): string | A {
  if (i < 0) {
    return xs[xs.length + i];
  }

  return xs[i];
}
