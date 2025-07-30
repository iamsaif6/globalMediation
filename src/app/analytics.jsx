'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = url => {
      if (window.gtag) {
        window.gtag('config', 'G-4EDYXWBRCY', {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname);
  }, [pathname]);

  return null;
}
