/**
 * **pipe** takes a list of functions and does left-to-right function composition
 * @param fns a list of functions to pipe
 * @returns a new function composed from the provided functions
 */
export default function pipe(...fns: ((...args: any[]) => any)[]) {
  return fns.reduce((f, g) => (...args) => g(f(...args)));
}
