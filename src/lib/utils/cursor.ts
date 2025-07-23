export default function initCursor() {
  const contactLink = document.querySelector(".contact-title__link");
  let isHovering = false;

  // Handles sizes of the cursor
  let cursorSize = 0;
  let maxCursorSize = 150;
  let minCursorSize = 0;
  let growthRate = 9;

  // Handles trailed positioning of the cursor
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let speed = 0.07;

  document.addEventListener("mousemove", function (event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
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

  function animateCursorPosition() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + distX * speed;
    cursorY = cursorY + distY * speed;

    document.body.style.setProperty("--cursorX", `${cursorX}px`);
    document.body.style.setProperty("--cursorY", `${cursorY}px`);

    requestAnimationFrame(animateCursorPosition);
  }
  animateCursorPosition();
}
