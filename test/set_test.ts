import { assertEquals } from "../deps.ts";

import lens from "../lib/lens.ts";
import set from "../lib/set.ts";

const car = Object.freeze({
  make: "Toyota",
  model: "GT86",
});

const getCarModel = (data: { make: string, model: string }) => data.model;
const setCarModel = (data: { make: string, model: string }, value: string) => ({ ...data, model: value });

const carModelLens = lens(getCarModel, setCarModel);

Deno.test({
  name: "set",
  fn(): void {
      assertEquals(typeof set, "function");
      assertEquals(set(carModelLens, car, "Mirai"), { make: "Toyota", model: "Mirai" });
  },
});
