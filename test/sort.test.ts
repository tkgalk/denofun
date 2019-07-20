import { test } from "std/testing/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

import sort from '../lib/sort.ts';

function sortNumbers (a, b) {
    if (a > b) {
        return 1;
    }

    if (a == b) {
        return 0;
    }

    if (a < b) {
        return -1;
    }
}

function sortStringsByLength (a: string, b: string) {
    if (a.length > b.length) {
        return 1;
    }

    if (a.length == b.length) {
        return 0;
    }

    if (a.length < b.length) {
        return -1;
    }
}

test({
    name: "sort",
    fn(): void {
        assertEquals(sort(sortNumbers, [1, 6, 2, 3, 5]), [1, 2, 3, 5, 6]);
        assertEquals(sort(sortStringsByLength, ["a", "bb", "ccccc", "ddd"]), ["a", "bb", "ddd", "ccccc"]);
        assertEquals(sort(sortNumbers, []), []);
        assertEquals(sort(sortNumbers)([]), []);
    }
})
