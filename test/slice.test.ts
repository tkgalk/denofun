import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import slice from '../lib/slice.ts';

const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

test({
    name: "slice",
    fn(): void {
        assertEquals(slice(1, 3, letterArray), ['b', 'c']);
        assertEquals(slice(1, Infinity, letterArray), ['b', 'c', 'd', 'e', 'f', 'g']);
    }
})
