import ScrollTrigger from "gsap/ScrollTrigger";
import revealElementsWithBlur from "./reveal-elements-with-blur";
import walkParents from "../helpers/walk-parents";

export default function initRevealChildrenInstances() {
  const revealChildrenContainers = document.querySelectorAll<HTMLElement>(
    "[data-blur-reveal-children]",
  );
  revealChildrenContainers.forEach((container) => {
    const scrollContainer = walkParents(
      container,
      null,
      container.dataset.blurRevealScrollContainer,
    );
    const startPosition = container.dataset.blurRevealStartPosition;
    const endPosition = container.dataset.blurRevealEndPosition;

    if (!scrollContainer) {
      console.error("Scroll container not found on element", container);
      return;
    }

    const children = [...container.children] as HTMLElement[];

    ScrollTrigger.create({
      trigger: scrollContainer,
      start: startPosition ? startPosition : "clamp(top center)",
      end: endPosition ? endPosition : "clamp(bottom bottom)",
      onUpdate: (self: { progress: number }) => {
        revealElementsWithBlur(children, self.progress);
      },
    });
  });
}
