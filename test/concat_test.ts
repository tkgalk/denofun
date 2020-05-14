import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

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
