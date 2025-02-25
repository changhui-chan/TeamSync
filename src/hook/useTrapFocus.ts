'use client';

import { useEffect } from 'react';

export const useTrapFocus = (
  modalRef: React.RefObject<HTMLElement | null>,
  isOpen: boolean
) => {
  useEffect(() => {
    const modal = modalRef.current;

    if (!isOpen || !modal) return;

    const prevFocusedElement = document.activeElement as HTMLElement;

    const focusableElements = modal?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (focusableElements.length === 0) {
        e.preventDefault();
      }

      const shiftTab = e.shiftKey;
      const focusingElement = document.activeElement;

      if (shiftTab && focusingElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!shiftTab && focusingElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      prevFocusedElement?.focus();
    };
  }, [modalRef, isOpen]);
};
