import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import groupBy from "../lib/group_by.ts";

const cars = [
  { make: "Alfa Romeo", model: "Giulia" },
  { make: "Alfa Romeo", model: "Stelvio" },
  { make: "Ford", model: "Mustang" },
  { make: "Ford", model: "Focus" },
  { make: "Toyota", model: "Mirai" },
  { make: "Toyota", model: "Yaris" },
  { make: "Toyota", model: "Supra" },
];

function byMake(car: { make: string; model: string }) {
  return car.make;
}

Deno.test({
  name: "groupBy",
  fn(): void {
    assertEquals(groupBy(byMake, cars), {
      "Alfa Romeo": [
        { make: "Alfa Romeo", model: "Giulia" },
        { make: "Alfa Romeo", model: "Stelvio" },
      ],
      "Ford": [
        { make: "Ford", model: "Mustang" },
        { make: "Ford", model: "Focus" },
      ],
      "Toyota": [
        { make: "Toyota", model: "Mirai" },
        { make: "Toyota", model: "Yaris" },
        { make: "Toyota", model: "Supra" },
      ],
    });
    assertEquals(groupBy((x) => x.length, ["a", "bb", "bb", "ccc"]), {
      1: ["a"],
      2: ["bb", "bb"],
      3: ["ccc"],
    });
  },
});
