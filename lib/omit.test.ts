import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import omit from './omit.ts';

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
