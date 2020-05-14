import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import curry from "../lib/curry.ts";

function add(a: number, b: number) {
  return a + b;
}

const curriedAdd = curry(add);
const add5 = curriedAdd(5);
const add5and10 = curriedAdd(5, 10);

Deno.test({
  name: "curry",
  fn(): void {
    assertEquals(typeof curry(add), "function");
    assertEquals(typeof curriedAdd(5), "function");
    assertEquals(add5(2), 7);
    assertEquals(add5and10, 15);
  },
});
