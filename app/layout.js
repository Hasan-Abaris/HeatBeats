import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Header } from '@/components/common/Header';
import Footers from '@/components/common/Footer/Footer';
import ClientLayout from './ClientLayout'; // 👈 Import the new client component

export const metadata = {
  title: 'Games',
  description:
    'SLA Consultants India is an online training provider with the most effective learning system in the world. We help professionals learn trending technologies for career growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-stretch">
        <Toaster position="top-right" />
        {/* 👇 Client-side wrapper handles footer visibility */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
