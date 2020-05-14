import {
  assertEquals,
  assertThrows,
  assertThrowsAsync,
  assert,
} from "https://deno.land/std@v0.42.0/testing/asserts.ts";

import left from "../lib/either/left.ts";
import right from "../lib/either/right.ts";
import jsonError from "../lib/either/json_error.ts";
import error from "../lib/either/error.ts";
import Either from "../lib/either/Either.ts";
import partition from "../lib/either/partition.ts";
import tryCatch, { tryCatchAsync } from "../lib/either/try_catch.ts";

Deno.test({
  name: "either.left",
  fn() {
    assertEquals(left(1).try(), 1);
    assertEquals(left(1).get(), 1);
    assertEquals(left(1).map((t) => t + 1).try(), 2);
    assertEquals(left(1).map((t) => t + 1).get(), 2);
    assertEquals(left(1).flatMap((t) => left(t + 1)).try(), 2);
    assertEquals(left(1).flatMap((t) => left(t + 1)).get(), 2);
    assertThrows(() => left(1).flatMap((t) => right(new Error("stop"))).try());
    assertEquals(left(1).flatMap((t) => right("hello")).get(), "hello");
    assertEquals(left(1).left.map((t) => t + 1).try(), 2);
    assertEquals(left(1).left.map((t) => t + 1).get(), 2);
    assertEquals(left<number, string>(1).left.coerce((t) => t.toString()), "1");
    assertEquals(
      left<number, string>(1).right.map((s: string) => s.toUpperCase()).try(),
      1,
    );
    assertEquals(
      left<number, string>(1).right.map((s: string) => s.toUpperCase()).get(),
      1,
    );
    assertEquals(left<number, string>(1).right.coerce(parseFloat), 1);
    assertEquals(
      left<number, string>(1).mapEither(
        (n: number) => n.toString(),
        (s: string) => s,
      ),
      "1",
    );
    assertEquals(JSON.stringify(left(1)), "1");
    assertEquals(left(1).toString(), "1");
    assertEquals(left<number, string>(1).catch(parseFloat), 1);
  },
});

function testRight(handler: <L, R>(t: R) => Either<L, R>) {
  assertThrows(() => handler<number, Error>(new Error("1")).try());
  assertEquals(handler<number, string>("1").get(), "1");
  assertThrows(() =>
    handler<number, Error>(new Error("1")).map((t) => t + 1).try()
  );
  assertEquals(handler<number, string>("1").map((t) => t + 1).get(), "1");
  assertThrows(() =>
    handler<number, Error>(new Error("1")).flatMap((t) => left(t + 1)).try()
  );
  assertEquals(
    handler<number, string>("1").flatMap((t) => left(t + 1)).get(),
    "1",
  );
  assertThrows(() =>
    handler<number, Error>(new Error("1")).left.map((t) => t + 1).try()
  );
  assertEquals(handler<number, string>("1").left.map((t) => t + 1).get(), "1");
  assertEquals(
    handler<number, string>("1").left.coerce((t) => t.toString()),
    "1",
  );
  assertEquals(
    handler<number, string>("a").right.map((s: string) => s.toUpperCase())
      .get(),
    "A",
  );
  assertEquals(handler<number, string>("1").right.coerce(parseFloat), 1);
  assertEquals(
    handler<number, string>("1").mapEither(
      (n: number) => n.toString(),
      (s: string) => s,
    ),
    "1",
  );
  assertEquals(handler(1).toString(), "1");
  assertEquals(handler<number, string>("1").catch(parseFloat), 1);
}

Deno.test({
  name: "either.right",
  fn() {
    testRight(right);
    assertEquals(JSON.stringify(right("1")), '"1"');
  },
});

Deno.test({
  name: "either.jsonError",
  fn() {
    testRight(jsonError);
    const error = new Error("toto");
    assertEquals(
      JSON.stringify(jsonError(error)),
      JSON.stringify(
        { name: error.name, message: error.message, stack: error.stack },
      ),
    );
  },
});

Deno.test({
  name: "either.error",
  fn() {
    testRight(error);
    const err = new Error("error");
    assertThrows(() => JSON.stringify(error(err)));
  },
});

Deno.test({
  name: "either.partition",
  fn() {
    const [leftValues, rightValues] = partition<number, string>(
      [
        left(1),
        left(3),
        right("hello"),
        left(0.5),
        right("0.5"),
        right("one"),
        left(NaN),
      ],
    );
    assertEquals(leftValues.slice(0, -1), [1, 3, 0.5]);
    assert(isNaN(leftValues[3]), "NaN should be treated like numbers");
    assertEquals(rightValues, ["hello", "0.5", "one"]);
  },
});

Deno.test({
  name: "either.tryCatch",
  async fn() {
    assertEquals(tryCatch<string, Error>(() => "hello").try(), "hello");
    assertEquals(
      (await tryCatchAsync<string, Error>(async () => "hello")).try(),
      "hello",
    );
    assertThrows(() =>
      tryCatch<string, Error>(() => {
        throw new Error("error");
      }).try()
    );
    assertThrowsAsync(async () => {
      const valueOrError = await tryCatchAsync<string, Error>(() =>
        Promise.reject(new Error("error"))
      );
      valueOrError.try();
    });
  },
});
