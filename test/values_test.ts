import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import values from "../lib/values.ts";

Deno.test({
  name: "values",
  fn(): void {
    assertEquals(values({ a: 1, b: 2 }), [1, 2]);
    assertEquals(values({}), []);
  },
});
