import { assertEquals } from "../deps.ts";

import prop from "../lib/prop.ts";

const car = { make: "Alfa Romeo", model: "Giulia" };

Deno.test({
  name: "prop",
  fn(): void {
    assertEquals(prop("make", car), "Alfa Romeo");
    assertEquals(prop("wheels", car), undefined);
  },
});
