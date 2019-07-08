import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import head from './head.ts';

test({
    name: "head",
    fn(): void {
        assertEquals(head([]), undefined);
        assertEquals(head(['a', 'b', 'c']), 'a');
        assertEquals(head([1, 'a', 'c']), 1)
        assertEquals(head('hello'), 'h')
        assertEquals(head([[], 'w']), [])
    }
})
