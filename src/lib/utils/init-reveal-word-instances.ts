import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import revealElementsWithBlur from "./reveal-elements-with-blur";
import walkParents from "../helpers/walk-parents";

export default function initRevealWordInstances() {
  const revealWordsContainers = document.querySelectorAll<HTMLElement>(
    "[data-blur-reveal-words]",
  );
  revealWordsContainers.forEach((container) => {
    const scrollContainer = walkParents(
      container,
      null,
      container.dataset.blurRevealWordsScrollContainer,
    );
    const startPosition = container.dataset.blurRevealWordsStartPosition;
    const endPosition = container.dataset.blurRevealWordsEndPosition;

    if (!scrollContainer) {
      console.error("Scroll container not found on element", container);
      return;
    }

    const split = SplitText.create(container, {
      type: "words",
      wordsClass: "blurred-word",
    });

    const words = split.words as HTMLElement[];

    ScrollTrigger.create({
      trigger: scrollContainer,
      start: startPosition ? startPosition : "clamp(top center)",
      end: endPosition ? endPosition : "clamp(bottom bottom)",
      onUpdate: (self: { progress: number }) => {
        revealElementsWithBlur(words, self.progress);
      },
    });
  });
}
