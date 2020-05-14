/**
 * **concat** adds two arrays or strings together
 * @param a first element
 * @param b second element
 * @returns concatenated array or string
 */
export default function concat(a: string, b: string): string;
export default function concat<A, B>(
  a: A[],
  b: B[],
): (A | B)[];
export default function concat<A, B>(a: A[] | string, b: B[] | string) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  return [...a, ...b];
}
