import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import revealElementsWithBlur from "./reveal-elements-with-blur";
import walkParents from "../helpers/walk-parents";

export default function initRevealCharactersInstances() {
  const revealWordsContainers = document.querySelectorAll<HTMLElement>(
    "[data-blue-reveal-characters]",
  );
  revealWordsContainers.forEach((container) => {
    const scrollContainer = walkParents(
      container,
      null,
      container.dataset.blurRevealCharactersScrollContainer,
    );
    const startPosition = container.dataset.blurRevealStartPosition;
    const endPosition = container.dataset.blurRevealEndPosition;

    if (!scrollContainer) {
      console.error("Scroll container not found on element", container);
      return;
    }

    const split = SplitText.create(container, {
      type: "chars",
      charsClass: "blurred-item",
    });

    const characters = split.chars as HTMLElement[];

    ScrollTrigger.create({
      trigger: scrollContainer,
      start: startPosition ? startPosition : "clamp(top center)",
      end: endPosition ? endPosition : "clamp(bottom bottom)",
      markers: true,
      onUpdate: (self: { progress: number }) => {
        revealElementsWithBlur(characters, self.progress);
      },
    });
  });
}
