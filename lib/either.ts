import left from "./either/left.ts";
import right from "./either/right.ts";
import jsonError from "./either/json_error.ts";
import error from "./either/error.ts";
import Either from "./either/Either.ts";
import partition from "./either/partition.ts";
import tryCatch, { tryCatchAsync } from "./either/try_catch.ts";

const either = {
  left,
  right,
  jsonError,
  error,
  partition,
  tryCatch,
  tryCatchAsync,
};
export default either;
export { Either };
