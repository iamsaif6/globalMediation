import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <div className="py-6">
      <Marquee autoFill>
        <div className="bg-red-500 h-24 mx-[70px] w-24">ok</div>
        <div className="bg-red-500 h-24 mx-[70px] w-24">ok</div>
        <div className="bg-red-500 h-24 mx-[70px] w-24">ok</div>
        <div className="bg-red-500 h-24 mx-[70px] w-24">ok</div>
      </Marquee>
    </div>
  );
};

export default Marque;
