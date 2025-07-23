import React from 'react';
import Link from 'next/link';

const CTA = ({ title, subTitle, Button1Text, Button1Link, Button2Text, Button2Link, className }) => {
  function normalizeTitleCase(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const ctaTitle = normalizeTitleCase(title);
  const ctaSubtitle = normalizeTitleCase(subTitle);
  const ctaButton1Text = normalizeTitleCase(Button1Text);
  const ctaButton2Text = normalizeTitleCase(Button2Text);

  return (
    <div className="md:px-16 px-5">
      <div className="py-[84px] overflow-hidden px-8 relative -mt-10 md:p-16 bg-secondary rounded-3xl">
        <div className="z-10 py-10 mx-auto text-white text-center">
          <div className="z-10 relative">
            <div className="max-w-[950px] mx-auto">
              <h4 className="font-medium text-4xl md:text-[54px] leading-[120%] mb-[20px] md:mb-6">{ctaTitle}</h4>
              <p className=" text-base md:text-lg">{ctaSubtitle}</p>
            </div>
            <div className={`mt-8 md:max-w-[950px] ${Button2Text ? 'grid grid-cols-1 md:grid-cols-2' : 'md:grid-cols-1'}  gap-4  mx-auto`}>
              {ctaButton1Text && (
                <button className="bg-primary   font-semibold text-[#FCFCFD] px-6 py-3 rounded-[40px] text-lg">
                  <Link title={ctaButton1Text} className="block w-full text-center" href={Button1Link}>
                    {ctaButton1Text}
                  </Link>
                </button>
              )}
              {ctaButton2Text && (
                <button className="font-semibold  border border-white text-lg text-white px-6 py-3 rounded-[40px]">
                  <Link title={ctaButton2Text} className="block w-full text-center" href={Button2Link}>
                    {ctaButton2Text}
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Shapes */}
        <div className=" absolute top-0 left-0">
          <svg
            className="w-[157px] h-[162px] md:w-[302px] md:h-[309px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 302 309"
            fill="none"
          >
            <path
              d="M152.619 0.123877L0.0555271 0.251038L0.181096 150.905C0.143914 152.392 0.134061 153.715 0.135081 154.938C0.0672163 175.633 4.08846 196.137 11.9679 215.273C19.8259 234.233 30.6563 250.759 44.102 264.38C57.5477 278 73.79 288.913 92.3238 296.85C110.878 304.79 130.861 308.851 151.043 308.781C178.329 308.758 203.776 301.927 226.715 288.489C249.655 275.052 268.018 256.28 281.241 232.698C294.463 209.116 301.153 182.901 301.129 154.687C301.106 126.474 294.367 100.171 281.11 76.5345C267.854 52.8982 249.481 34.0462 226.503 20.5376C204.041 7.34152 179.192 0.51335 152.619 0.228156L152.619 0.123877Z"
              fill="#4E1470"
            />
          </svg>
        </div>
        <div className=" absolute right-0 bottom-0 z-[1]">
          <svg
            className="w-[157px] h-[162px] md:w-[302px] md:h-[309px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 301 309"
            fill="none"
          >
            <path
              d="M148.382 308.655H300.945V158.001C300.984 156.514 300.995 155.192 300.995 153.968C301.08 133.273 297.075 112.766 289.212 93.623C281.37 74.6569 270.553 58.1218 257.119 44.4899C243.684 30.858 227.451 19.9316 208.924 11.9796C190.376 4.02351 170.397 -0.0534584 150.215 -0.000466539C122.929 -0.000466539 97.476 6.81001 74.5256 20.2279C51.5752 33.6458 33.1963 52.4034 19.954 75.9739C6.71169 99.5445 0 125.755 0 153.968C0 182.181 6.71718 208.49 19.954 232.137C33.1908 255.785 51.5478 274.652 74.5146 288.18C96.9656 301.395 121.809 308.244 148.382 308.551V308.655Z"
              fill="#4E1470"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CTA;
