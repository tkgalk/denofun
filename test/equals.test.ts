import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import equals from '../lib/equals.ts';

test({
    name: "equals",
    fn(): void {
        assertEquals(equals(1, 1), true);
        assertEquals(equals(1, '1'), false);
        assertEquals(equals([1, 2, 3], [1, 2, 3]), true);        
        assertEquals(equals({ a: 1 }, { a: 1 }), true);
    }
})
