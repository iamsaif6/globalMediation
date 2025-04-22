import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/shared/Footer';
import Script from 'next/script';

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
  return (
    <html lang="en">
      <body id="root" className={`${poppins.variable} antialiased`}>
        <Script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2025/04/20/21/20250420213141-RFCIFB7R.js" strategy="afterInteractive" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
