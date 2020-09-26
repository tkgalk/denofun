export type Lens<T, V> = {
  getter: (data: T) => V;
  setter: (data: T, value: V) => T;
};

/**
 * **lens** lens returns a special lens object that can be used as a function setter/getter
 * @param getterFn
 * @param setterFn
 */
export default function lens<T, V>(
  getterFn: (data: T) => V,
  setterFn: (data: T, value: V) => T,
): Lens<T, V> {
  return {
    getter: getterFn,
    setter: setterFn,
  };
}
