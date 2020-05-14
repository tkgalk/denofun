import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import split from "../lib/split.ts";

Deno.test({
  name: "split",
  fn(): void {
    assertEquals(
      split("/", "/usr/local/bin/deno"),
      ["", "usr", "local", "bin", "deno"],
    );
    assertEquals(
      split("", "hello world!"),
      ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"],
    );
    assertEquals(split(".", ""), [""]);
  },
});
