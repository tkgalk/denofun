/**
 * **partition** runs predicate on every element of input array and returns a tuple of
 * two arrays: one where predicate returns `true`, one where predicate returns `false`
 * @param fn predicate
 * @param xs input array
 * @returns tuple of two array
 */
export default function partition<A>(
  fn: (x: A) => boolean,
  xs: A[],
): [A[], A[]] {
  const left: A[] = [];
  const right: A[] = [];
  for (const x of xs) {
    if (fn(x)) {
      left.push(x);
    } else {
      right.push(x);
    }
  }
  return [left, right];
}
