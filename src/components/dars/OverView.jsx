import React from 'react';
import service1 from '/public/DARS 1.jpg';
import Image from 'next/image';
import Link from 'next/link';
const OverView = () => {
  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px] grid grid-cols-2 items-center gap-[80px]">
        <div className="relative max-h-[480px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl  overflow-hidden">
          <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
          <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-medium text-4xl md:text-5xl leading-[120%]">DARS (Dispute Avoidance and Resolution Service)</h2>
          <p className="text-[#667085] text-base md:text-lg leading-[150%] my-6">
            In disagreement with your school or Education Authority about SEND support? DARS can help — a FREE, independent service for
            resolving disputes. DARS (Dispute Avoidance and Resolution Service) is a FREE and independent service provided by Global
            Mediation. <br /> <br />
            All meetings are led by professionally trained, SEND-accredited mediators who are experienced in supporting families and
            education professionals through disagreement.
          </p>
          <div>
            <button
              className={`bg-primary px-5 lg:max-w-max  border block border-primary font-semibold text-base lg:text-lg text-[#FCFCFD] lg:px-12 py-3 rounded-[40px]`}
            >
              <Link target="_blank" className="w-full" href={'/PDF/V3_Why use DARS_Leaflet.pdf'}>
                Download PDF
              </Link>
            </button>
          </div>
          <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
            <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverView;
