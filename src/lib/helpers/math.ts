/**
 * Takes a number and the number that its a percentage of, and returns the percentage.
 * Example: What percent is 33 out of 100 = getPercentageOfNumber(33, 100): 33
 */
export function getPercentageOfNumber(
  number: number,
  percentageOf: number,
): number {
  return (number / percentageOf) * 100;
}
