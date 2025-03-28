import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/shared/Footer';
import dynamic from 'next/dynamic';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Global Mediation',
  description: 'Global Mediation',
};

export default function RootLayout({ children }) {
  const CrispWithNoSSR = dynamic(() => import('../components/crisp'));
  return (
    <html lang="en">
      <CrispWithNoSSR />
      <body id="root" className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
