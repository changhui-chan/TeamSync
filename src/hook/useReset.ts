'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useReset = (close: () => void) => {
  const pathname = usePathname();

  useEffect(() => {
    close();
  }, [pathname]);
};
