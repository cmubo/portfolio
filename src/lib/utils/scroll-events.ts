export default function initScrollEvents() {
  const scrollPositions = {
    about: document.getElementById("about")!.offsetTop,
    work: document.getElementById("work")!.offsetTop,
    contact: document.getElementById("contact")!.offsetTop,
  };

  function dispatchEvents(scrollPosition: number) {
    const scrollOffset = window.innerHeight * 0.5;

    // We minus the scrollOffset so the animation happens when half of the screen section is visible
    if (
      scrollPosition >= scrollPositions["work"] - scrollOffset &&
      scrollPosition < scrollPositions["contact"] - scrollOffset
    ) {
      dispatchEvent(new Event("scroll::work"));
    } else if (scrollPosition >= scrollPositions["contact"] - scrollOffset) {
      dispatchEvent(new Event("scroll::contact"));
    } else {
      dispatchEvent(new Event("scroll::about"));
    }
  }

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    dispatchEvents(scrollPosition);
  });

  // Do it on load too.
  dispatchEvents(window.scrollY);
}
