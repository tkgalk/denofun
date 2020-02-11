import { test } from "https://deno.land/std@v0.32.0/testing/mod.ts";
import { assertEquals } from "https://deno.land/std@v0.32.0/testing/asserts.ts"

import pick from "../lib/pick.ts";

const a = {
    a: 1,
    b: 2,
    c: 3,
};

test({
    name: "pick",
    fn(): void {
        assertEquals(pick(["b", "c"], a), { b: 2, c: 3 });
        assertEquals(pick([], a), {});
        assertEquals(pick(["a", "b", "c"], a), { a: 1, b: 2, c: 3 });
    }
})
