import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import keys from "../lib/keys.ts";

Deno.test({
  name: "keys",
  fn(): void {
    assertEquals(keys({ a: 1, b: 2 }), ["a", "b"]);
    assertEquals(keys({}), []);
  },
});
