import { assertEquals } from "../deps.ts";

import identity from "../lib/identity.ts";

Deno.test({
  name: "identity",
  fn(): void {
    assertEquals(identity(1), 1);
    assertEquals(identity(null), null);
  },
});
