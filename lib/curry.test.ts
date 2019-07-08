import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import curry from './curry.ts';

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
const add5 = curriedAdd(5);
const add5and10 = curriedAdd(5, 10);

test({
    name: "curry",
    fn(): void {
        assertEquals(typeof curry(add), 'function');
        assertEquals(typeof curriedAdd(5), 'function');
        assertEquals(add5(2), 7);
        assertEquals(add5and10, 15);
    }
})
