import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import pipe from '../lib/pipe.ts';

function add5(n) {
    return n + 5;
}

function mul2(n) {
    return n * 2;
}

function sub(a, b) {
    return a - b;
}

const mul2add5 = pipe(mul2, add5);
const submul2 = pipe(sub, mul2);

test({
    name: "pipe",
    fn(): void {
        assertEquals(mul2add5(5), 15);
        assertEquals(mul2add5(2), 9);
        assertEquals(submul2(2, 5), -6);
    }
})
