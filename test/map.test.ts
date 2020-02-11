import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import map from '../lib/map.ts';

function double(n) {
    return n * 2;
}

test({
    name: "map",
    fn(): void {
        assertEquals(map(double, [1, 2, 3]), [2, 4, 6]);
    }
})
