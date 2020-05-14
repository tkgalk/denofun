import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import head from "../lib/head.ts";

Deno.test({
  name: "head",
  fn(): void {
    assertEquals(head([]), undefined);
    assertEquals(head(["a", "b", "c"]), "a");
    assertEquals(head([1, "a", "c"]), 1);
    assertEquals(head("hello"), "h");
    assertEquals(head([[], "w"]), []);
  },
});
