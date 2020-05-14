import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import flatten from "../lib/flatten.ts";

Deno.test({
  name: "flatten",
  fn(): void {
    assertEquals(flatten([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
    assertEquals(flatten([1, 2, [3], [4, [5, [6]]]]), [1, 2, 3, 4, [5, [6]]]);
    assertEquals(flatten([]), []);
  },
});
