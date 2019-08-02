import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import has from '../lib/has.ts';

const car = { make: "Alfa Romeo", model: "Giulia" };

test({
    name: "has",
    fn(): void {
        assertEquals(has('make', car), true);
        assertEquals(has('transmission', car), false);
    }
})
