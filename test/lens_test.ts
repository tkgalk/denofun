import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import lens from "../lib/lens.ts";

const car = Object.freeze({
  make: "Toyota",
  model: "GT86",
});

const getCarModel = (data: { make: string, model: string }) => data.model;
const setCarModel = (data: { make: string, model: string }, value: string) => ({ ...data, model: value });

const carModelLens = lens(getCarModel, setCarModel);

Deno.test({
  name: "lens",
  fn(): void {
    assertEquals(typeof lens, "function");
    assertEquals(typeof carModelLens, "object");
    assertEquals(typeof carModelLens.getter, "function");
    assertEquals(typeof carModelLens.setter, "function");
    assertEquals(carModelLens.getter(car), "GT86");
    assertEquals(carModelLens.setter(car, "Mirai"), { make: "Toyota", model: "Mirai" });
  },
});
