import { assertEquals } from "../deps.ts";

import keys from "../lib/keys.ts";

Deno.test({
  name: "keys",
  fn(): void {
    assertEquals(keys({ a: 1, b: 2 }), ["a", "b"]);
    assertEquals(keys({}), []);
  },
});
