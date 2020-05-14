/**
 * **identity** returns the provided element, otherwise does nothing
 * @param x supplied element
 * @returns x supplied element
 */
export default function identity<T>(x: T): T {
  return x;
}
