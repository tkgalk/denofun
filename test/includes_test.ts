import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import includes from "../lib/includes.ts";

Deno.test({
  name: "includes",
  fn(): void {
    assertEquals(includes("a", ["a", "b", "c"]), true);
    assertEquals(includes(3, [1, 2, 3, 4, 5]), true);
    assertEquals(includes("a", "car"), true);
    assertEquals(
      includes({ name: "Fred" }, [{ name: "Fred" }, { name: "George" }]),
      true,
    );
  },
});
