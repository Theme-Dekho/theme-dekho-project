"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Drives the left/right arrow buttons on a horizontally-scrollable product
 * grid — mirrors the original `scrollGrid()` + scroll-listener behavior.
 */
export function useHorizontalScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scrollBy = useCallback((dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 620, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  }, [updateArrows]);

  return { ref, canScrollLeft, canScrollRight, scrollLeft: () => scrollBy(-1), scrollRight: () => scrollBy(1) };
}
