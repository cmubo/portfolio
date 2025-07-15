import { getPercentageOfNumber } from "../helpers/math";

export default function revealElementsWithBlur(
  elements: HTMLElement[],
  scrollPercentage: number,
) {
  const totalElements = elements.length;
  const BLUR_AMOUNT = 20;

  elements.forEach((elements, index) => {
    const elementStart = getPercentageOfNumber(index, totalElements) / 100;
    const elementEnd = getPercentageOfNumber(index + 1, totalElements) / 100;

    if (scrollPercentage >= elementStart && scrollPercentage <= elementEnd) {
      const progressOfWord =
        (scrollPercentage - elementStart) / (elementEnd - elementStart);

      const blur = Math.max(0, BLUR_AMOUNT - progressOfWord * BLUR_AMOUNT);
      const opacity = Math.min(1, progressOfWord * 2);

      elements.style.filter = `blur(${blur}px)`;
      elements.style.opacity = `${opacity}`;
    } else if (scrollPercentage > elementEnd) {
      elements.style.filter = "blur(0px)";
      elements.style.opacity = "1";
    } else {
      elements.style.filter = `blur(${BLUR_AMOUNT}px)`;
      elements.style.opacity = "0";
    }
  });
}
