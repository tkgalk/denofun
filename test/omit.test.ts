import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import omit from '../lib/omit.ts';

const a = {
    a: 1,
    b: 2,
    c: 3,
};

test({
    name: "omit",
    fn(): void {
        assertEquals(omit(['b', 'c'], a), { a: 1 });
        assertEquals(omit(['b', 'c'])(a), { a: 1 });
        assertEquals(omit([], a), { a: 1, b: 2, c: 3 });
        assertEquals(omit(['a', 'b', 'c'], a), {});
    }
})
