import Either from "./Either.ts";

export default function right<Left, Right>(value: Right): Either<Left, Right> {
  return {
    map<Result>(f: (t: Left) => Result) {
      return right<Result, Right>(value);
    },
    flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
      return right<Result, Right>(value);
    },
    left: {
      try() {
        throw value;
      },
      map<Result>(f: (t: Left) => Result) {
        return right<Result, Right>(value);
      },
      flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
        return right<Result, Right>(value);
      },
      coerce(f) {
        return value;
      },
    },
    right: {
      try() {
        return value;
      },
      map<Result>(f: (t: Right) => Result) {
        return right(f(value));
      },
      flatMap<Result>(f: (t: Right) => Either<Left, Result>) {
        return f(value);
      },
      coerce(f: (t: Right) => Left) {
        return f(value);
      },
    },
    catch(f: (t: Right) => Left) {
      return f(value);
    },
    get() {
      return value;
    },
    try() {
      throw value;
    },
    mapEither(fl, fr) {
      return fr(value);
    },
    toJSON() {
      return value;
    },
    toString() {
      return String(value);
    },
    [Deno.customInspect]() {
      return `right(${value})`;
    },
  };
}
