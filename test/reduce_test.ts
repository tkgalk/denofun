import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

import reduce from '../lib/reduce.ts';

function add(a, b) {
    return a + b;
}

Deno.test({
    name: "reduce",
    fn(): void {
        assertEquals(reduce(add, 0, [1, 2, 5]), 8);
        assertEquals(reduce(add, 0, []), 0);
    }
})
