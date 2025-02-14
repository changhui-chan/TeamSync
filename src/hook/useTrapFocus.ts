'use client';

import { useEffect } from 'react';

export const useTrapFocus = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const focusableElements = ref.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      const tab = e.key === 'Tab';
      const shiftTab = e.shiftKey;
      const focusing = document.activeElement;

      if (!tab) return;

      if (shiftTab && focusing === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!shiftTab && focusing === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [ref]);
};
