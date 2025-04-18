import React from 'react';

const Origins = () => {
  return (
    <div className="bg-[#F9F8FF] relative py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
      <div className="col-span-2 lg:col-span-1 relative z-10">
        <h1 className="leading-[120%] z-20  font-medium text-4xl md:text-4xl lg:text-5xl">The Origins of Global Mediation</h1>
      </div>
      <div className="col-span-2 lg:col-span-1 mt-[0px] lg:mt-[200px]">
        <p className="leading-[150%] text-bas relative z-40">
          Founded by barrister and mediator Adam Gersch, Global Mediation began with a simple idea: that people deserve better ways to
          resolve conflict. Over two decades later, we have grown into a national team working across sectors, from education to healthcare,
          workplaces to families, still driven by that same purpose.
        </p>
      </div>

      <svg
        className="z-0 rotate-45 absolute hidden lg:block -translate-y-full md:-translate-y-0 bottom-5 md:top-2  md:bottom-auto left-[18%]"
        xmlns="http://www.w3.org/2000/svg"
        width="230"
        height="248"
        viewBox="0 0 280 288"
        fill="none"
      >
        <path
          d="M138.031 287.77H279.953V147.626C279.989 146.242 279.999 145.012 279.999 143.873C280.078 124.622 276.353 105.545 269.038 87.7378C261.743 70.0946 251.681 54.713 239.184 42.032C226.686 29.3509 211.585 19.1867 194.351 11.7894C177.097 4.38829 158.511 0.59571 139.736 0.645006C114.354 0.645006 90.6766 6.98042 69.3271 19.4624C47.9776 31.9443 30.8807 49.3935 18.5621 71.3198C6.24352 93.2462 0 117.628 0 143.873C0 170.119 6.24863 194.592 18.5621 216.59C30.8756 238.588 47.9521 256.139 69.3169 268.723C90.2018 281.016 113.313 287.388 138.031 287.673V287.77Z"
          fill="#f3f1fe"
        />
      </svg>
      <svg
        className=" absolute hidden lg:block rotate-[45deg] z-0 -bottom-5 translate-x-full left-[12%]"
        xmlns="http://www.w3.org/2000/svg"
        width="230"
        height="248"
        viewBox="0 0 280 288"
        fill="none"
      >
        <path
          d="M138.031 287.77H279.953V147.626C279.989 146.242 279.999 145.012 279.999 143.873C280.078 124.622 276.353 105.545 269.038 87.7378C261.743 70.0946 251.681 54.713 239.184 42.032C226.686 29.3509 211.585 19.1867 194.351 11.7894C177.097 4.38829 158.511 0.59571 139.736 0.645006C114.354 0.645006 90.6766 6.98042 69.3271 19.4624C47.9776 31.9443 30.8807 49.3935 18.5621 71.3198C6.24352 93.2462 0 117.628 0 143.873C0 170.119 6.24863 194.592 18.5621 216.59C30.8756 238.588 47.9521 256.139 69.3169 268.723C90.2018 281.016 113.313 287.388 138.031 287.673V287.77Z"
          fill="#f3f1fe"
        />
      </svg>
    </div>
  );
};

export default Origins;
