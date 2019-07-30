import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import prop from '../lib/prop.ts';

const car = { make: "Alfa Romeo", model: "Giulia" };

test({
    name: "prop",
    fn(): void {
        assertEquals(prop("make", car), "Alfa Romeo");
        assertEquals(prop("model")(car), "Giulia");
        assertEquals(prop("wheels", car), undefined);
    }
})
