import React from 'react';
import overlay from '/public/OverlayBottom.png';
import CsqForm from './CsqForm';

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
