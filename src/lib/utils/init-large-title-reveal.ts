import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import revealElementsWithBlur from "./reveal-elements-with-blur";
import walkParents from "../helpers/walk-parents";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function initLargeTitleRevealInstances() {
  const titles = document.querySelectorAll(".large-title");

  titles.forEach((title) => {
    const scrollContainer = walkParents(
      title as HTMLElement,
      null,
      "scroll-container",
    );

    const split = SplitText.create(title, {
      type: "chars",
      charsClass: "blurred-item",
    });

    const chars = split.chars as HTMLElement[];

    ScrollTrigger.create({
      trigger: scrollContainer,
      start: "clamp(top top)",
      end: "+=100%",
      pin: true,
      onUpdate: (self: { progress: number }) => {
        revealElementsWithBlur(chars, self.progress);
      },
    });
  });
}
