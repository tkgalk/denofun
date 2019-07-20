import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import concat from '../lib/concat.ts';

test({
    name: "concat",
    fn(): void {
        assertEquals(concat('hello', 'world'), 'helloworld');
        assertEquals(concat(['a', 'b', 'c'], ['d', 'e', 'f']), ['a', 'b', 'c', 'd', 'e', 'f']);
        assertEquals(concat([], []), []);
        assertEquals(concat('', ''), '');
    }
})
