import { runTests } from "std/testing/mod.ts";

import "../lib/curry.test.ts";
import "../lib/head.test.ts";
import "../lib/tail.test.ts";
import "../lib/map.test.ts";
import "../lib/filter.test.ts";
import "../lib/reduce.test.ts";
import "../lib/reverse.test.ts";
import "../lib/compose.test.ts";
import "../lib/pipe.test.ts";
import "../lib/identity.test.ts";

runTests();
