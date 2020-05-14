/**
 * **reduce** applies a reductor function to all elements of the array while
 * keeping the aggragete of previous iterations; returns a single value
 * @param fn a reductor function
 * @param def default value
 * @param xs input array
 * @returns a single element (the aggregate/accumulator)
 */
export default function reduce<A, B>(
  fn: (aggr: B, x: A) => B,
  def: B,
  xs: A[],
): B {
  return xs.reduce(fn, def);
}
