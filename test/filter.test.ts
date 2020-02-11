import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import filter from '../lib/filter.ts';

function isLessThan5(n) {
    return n < 5;
}

test({
    name: "filter",
    fn(): void {
        assertEquals(filter(isLessThan5, [1, 2, 6, 8]), [1, 2]);
    }
})
