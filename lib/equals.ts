/**
 * **equals** checks if two values are equal, **warning:** for non-primitives uses JSON parsing
 * @param l first element
 * @param r second element
 * @returns true or false
 */
export default function equals<A>(l: A, r: A): boolean {
  if (typeof l !== "object" && typeof r !== "object") {
    return l === r;
  }

  return JSON.stringify(l) === JSON.stringify(r);
}
