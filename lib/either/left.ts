import Either from "./Either.ts";

export default function left<Left, Right>(value: Left): Either<Left, Right> {
  return {
    map<Result>(f: (t: Left) => Result) {
      return left(f(value));
    },
    flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
      return f(value);
    },
    left: {
      try() {
        return value;
      },
      map<Result>(f: (t: Left) => Result) {
        return left(f(value));
      },
      flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
        return f(value);
      },
      coerce(f: (t: Left) => Right) {
        return f(value);
      },
    },
    right: {
      try() {
        throw value;
      },
      map<Result>(f: (t: Right) => Result) {
        return left<Left, Result>(value);
      },
      flatMap<Result>(f: (t: Right) => Either<Left, Result>) {
        return left<Left, Result>(value);
      },
      coerce(f: (t: Right) => Left) {
        return value;
      },
    },
    catch(f: (t: Right) => Left) {
      return value;
    },
    get() {
      return value;
    },
    try() {
      return value;
    },
    mapEither(fl, fr) {
      return fl(value);
    },
    toJSON() {
      return value;
    },
    toString() {
      return String(value);
    },
    [Deno.customInspect]() {
      return `left(${value})`;
    },
  };
}
