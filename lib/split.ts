/**
 * **split** splits a string by a given deliminator/separator
 * @param d deliminator/separator
 * @param s string to be split
 * @returns an array of strings
 */
export default function split(d: string, s: string): string[] {
  return s.split(d);
}
