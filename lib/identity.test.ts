import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import identity from './identity.ts';

test({
    name: "identity",
    fn(): void {
        assertEquals(identity(1), 1);
        assertEquals(identity(null), null);
    }
})
