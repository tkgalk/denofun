import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import map from "../lib/map.ts";

function double(n: number) {
  return n * 2;
}

Deno.test({
  name: "map",
  fn(): void {
    assertEquals(map(double, [1, 2, 3]), [2, 4, 6]);
  },
});
