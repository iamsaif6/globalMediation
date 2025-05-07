import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/shared/Footer';
import Script from 'next/script';
import Head from 'next/head';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
//TODO : Description
export const metadata = {
  title: 'Global Mediation - Mediation Services in London & Nationwide',
  description:
    'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Search Engine Meta */}
        <meta name="description" content={metadata.description} />
        <meta itemProp="name" content={metadata.title} />
        <meta itemProp="description" content={metadata.description} />
        <meta itemProp="image" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://www.globalmediation.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="" />
      </Head>
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
