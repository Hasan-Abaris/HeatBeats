
import './globals.css';
import { Header } from '@/components/common/Header';
import Footers from '@/components/common/Footer/Footer';
import { Toaster } from 'react-hot-toast';
export const metadata = {
  title: 'Games ',
  description:
    'SLA Consultants India is an online training provider with the most effective learning system in the world. We help professionals learn trending technologies for career growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={'font-stretch'}>
        <Toaster position="top-right" />
        <Header />
        {children}
        <Footers />
      </body>
    </html>
  );
}
