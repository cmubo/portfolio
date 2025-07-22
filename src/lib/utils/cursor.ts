export default function initCursor() {
  const contactLink = document.querySelector(".contact-title__link");
  let isHovering = false;
  let cursorSize = 0;
  let maxCursorSize = 150;
  let minCursorSize = 0;
  let growthRate = 9;

  document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--mouseX", `${e.pageX}px`);
    document.body.style.setProperty("--mouseY", `${e.pageY}px`);
  });

  contactLink!.addEventListener("mouseover", () => {
    isHovering = true;

    expandCursor();
  });

  contactLink!.addEventListener("mouseout", () => {
    isHovering = false;

    shrinkCursor();
  });

  function expandCursor() {
    if (cursorSize >= maxCursorSize || !isHovering) return;

    // To stop mask expanding past max size
    if (maxCursorSize - cursorSize < growthRate) {
      cursorSize += maxCursorSize - cursorSize;
    } else {
      cursorSize += growthRate;
    }

    document.body.style.setProperty("--cursor-size", `${cursorSize}px`);
    window.requestAnimationFrame(expandCursor);
  }

  function shrinkCursor() {
    if (cursorSize <= minCursorSize || isHovering) return;

    // To stop mask shrinking past min size
    if (cursorSize - growthRate < minCursorSize) {
      cursorSize -= cursorSize - minCursorSize;
    } else {
      cursorSize -= growthRate;
    }

    document.body.style.setProperty("--cursor-size", `${cursorSize}px`);
    window.requestAnimationFrame(shrinkCursor);
  }
}
