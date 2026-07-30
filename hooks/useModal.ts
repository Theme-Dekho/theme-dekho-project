"use client";

import { useCallback, useState } from "react";

/** Generic open/close/toggle state for a simple (payload-less) modal or drawer. */
export function useModal(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, open, close, toggle };
}
