import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import equals from '../lib/equals.ts';

test({
    name: "equals",
    fn(): void {
        assertEquals(equals(1, 1), true);
        assertEquals(equals(1, "1" as any), false);
        assertEquals(equals([1, 2, 3], [1, 2, 3]), true);
        assertEquals(equals({ a: 1 }, { a: 1 }), true);
    }
})
