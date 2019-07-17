import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import tail from './tail.ts';

test({
    name: "tail",
    fn(): void {
        assertEquals(tail([]), []);
        assertEquals(tail(['a', 'b', 'c']), ['b', 'c']);
        assertEquals(tail(['c', 'a', 1]), ['a', 1])
        assertEquals(tail('hello'), 'ello')
        assertEquals(tail([[], 'w']), ['w'])
    }
})
