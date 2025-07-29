import Link from 'next/link';
import React from 'react';
import logo from '/public/newlogo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] relative text-black py-12 md:py-[100px] mt-10  px-5 md:px-16 ">
      <div className="flex flex-col md:flex-row gap-12 relative z-10 justify-between pb-[70px] border-b">
        <div>
          <Link href="/" className="flex items-center">
            <Image className="max-w-[150px] w-full md:max-w-[250px]" alt="Mediation Logo" width={250} height={250} src={logo} />
          </Link>
          <div className="mt-8 space-y-6">
            <p>
              <span className="font-arial text-sm ">Address:</span>
              <span className="block mt-1 leading-[140%] text-sm md:text-lg">
                Molteno House, 302 Regents Park Road, <br /> Finchley, N3 2JX
              </span>
            </p>
            <p>
              <span className="font-arial text-sm ">Contact:</span>
              <a href="tel:020 8441 1355" className="block mt-1 leading-[140%] text-sm md:text-lg">
                020 8441 1355
              </a>
              <a href="mailto:sen@globalmediaiton.co.uk">sen@globalmediaiton.co.uk</a>
            </p>
            <ul className="flex items-center gap-3">
              <li>
                <Link target="_blank" href="https://www.facebook.com/GlobalMediation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                      d="M22 12.5904C22 7.03381 17.5229 2.5293 12 2.5293C6.47715 2.5293 2 7.03381 2 12.5904C2 17.6121 5.65684 21.7745 10.4375 22.5293V15.4987H7.89844V12.5904H10.4375V10.3738C10.4375 7.85226 11.9305 6.45942 14.2146 6.45942C15.3088 6.45942 16.4531 6.65593 16.4531 6.65593V9.13191H15.1922C13.95 9.13191 13.5625 9.90752 13.5625 10.7032V12.5904H16.3359L15.8926 15.4987H13.5625V22.5293C18.3432 21.7745 22 17.6123 22 12.5904Z"
                      fill=""
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 3.5293H8C5.23858 3.5293 3 5.76788 3 8.5293V16.5293C3 19.2907 5.23858 21.5293 8 21.5293H16C18.7614 21.5293 21 19.2907 21 16.5293V8.5293C21 5.76788 18.7614 3.5293 16 3.5293ZM19.25 16.5293C19.2445 18.3219 17.7926 19.7738 16 19.7793H8C6.20735 19.7738 4.75549 18.3219 4.75 16.5293V8.5293C4.75549 6.73665 6.20735 5.28479 8 5.2793H16C17.7926 5.28479 19.2445 6.73665 19.25 8.5293V16.5293ZM16.75 8.7793C17.3023 8.7793 17.75 8.33158 17.75 7.7793C17.75 7.22702 17.3023 6.7793 16.75 6.7793C16.1977 6.7793 15.75 7.22702 15.75 7.7793C15.75 8.33158 16.1977 8.7793 16.75 8.7793ZM12 8.0293C9.51472 8.0293 7.5 10.044 7.5 12.5293C7.5 15.0146 9.51472 17.0293 12 17.0293C14.4853 17.0293 16.5 15.0146 16.5 12.5293C16.5027 11.335 16.0294 10.1889 15.1849 9.34438C14.3404 8.49989 13.1943 8.02664 12 8.0293ZM9.25 12.5293C9.25 14.0481 10.4812 15.2793 12 15.2793C13.5188 15.2793 14.75 14.0481 14.75 12.5293C14.75 11.0105 13.5188 9.7793 12 9.7793C10.4812 9.7793 9.25 11.0105 9.25 12.5293Z"
                      fill="#00A49F"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.linkedin.com/in/global-mediation-63b4b6136/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 3.5293C3.67157 3.5293 3 4.20087 3 5.0293V20.0293C3 20.8577 3.67157 21.5293 4.5 21.5293H19.5C20.3284 21.5293 21 20.8577 21 20.0293V5.0293C21 4.20087 20.3284 3.5293 19.5 3.5293H4.5ZM8.52076 7.53202C8.52639 8.48827 7.81061 9.07749 6.96123 9.07327C6.16107 9.06905 5.46357 8.43202 5.46779 7.53343C5.47201 6.68827 6.13998 6.00905 7.00764 6.02874C7.88795 6.04843 8.52639 6.6939 8.52076 7.53202ZM12.2797 10.2911H9.75971H9.7583V18.8509H12.4217V18.6512C12.4217 18.2713 12.4214 17.8913 12.4211 17.5112C12.4203 16.4974 12.4194 15.4825 12.4246 14.469C12.426 14.2229 12.4372 13.967 12.5005 13.7321C12.7381 12.8546 13.5271 12.2879 14.4074 12.4272C14.9727 12.5157 15.3467 12.8434 15.5042 13.3764C15.6013 13.7096 15.6449 14.0682 15.6491 14.4156C15.6605 15.4632 15.6589 16.5108 15.6573 17.5585C15.6567 17.9283 15.6561 18.2983 15.6561 18.6681V18.8495H18.328V18.6442C18.328 18.1922 18.3278 17.7403 18.3275 17.2884C18.327 16.1589 18.3264 15.0294 18.3294 13.8995C18.3308 13.389 18.276 12.8856 18.1508 12.392C17.9638 11.6579 17.5771 11.0504 16.9485 10.6117C16.5027 10.2995 16.0133 10.0984 15.4663 10.0759C15.404 10.0733 15.3412 10.0699 15.2781 10.0665C14.9984 10.0514 14.7141 10.036 14.4467 10.09C13.6817 10.2432 13.0096 10.5934 12.5019 11.2107C12.4429 11.2815 12.3852 11.3534 12.2991 11.4607L12.2797 11.485V10.2911ZM5.68164 18.8537H8.33242V10.2966H5.68164V18.8537Z"
                      fill="#00A49F"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[240px] space-y-[6px] flex flex-col text-sm md:text-2xl font-medium">
          <Link href="/">Home</Link>
          <Link className="py-[6px] block" href="/services">
            Services
          </Link>
          <Link className="py-[6px] block" href="/training">
            Training
          </Link>
          {/* <Link className="py-[6px] block" href="/dars-csq">
            DARS
          </Link> */}
          <Link className="py-[6px] block" href="/blog">
            Resources
          </Link>
          <Link className="py-[6px] block" href="/about-us">
            About us
          </Link>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 font-normal relative z-10 gap-8  text-sm flex flex-col-reverse md:flex-row md:items-center justify-between">
        <p>© 2025 Global Mediation. All rights reserved.</p>
        <div className="flex flex-col md:flex-row  gap-4 md:gap-6">
          <Link className="underline" href={'/privacy-statement'}>
            Privacy Policy
          </Link>
          <Link className="underline" href={'/complaints-comments-compliments-policy-2015'}>
            Complaints, Comments & Compliments Policy
          </Link>
          <Link className="underline" href={'/data-protection-policy'}>
            Data Protection Policy
          </Link>
        </div>
      </div>
      {/* Before after blob */}
      <svg
        className=" absolute -translate-y-full md:-translate-y-0 bottom-10 md:top-0 md:bottom-auto left-0 md:left-auto md:right-[15%]"
        xmlns="http://www.w3.org/2000/svg"
        width="280"
        height="288"
        viewBox="0 0 280 288"
        fill="none"
      >
        <path
          d="M138.031 287.77H279.953V147.626C279.989 146.242 279.999 145.012 279.999 143.873C280.078 124.622 276.353 105.545 269.038 87.7378C261.743 70.0946 251.681 54.713 239.184 42.032C226.686 29.3509 211.585 19.1867 194.351 11.7894C177.097 4.38829 158.511 0.59571 139.736 0.645006C114.354 0.645006 90.6766 6.98042 69.3271 19.4624C47.9776 31.9443 30.8807 49.3935 18.5621 71.3198C6.24352 93.2462 0 117.628 0 143.873C0 170.119 6.24863 194.592 18.5621 216.59C30.8756 238.588 47.9521 256.139 69.3169 268.723C90.2018 281.016 113.313 287.388 138.031 287.673V287.77Z"
          fill="#43006a37"
        />
      </svg>
      <svg
        className=" absolute bottom-5 right-[5%]"
        xmlns="http://www.w3.org/2000/svg"
        width="280"
        height="288"
        viewBox="0 0 280 288"
        fill="none"
      >
        <path
          d="M210.704 19.6995C189.826 7.39956 166.712 1.03256 141.984 0.756845V0.644531H0.0418054V140.79C0.0418054 142.173 0.000957796 143.399 0.000957796 144.537C-0.0687821 163.801 3.6706 182.888 11.004 200.701C18.3003 218.352 28.3639 233.736 40.8477 246.419C53.3314 259.102 68.46 269.268 85.6922 276.666C102.926 284.065 121.488 287.867 140.243 287.838C165.619 287.838 189.31 281.501 210.663 269.018C232.015 256.534 249.115 239.082 261.43 217.163C273.745 195.243 280 170.837 280 144.583C280 118.329 273.766 93.8159 261.445 71.8608C249.125 49.9056 232.056 32.2854 210.704 19.6995Z"
          fill="#43006a37"
        />
      </svg>
    </footer>
  );
};

export default Footer;
