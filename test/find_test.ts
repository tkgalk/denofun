import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import find from "../lib/find.ts";

function findToyota(car: { make: string }) {
  return car.make === "Toyota";
}

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
  name: "find",
  fn(): void {
    assertEquals(find(findToyota, cars), { make: "Toyota", model: "Mirai" });
    assertEquals(find(findToyota, []), undefined);
  },
});
