'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/common/Header';
import Footers from '@/components/common/Footer/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Hide footer only on /edit-video pages
  const hideFooterOn = ['/edit-video'];
  const shouldHideFooter = hideFooterOn.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      <Header />
      {children}
      {!shouldHideFooter && <Footers />}
    </>
  );
}
