import Either from "./Either.ts";

export default function jsonError<Left, Right>(
  value: Right,
): Either<Left, Right> {
  return {
    map<Result>(f: (t: Left) => Result) {
      return jsonError<Result, Right>(value);
    },
    flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
      return jsonError<Result, Right>(value);
    },
    left: {
      try() {
        throw value;
      },
      map<Result>(f: (t: Left) => Result) {
        return jsonError<Result, Right>(value);
      },
      flatMap<Result>(f: (t: Left) => Either<Result, Right>) {
        return jsonError<Result, Right>(value);
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
        return jsonError(f(value));
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
      if (value instanceof Error) {
        return Object.assign({
          name: value.name,
          message: value.message,
          stack: value.stack,
        }, value);
      } else {
        return value;
      }
    },
    toString() {
      return String(value);
    },
    [Deno.customInspect]() {
      return `jsonError(${value})`;
    },
  };
}
