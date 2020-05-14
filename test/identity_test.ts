import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import identity from "../lib/identity.ts";

Deno.test({
  name: "identity",
  fn(): void {
    assertEquals(identity(1), 1);
    assertEquals(identity(null), null);
  },
});
