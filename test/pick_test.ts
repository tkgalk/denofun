import { assertEquals } from "../deps.ts";

import pick from "../lib/pick.ts";

const a = {
  a: 1,
  b: 2,
  c: 3,
};

Deno.test({
  name: "pick",
  fn(): void {
    assertEquals(pick(["b", "c"], a), { b: 2, c: 3 });
    assertEquals(pick([], a), {});
    assertEquals(pick(["a", "b", "c"], a), { a: 1, b: 2, c: 3 });
  },
});
