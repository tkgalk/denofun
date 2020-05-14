import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import pipe from "../lib/pipe.ts";

function add5(n: number) {
  return n + 5;
}

function mul2(n: number) {
  return n * 2;
}

function sub(a: number, b: number) {
  return a - b;
}

const mul2add5 = pipe(mul2, add5);
const submul2 = pipe(sub, mul2);

Deno.test({
  name: "pipe",
  fn(): void {
    assertEquals(mul2add5(5), 15);
    assertEquals(mul2add5(2), 9);
    assertEquals(submul2(2, 5), -6);
  },
});
