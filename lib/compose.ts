/**
 * **compose** takes a list of functions and does right-to-left function composition
 * @param fns a list of functions to compose
 * @returns a new function composed from the provided functions
 */
export default function compose(...fns: any[]) {
  return fns.reduceRight((f, g) => (...args: any) => g(f(...args)));
}
