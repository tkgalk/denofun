import { assertEquals } from "../deps.ts";

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
