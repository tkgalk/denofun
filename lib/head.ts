/**
 * **head** returns the first element of an array or a string
 * @param xs input array
 * @returns first element of an array or string
 */
export default function head(xs: string): string;
export default function head<A>(xs: A[]): A;
export default function head<A>(xs: A[] | string): A | string {
  return xs[0];
}
