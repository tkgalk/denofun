/**
 * **tail** returns all elements of the given array or string except the first
 * @param xs input array or string
 * @returns all elements of the input array or string excluding the first element
 */
export default function tail(xs: string): string;
export default function tail<A>(xs: A[]): A[];
export default function tail<A>(xs: string | A[]): string | A[] {
  return xs.slice(1);
}
