import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import values from '../lib/values.ts';

test({
    name: "values",
    fn(): void {
        assertEquals(values({ a: 1, b: 2 }), [1, 2]);
        assertEquals(values({}), []);
    }
})
