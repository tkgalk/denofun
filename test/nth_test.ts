import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import nth from "../lib/nth.ts";

Deno.test({
  name: "nth",
  fn(): void {
    assertEquals(nth(2, [0, 1, 2, 3, 4]), 2);
    assertEquals(nth(4, ["a", "b", "c", "d", "e"]), "e");
    assertEquals(nth(0, []), undefined);
    assertEquals(nth(-2, [0, 2, 4]), 2);
    assertEquals(nth(2, "hello world!"), "l");
    assertEquals(nth(4, "hello world!"), "o");
    assertEquals(nth(0, ""), undefined);
    assertEquals(nth(-2, "hello world!"), "d");
    assertEquals(nth(12, "hello world!"), undefined);
    assertEquals(nth(-14, "hello world!"), undefined);
  },
});
