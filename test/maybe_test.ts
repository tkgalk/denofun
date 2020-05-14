import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import maybe, { mapMaybe } from "../lib/maybe.ts";

Deno.test({
  name: "maybe",
  fn(): void {
    assertEquals(maybe().get(), undefined);
    assertEquals(maybe(undefined).get(), undefined);
    assertEquals(maybe(null).get(), undefined);
    assertEquals(maybe().default(1), 1);
    assertEquals(maybe(0).default(1), 0);
    assertEquals(maybe("hello").get(), "hello");
    assertEquals(maybe(0).get(), 0);
    assertEquals(maybe(0).map((x) => x + 1).get(), 1);
    assertEquals(maybe(0).filter((x) => x > 1).get(), undefined);
    assertEquals(maybe(false).filter((x) => !x).get(), false);
    assertEquals(maybe(true).filter((x) => x).get(), true);
    assertEquals(maybe<boolean>().filter((x) => x).get(), undefined);
    // No tests for mapMaybe because it is identical to flatMap
    assertEquals(
      maybe(["hello"]).flatMap((x) => maybe(x.find((t) => /^hel/.test(t))))
        .get(),
      "hello",
    );
    assertEquals(
      maybe(["hello"]).flatMap((x) => maybe(x.find((t) => /^el/.test(t))))
        .get(),
      undefined,
    );
    assertEquals(maybe(true).toArray(), [true]);
    assertEquals(maybe().toArray(), []);
    assertEquals(JSON.stringify({ hello: maybe() }), "{}");
    assertEquals(maybe(0).toString(), "0");
    assertEquals(maybe().toString(), "");
  },
});

Deno.test({
  name: "mapMaybe",
  fn() {
    assertEquals(
      mapMaybe((x) => {
        if (x > 1) {
          return maybe(x + 1);
        } else {
          return maybe();
        }
      }, [0, 1, 3, -1, 20]),
      [4, 21],
    );
  },
});
