import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import has from "../lib/has.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };

Deno.test({
  name: "has",
  fn(): void {
    assertEquals(has("make", car), true);
    assertEquals(has("transmission", car), false);
  },
});
