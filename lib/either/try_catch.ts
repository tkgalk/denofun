import Either from "./Either.ts";
import left from "./left.ts";
import jsonError from "./json_error.ts";

export default function tryCatch<Left, Right>(
  f: () => Left,
  handler = jsonError,
): Either<Left, Right> {
  try {
    return left(f());
  } catch (err) {
    return handler(err);
  }
}

export async function tryCatchAsync<Left, Right>(
  f: () => Promise<Left>,
  handler = jsonError,
): Promise<Either<Left, Right>> {
  try {
    return left(await f());
  } catch (err) {
    return handler(err);
  }
}
