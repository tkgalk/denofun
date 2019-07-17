import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import keys from './keys.ts';

test({
    name: "keys",
    fn(): void {
        assertEquals(keys({ a: 1, b: 2 }), ['a', 'b']);
        assertEquals(keys({}), []);
    }
})
