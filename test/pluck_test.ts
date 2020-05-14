import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import pluck from "../lib/pluck.ts";

const cars = [
  { make: "Alfa Romeo", model: "Giulia" },
  { make: "Alfa Romeo", model: "Stelvio" },
  { make: "Ford", model: "Mustang" },
  { make: "Ford", model: "Focus" },
  { make: "Toyota", model: "Mirai" },
  { make: "Toyota", model: "Yaris" },
  { make: "Toyota", model: "Supra" },
];

Deno.test({
  name: "pluck",
  fn(): void {
    assertEquals(pluck("make", cars), [
      "Alfa Romeo",
      "Alfa Romeo",
      "Ford",
      "Ford",
      "Toyota",
      "Toyota",
      "Toyota",
    ]);
  },
});
