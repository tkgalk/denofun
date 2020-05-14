/**
 * **prop** returns a value from object under a specific key
 * @param key property's key name
 * @param obj input object
 * @returns value of object's `key` property
 */
export default function prop(key: string, obj: { [key: string]: any }): any {
  return obj[key];
}
