import { assertEquals } from "../deps.ts";

import memoize from "../lib/memoize.ts";

function double(n: number) {
  return n * 2;
}

Deno.test({
  name: "memoize",
  fn(): void {
    assertEquals(double(0), memoize(double)(0));
    assertEquals(double(2), memoize(double)(2));
    assertEquals(double(8), memoize(double)(8));
    assertEquals(double(12), memoize(double)(12));
  },
});
