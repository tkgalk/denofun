import Either from "./Either.ts";

export default function error<Left, Right>(value: Right): Either<Left, Right> {
  return {
    map<Result>(f: (t: Left) => Result) {
      return error<Result, Right>(value);
    },
    flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
      return error<Result, Right>(value);
    },
    left: {
      try() {
        throw value;
      },
      map<Result>(f: (t: Left) => Result) {
        return error<Result, Right>(value);
      },
      flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
        return error<Result, Right>(value);
      },
      coerce(f: (t: Left) => Right) {
        return value;
      },
    },
    right: {
      try() {
        return value;
      },
      map<Result>(f: (t: Right) => Result) {
        return error(f(value));
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
      throw value;
    },
    toString() {
      return String(value);
    },
    [Deno.customInspect]() {
      return `error(${value})`;
    },
  };
}
