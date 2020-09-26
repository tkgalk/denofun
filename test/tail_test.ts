import { assertEquals } from "../deps.ts";

import tail from "../lib/tail.ts";

Deno.test({
  name: "tail",
  fn(): void {
    assertEquals(tail([]), []);
    assertEquals(tail(["a", "b", "c"]), ["b", "c"]);
    assertEquals(tail(["c", "a", 1]), ["a", 1]);
    assertEquals(tail("hello"), "ello");
    assertEquals(tail([[], "w"]), ["w"]);
  },
});
