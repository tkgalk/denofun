import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import sort from "../lib/sort.ts";

function sortNumbers(a: number, b: number) {
  if (a > b) {
    return 1;
  }

  if (a == b) {
    return 0;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}

function sortStringsByLength(a: string, b: string) {
  if (a.length > b.length) {
    return 1;
  }

  if (a.length == b.length) {
    return 0;
  }

  if (a.length < b.length) {
    return -1;
  }

  return 0;
}

Deno.test({
  name: "sort",
  fn(): void {
    const numbers = [1, 6, 2, 3, 5];
    Object.freeze(numbers);

    const strings = ["a", "bb", "ccccc", "ddd"];
    Object.freeze(strings);

    assertEquals(sort(sortNumbers, numbers), [1, 2, 3, 5, 6]);
    assertEquals(
      sort(sortStringsByLength, strings),
      ["a", "bb", "ddd", "ccccc"],
    );
    assertEquals(sort(sortNumbers, []), []);
    assertEquals(sort((a, b) => a - b, [1, 2, 5, 3, 2]), [1, 2, 2, 3, 5]);
  },
});
