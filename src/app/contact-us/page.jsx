import Header from '@/components/shared/Header';
import React from 'react';
import contactUsCover from '/public/contactUSCover.png';
import Map from '@/components/service/Map';
import CTA from '@/components/shared/CTA';

const ContactUs = () => {
  return (
    <div>
      <Header title={'Contact us'} subTitle={'Direct users to reach out for consultations or general inquiries'} cover={contactUsCover} />
      {/* Contact us steps */}
      <div className="grid bg-[#F9F8FF] grid-cols-3 gap-12 py-16 px-5 md:px-16 md:py-[80px] ">
        <div className="col-span-3 lg:col-span-1">
          <div className="mb-6 border border-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M5.89258 5H18.8926C19.6882 5 20.4513 5.31607 21.0139 5.87868C21.5765 6.44129 21.8926 7.20435 21.8926 8V17C21.8926 17.7956 21.5765 18.5587 21.0139 19.1213C20.4513 19.6839 19.6882 20 18.8926 20H5.89258C5.09693 20 4.33387 19.6839 3.77126 19.1213C3.20865 18.5587 2.89258 17.7956 2.89258 17V8C2.89258 7.20435 3.20865 6.44129 3.77126 5.87868C4.33387 5.31607 5.09693 5 5.89258 5ZM5.89258 6C5.39258 6 4.95258 6.17 4.61258 6.47L12.3926 11.5L20.1726 6.47C19.8326 6.17 19.3926 6 18.8926 6H5.89258ZM12.3926 12.71L4.02258 7.28C3.94258 7.5 3.89258 7.75 3.89258 8V17C3.89258 17.5304 4.10329 18.0391 4.47836 18.4142C4.85344 18.7893 5.36215 19 5.89258 19H18.8926C19.423 19 19.9317 18.7893 20.3068 18.4142C20.6819 18.0391 20.8926 17.5304 20.8926 17V8C20.8926 7.75 20.8426 7.5 20.7626 7.28L12.3926 12.71Z"
                fill="#43006A"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-[32px] mb-4">Email</h4>
          <p className="text-[#667085] mb-6 font-normal text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
          </p>
          <a className="text-secondary font-semibold text-[20px]" href="mailto:DARS@globalmediation.co.uk">
            DARS@globalmediation.co.uk
          </a>
        </div>

        <div className="col-span-3 lg:col-span-1">
          <div className="mb-6 border border-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
              <path
                d="M8.05357 3.11122L7.2503 3.3532C6.53507 3.5689 5.89634 3.98442 5.40928 4.55086C4.92223 5.11731 4.60712 5.8111 4.50105 6.55058C4.16832 8.86739 4.91221 11.5763 6.70583 14.6829C8.49497 17.7817 10.4645 19.7781 12.6323 20.652C13.3288 20.9327 14.0913 21.0075 14.8291 20.8675C15.5669 20.7275 16.249 20.3785 16.7943 19.8622L17.4015 19.2863C17.7958 18.9131 18.0412 18.4095 18.0921 17.869C18.143 17.3285 17.9959 16.7879 17.6782 16.3477L16.159 14.2415C15.9537 13.9572 15.6644 13.7442 15.3319 13.6325C14.9994 13.5208 14.6403 13.516 14.3049 13.6186L12.0072 14.3211L11.9478 14.3323C11.6946 14.3693 11.1098 13.8214 10.3816 12.5599C9.61977 11.2402 9.46292 10.4683 9.67242 10.2689L10.8409 9.17884C11.2678 8.78024 11.5594 8.25816 11.6749 7.68566C11.7904 7.11316 11.724 6.51887 11.4851 5.98594L10.7434 4.33796C10.5204 3.84205 10.1247 3.44415 9.62999 3.21844C9.1353 2.99274 8.57429 2.95463 8.05357 3.11122ZM9.72396 4.79729L10.4634 6.44527C10.6069 6.76492 10.6469 7.12142 10.5777 7.46492C10.5086 7.80841 10.3339 8.12172 10.078 8.36101L8.90613 9.45219C8.15552 10.1625 8.40423 11.3747 9.41251 13.1201C10.3603 14.7625 11.2252 15.5736 12.155 15.4324L12.294 15.4033L14.6332 14.6897C14.745 14.6553 14.8647 14.6568 14.9757 14.694C15.0866 14.7312 15.1831 14.8021 15.2516 14.8969L16.7707 17.0031C16.9298 17.2232 17.0035 17.4936 16.9782 17.7639C16.9528 18.0343 16.8301 18.2863 16.6329 18.473L16.0246 19.0488C15.6351 19.4174 15.148 19.6665 14.6211 19.7664C14.0943 19.8662 13.5498 19.8128 13.0524 19.6123C11.1501 18.846 9.35201 17.0233 7.67714 14.1228C5.99779 11.2156 5.31776 8.74304 5.61016 6.70967C5.68585 6.18136 5.91091 5.68568 6.25885 5.28098C6.60678 4.87628 7.0631 4.57942 7.57407 4.42534L8.37734 4.18336C8.63776 4.1051 8.91776 4.12424 9.16512 4.2372C9.41248 4.35016 9.61031 4.54923 9.72171 4.79729"
                fill="#43006A"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-[32px] mb-4">Phone</h4>
          <p className="text-[#667085] mb-6 font-normal text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
          </p>
          <a className="text-secondary font-semibold text-[20px]" href="tel:+1 (555) 000-0000">
            +1 (555) 000-0000
          </a>
        </div>

        <div className="col-span-3 lg:col-span-1">
          <div className="mb-6 border border-secondary w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M12.5786 21.25C17.6861 21.25 21.8086 17.1075 21.8086 11.98C21.8086 6.8725 17.6861 2.75 12.5786 2.75M12.5786 21.25C7.45109 21.25 3.30859 17.1075 3.30859 11.98C3.30859 6.8725 7.45109 2.75 12.5786 2.75M12.5786 21.25V2.75M20.5846 7.375H4.53859M20.6361 16.5125H4.48709M3.35859 12H21.7586"
                stroke="#43006A"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5686 21.25C15.1226 21.25 17.1836 17.1075 17.1836 11.98C17.1836 6.8725 15.1226 2.75 12.5686 2.75C10.0046 2.75 7.93359 6.8725 7.93359 11.98C7.93359 17.1075 10.0046 21.25 12.5686 21.25Z"
                stroke="#43006A"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-[32px] mb-4">Website</h4>
          <p className="text-[#667085] mb-6 font-normal text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.
          </p>
          <a target="_blank" className="text-secondary font-semibold text-[20px]" href="www.globalmediation.co.uk">
            www.globalmediation.co.uk
          </a>
        </div>
      </div>
      <Map />
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'#'}
        Button1Text={'Enrol in a Mediation Training Program Today'}
        Button2Link={'#'}
        Button2Text={'Contact Us for Upcoming Course Dates'}
      />
    </div>
  );
};

export default ContactUs;
