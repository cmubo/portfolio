function walkParents(
  el: HTMLElement,
  tag: string | null,
  className?: string | null,
): HTMLElement | null {
  while (el.parentNode) {
    el = el.parentNode as HTMLElement;
    if (tag && el.tagName === tag) {
      return el;
    }

    if (className && el.classList && el.classList.contains(className)) {
      return el;
    }
  }

  return null;
}

export default walkParents;
