import { assertEquals } from "../deps.ts";

import reduce from "../lib/reduce.ts";

function add(a: number, b: number) {
  return a + b;
}

Deno.test({
  name: "reduce",
  fn(): void {
    assertEquals(reduce(add, 0, [1, 2, 5]), 8);
    assertEquals(reduce(add, 0, []), 0);
  },
});
