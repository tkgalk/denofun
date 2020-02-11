import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import last from '../lib/last.ts';

test({
    name: "last",
    fn(): void {
        assertEquals(last(["a", "b", "c"]), "c");
        assertEquals(last("hello world"), "d");
        assertEquals(last([1, "test", { make: "Toyota" }]), { make: "Toyota" });
    }
})
