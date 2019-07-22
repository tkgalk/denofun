import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import reverse from '../lib/reverse.ts';


test({
    name: "reverse",
    fn(): void {
        assertEquals(reverse([1, 2, 3]), [3, 2, 1]);
        assertEquals(reverse([1]), [1]);
        assertEquals(reverse([]), []);
        assertEquals(reverse('abc'), 'cba');
        assertEquals(reverse('a'), 'a');
        assertEquals(reverse(''), '');
    }
})
