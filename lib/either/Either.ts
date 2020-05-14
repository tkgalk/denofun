/**
 * Either is a Functor (map), a Monad (flatMap)
 * It contains either the left value of type Left, or the right value of the type Right,
 * but never both, and it is never empty.
 * Convenience properties left and right are provided to chose over which value a transformation can be made.
 * Error handling methods like try() and catch() are also provided
 * The default side is the left side, the right side will canonically be used to contain errors.
 * // TODO: implement the Applicative and Alternative interface
 */
export default interface Either<Left, Right> {
  map<Result>(f: (t: Left) => Result): Either<Result, Right>;
  flatMap<Result>(f: (t: Left) => Either<Result, Right>): Either<Result, Right>;
  left: {
    try(): Left;
    map<Result>(f: (t: Left) => Result): Either<Result, Right>;
    flatMap<Result>(
      f: (t: Left) => Either<Result, Right>,
    ): Either<Result, Right>;
    coerce(f: (t: Left) => Right): Right;
  };
  right: {
    try(): Right;
    map<Result>(f: (t: Right) => Result): Either<Left, Result>;
    flatMap<Result>(
      f: (t: Right) => Either<Left, Result>,
    ): Either<Left, Result>;
    coerce(f: (t: Right) => Left): Left;
  };
  mapEither<Result>(fl: (l: Left) => Result, fr: (r: Right) => Result): Result;
  catch(f: (r: Right) => Left): Left;
  try(): Left;
  get(): Left | Right;

  toJSON(): Left | Right;
  toString(): string;
  [Deno.customInspect](): string;
}
