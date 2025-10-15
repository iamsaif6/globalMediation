import React from 'react';
import overlay from '/public/OverlayBottom.png';
import Form from './Form';

export const metadata = {
  title: 'Diversity Form - Global Mediation',
  description:
    'Submit your feedback through the DARS Facilitator Evaluation Form to help Global Mediation improve its dispute resolution services and facilitator performance.',
  openGraph: {
    title: 'Diversity Form - Global Mediation',
    description:
      'Submit your feedback through the Diversity Form to help Global Mediation improve its dispute resolution services and facilitator performance.',
    url: 'https://www.globalmediation.co.uk/dars-facilitator-evaluation-form',
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
    title: 'Diversity Form - Global Mediation',
    description:
      'Submit your feedback through the Diversity Form to help Global Mediation improve its dispute resolution services and facilitator performance.',
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
      className="pt-[120px] pb-[120px] md:pt-[150px] mx-auto"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Diversity form</h1>
      <Form />
    </div>
  );
};

export default page;
