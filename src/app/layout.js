import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/shared/Footer';
import Script from 'next/script';
import UserbackWidget from '@/components/UserbackWidget';
import Analytics from './analytics';
import { AuthProvider } from '../../context/AuthContext';
import ClientProviders from '@/utils/ClientProviders';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
//TODO : Description
export const metadata = {
  metadataBase: new URL('https://www.globalmediation.co.uk'),
  title: 'Global Mediation - Mediation Services in London & Nationwide',
  description:
    'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
  icons: {
    apple: '/appleTouch.png',
  },
  openGraph: {
    title: 'Global Mediation - Mediation Services in London & Nationwide',
    description:
      'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
    url: 'https://www.globalmediation.co.uk/',
    siteName: 'Global Mediation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Mediation - Mediation Services in London & Nationwide',
    description:
      'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
  },
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Global Mediation',
    url: 'https://www.globalmediation.co.uk',
    logo: 'https://www.globalmediation.co.uk/newlogo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '020 8441 1355',
      contactType: 'customer service',
      email: 'send@globalmediation.co.uk',
    },
    sameAs: [
      'https://www.facebook.com/GlobalMediation',
      'https://www.linkedin.com/in/global-mediation-63b4b6136/',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Molteno House, 302 Regents Park Road, Finchley',
      addressLocality: 'London',
      postalCode: 'N3 2JX',
      addressCountry: 'UK',
    },
  };

  return (
    <html lang="en">
      <body id="root" className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Cookie Consent */}
        <Script
          src={`https://cdn-cookieyes.com/client_data/6eb6d458f1c3a1f004dc5fa2/script.js`}
          strategy="beforeInteractive"
        ></Script>

        {/* Google Anlytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4EDYXWBRCY" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4EDYXWBRCY');
          `}
        </Script>

        <Analytics />
        <UserbackWidget />
        <Script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js" strategy="afterInteractive" />
        <Script
          src="https://files.bpcontent.cloud/2025/04/20/21/20250420213141-RFCIFB7R.js"
          strategy="afterInteractive"
        />

        {/* <Navbar /> */}
        {/* <AuthProvider>{children}</AuthProvider> */}
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
