import Either from "./Either.ts";

export default function partition<Left, Right>(
  values: Array<Either<Left, Right>>,
): [Left[], Right[]] {
  const leftResult: Left[] = [];
  const rightResult: Right[] = [];
  values.forEach((leftOrRight) => {
    leftOrRight.mapEither(
      (l) => leftResult.push(l),
      (r) => rightResult.push(r),
    );
  });

  return [leftResult, rightResult];
}
