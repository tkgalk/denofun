import { assertEquals } from "../deps.ts";

import last from "../lib/last.ts";

Deno.test({
  name: "last",
  fn(): void {
    assertEquals(last(["a", "b", "c"]), "c");
    assertEquals(last("hello world"), "d");
    assertEquals(last([1, "test", { make: "Toyota" }]), { make: "Toyota" });
  },
});
