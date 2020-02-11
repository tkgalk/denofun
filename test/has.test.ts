import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import has from '../lib/has.ts';

const car = { make: "Alfa Romeo", model: "Giulia" };

test({
    name: "has",
    fn(): void {
        assertEquals(has('make', car), true);
        assertEquals(has('transmission', car), false);
    }
})
