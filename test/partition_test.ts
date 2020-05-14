import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";
import partition from "../lib/partition.ts";

Deno.test({
  name: "partition",
  fn(): void {
    assertEquals(
      partition((x) => x % 3 === 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      [
        [0, 3, 6, 9],
        [1, 2, 4, 5, 7, 8],
      ],
    );
  },
});
