import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import includes from "../lib/includes.ts";

test({
    name: "includes",
    fn(): void {
        assertEquals(includes("a", ["a", "b", "c"]), true);
        assertEquals(includes(3, [1, 2, 3, 4, 5]), true);
        assertEquals(includes("a", "car"), true);
        assertEquals(includes({ name: "Fred" }, [{ name: "Fred" }, { name: "George" }]), true);
    }
})
