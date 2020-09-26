import { assertEquals } from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import lens from "../lib/lens.ts";
import view from "../lib/view.ts";

const car = Object.freeze({
  make: "Toyota",
  model: "GT86",
});

const getCarModel = (data: { make: string, model: string }) => data.model;
const setCarModel = (data: { make: string, model: string }, value: string) => ({ ...data, model: value });

const carModelLens = lens(getCarModel, setCarModel);

Deno.test({
  name: "view",
  fn(): void {
      assertEquals(typeof view, "function");
      assertEquals(view(carModelLens, car), "GT86");
  },
});
