import tail from "denofun/lib/tail.ts";

console.log(tail([1, 2, 3, 4, 5])); // => [2, 3, 4, 5]

// ===

console.log(tail("hello world!")); // => "ello world!"