import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import flatten from '../lib/flatten.ts';

test({
    name: "flatten",
    fn(): void {
        assertEquals(flatten([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
        assertEquals(flatten([1, 2, [3], [4, [5, [6]]]]), [1, 2, 3, 4, 5, 6]);
        assertEquals(flatten([]), []);
    }
})
