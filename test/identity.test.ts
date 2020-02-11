import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import identity from '../lib/identity.ts';

test({
    name: "identity",
    fn(): void {
        assertEquals(identity(1), 1);
        assertEquals(identity(null), null);
    }
})
