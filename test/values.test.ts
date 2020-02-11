import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import values from '../lib/values.ts';

test({
    name: "values",
    fn(): void {
        assertEquals(values({ a: 1, b: 2 }), [1, 2]);
        assertEquals(values({}), []);
    }
})
