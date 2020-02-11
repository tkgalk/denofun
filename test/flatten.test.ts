import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import flatten from '../lib/flatten.ts';

test({
    name: "flatten",
    fn(): void {
        assertEquals(flatten([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
        assertEquals(flatten([1, 2, [3], [4, [5, [6]]]]), [1, 2, 3, 4, [5, [6]]]);
        assertEquals(flatten([]), []);
    }
})
