import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import split from '../lib/split.ts';

test({
    name: "split",
    fn(): void {
        assertEquals(split('/', '/usr/local/bin/deno'), ['', 'usr', 'local', 'bin', 'deno']);
        assertEquals(split('', 'hello world!'), ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']);
        assertEquals(split('.', ''), [""]);
    }
})
