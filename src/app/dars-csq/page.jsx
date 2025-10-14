import React from 'react';
import overlay from '/public/OverlayBottom.png';
import CsqForm from './CsqForm';

export const metadata = {
  title: 'DARS CSQ - Global Mediation',
  description:
    'Complete the DARS CSQ form to submit your dispute assessment and resolution request with Global Mediation. Streamlined and professional dispute resolution made easy.',
  openGraph: {
    title: 'DARS CSQ - Global Mediation',
    description:
      'Complete the DARS CSQ form to submit your dispute assessment and resolution request with Global Mediation. Streamlined and professional dispute resolution made easy.',
    url: 'https://www.globalmediation.co.uk/dars-csq',
    siteName: 'Global Mediation',
    images: [
      {
        url: 'https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DARS CSQ - Global Mediation',
    description:
      'Complete the DARS CSQ form to submit your dispute assessment and resolution request with Global Mediation. Streamlined and professional dispute resolution made easy.',
    images: ['https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg'],
  },
};

const page = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${overlay.src}')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
      className="pt-[120px] md:pt-[150px] mx-auto"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">CSQ Form</h1>
      <CsqForm />
    </div>
  );
};

export default page;
