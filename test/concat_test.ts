import { assertEquals } from "../deps.ts";

import concat from "../lib/concat.ts";

Deno.test({
  name: "concat",
  fn(): void {
    assertEquals(concat("hello", "world"), "helloworld");
    assertEquals(
      concat(["a", "b", "c"], ["d", "e", "f"]),
      ["a", "b", "c", "d", "e", "f"],
    );
    assertEquals(concat([], []), []);
    assertEquals(concat("", ""), "");
  },
});
