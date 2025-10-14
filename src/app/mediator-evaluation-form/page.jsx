import React from 'react';
import EvaluationForm from './EvaluationForm';
import overlay from '/public/OverlayBottom.png';

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
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Mediator evaluation form</h1>
      <EvaluationForm />
    </div>
  );
};

export default page;
