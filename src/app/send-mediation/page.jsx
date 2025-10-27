import React from 'react';
import service1 from '/public/send-1.jpg';
import send2 from '/public/send-2.jpg';
import Button from '@/components/shared/Button';
import Image from 'next/image';
import Introduction from '@/components/service/Introduction';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import FAQ from '@/components/service/FAQ';
import CTA from '@/components/shared/CTA';
import SectionHeading from '@/components/shared/SectionHeading';
import Link from 'next/link';
import overlay from '/public/Overlay.png';
import cover from '/public/sendMediationHeader.jpg';

const wayChoose = 'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/Why Choose Global Mediation for SEND.jpg';

export const metadata = {
  title: 'Send Mediation - Global Mediation',
  description:
    'Submit your mediation requests to Global Mediation. Our professional mediators help resolve disputes efficiently and collaboratively.',
  openGraph: {
    title: 'Send Mediation - Global Mediation',
    description:
      'Submit your mediation requests to Global Mediation. Our professional mediators help resolve disputes efficiently and collaboratively.',
    url: 'https://www.globalmediation.co.uk/send-mediation',
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
    title: 'Send Mediation - Global Mediation',
    description:
      'Submit your mediation requests to Global Mediation. Our professional mediators help resolve disputes efficiently and collaboratively.',
    images: ['https://globalmediation-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2017/08/08144201/About.jpg'],
  },
};

const faqData = [
  {
    key: 1,
    question: 'Is SEND mediation free?',
    answer: 'Yes, in most cases it is fully funded by the local authority.',
  },
  {
    key: 2,
    question: 'Is it required before a tribunal?',
    answer: 'Yes — you’ll need to consider mediation before progressing to tribunal, though you’re not obligated to take part.',
  },
  {
    key: 3,
    question: 'Can a young person request mediation?',
    answer: 'Yes — anyone aged 16 to 25 can request or attend SEND mediation directly.',
  },
  {
    key: 4,
    question: 'Can parents and young people both be involved?',
    answer: 'Yes — mediation can include both, depending on the issue and who the dispute involves.',
  },
];

const page = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url('${typeof cover === 'string' ? cover : cover?.src}')`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
        className=" pt-[187px] relative max-h-[1050px] flex items-center h-screen md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
      >
        <Image width={1200} height={1200} alt="Overlay" src={overlay} className=" absolute top-0 left-0 w-full h-full object-cover" />
        <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
          <h1 className="font-semibold tracking-[-4%] max-w-[900px] 2xl:max-w-[90%] leading-[120%] text-5xl md:text-[65px] xl:text-[4vw] text-white">
            SEND Mediation
          </h1>
          <p className="text-white mt-[25px] md:mt-4 mb-[25px] mr-auto max-w-[700px] md:mb-10 w-[100%] font-normal text-base md:text-lg xl:text-xl">
            Specialist mediation to help resolve disagreements around Special Educational Needs and Disabilities (SEND), including EHCPs,
            school placements, and support provision.
          </p>
          <div className=" flex md:flex-row flex-col items-center gap-4">
            <button
              className={`bg-primary px-5 lg:max-w-max  border block border-primary font-semibold text-base lg:text-lg text-[#FCFCFD] lg:px-12 py-3 rounded-[40px]`}
            >
              <Link className="w-full" href={'/contact'}>
                Speak to a SEND mediation specialist
              </Link>
            </button>
          </div>
        </div>
      </header>

      <Introduction
        title={'SEND Mediation'}
        image={service1}
        subtitle={
          'SEND disputes can be stressful and emotionally overwhelming, since they involve the wellbeing or education of a child or young person. Whether the situation involves formal EHCP decisions, appeals, or long-standing breakdowns in communication, our experienced mediators offer impartial, trusted support every step of the way. Our experienced mediators help families, young people, children, and local authorities work together to find respectful, balanced outcomes, with the child’s needs always at the centre'
        }
        items={[
          'Encourages understanding and cooperation',
          'Avoids lengthy, stressful and costly tribunal processes',
          'Promotes child-focused decisions',
          'Always free of charge',
        ]}
      />
      {/*  */}

      <section className="py-10 md:py-[80px] bg-secondary text-white">
        <div className="px-5 md:px-16 lg:mb-[120px] ">
          <SectionHeading className={'!text-white'} fullWidth title={'Types of SEND Disputes We Support'} />
        </div>
        <div className="mt-[12px] md:mt-[54px]">
          <div className="flex flex-col w-full">
            <div className=" px-5 md:px-16 ">
              <div className={` transition-opacity duration-300 `}>
                <div className=" grid grid-cols-2 items-center gap-[80px]">
                  <div className="col-span-2 lg:col-span-1">
                    <div className="relative my-10 h-[303px] lg:h-[403px] block md:hidden  rounded-3xl overflow-hidden">
                      <Image
                        width={1200}
                        height={1200}
                        className="object-cover w-full h-full relative z-0"
                        alt={'Experienced Leader In Mediation'}
                        src={send2}
                      />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium  mb-8 md:mb-6 !text-white">
                        SEND mediation can help resolve disagreements around:
                      </h3>
                      <ul className=" text-lg">
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Education Health and Care Plan (EHCP) decisions</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>School or placement offers</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Level or type of support provided</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Delays or breakdowns in communication</span>
                        </li>
                        <li className="flex items-center hover:text-black hover:bg-white hover:rounded-2xl group py-6 pl-[20px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                          <span className="inline-block flex-shrink-0 h-[10px] group-hover:bg-primary w-[10px]  bg-white rounded-full"></span>
                          <span>Appeals to SEND tribunal</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center md:block">
                      <button className=" bg-white  mt-10  font-semibold text-lg text-black px-12 py-3 rounded-[40px] ">
                        <Link className="w-full  " href="/contact">
                          Book SEND mediation
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="relative  h-[303px] lg:h-[403px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
                    <Image
                      width={1200}
                      height={1200}
                      className="object-cover w-full h-full relative z-0"
                      alt={'Experienced Leader In Mediation'}
                      src={send2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 md:px-16 md:py-[80px]">
        <SectionHeading
          title={'Understanding the SEND Mediation Process'}
          subTitle={
            'Our role is to support everyone involved in reaching a fair outcome, one that respects the voices of the child, their family, local authority officers and other professionals.'
          }
          center={false}
          fullWidth={true}
        />
        <div className="grid grid-cols-4 gap-[18px] md:gap-8 my-10 md:my-[54px]">
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              1
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Contact Our Team</p>
            <p>We’ll talk you through the process and your options</p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              2
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Arrange a Mediation Session</p>
            <p>We organise a neutral space (virtual or in-person)</p>
          </div>
          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              3
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Take Part in the Mediation Session</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">
                Guided by a professional, experienced and accredited mediator, all parties are supported to share their views, explore
                options, and agree a way forward
              </span>
            </p>
          </div>

          <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-4 lg:col-span-1">
            <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
              4
            </p>
            <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Agreement Summary</p>
            <p className="font-normal text-base md:text-lg">
              <span className="">We provide a written record of outcomes, which can support the formal SEND process</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button padding="small" title={'Request a SEND Mediation Appointment'} href="/about" />
        </div>
      </section>

      {/* Why Choose */}

      <section className="py-16 mb-16 px-5 md:px-16 md:py-[80px] text-white bg-secondary">
        <h2 className="text-4xl md:text-5xl font-medium text-left md:text-center max-w-[760px] mx-auto leading-[120%] mb-5 md:mb-6 !text-white">
          Why choose Global Mediation for SEND?
        </h2>
        <p className="text-base md:text-lg md:text-center  leading-[150%] mb-[56px] md:mb-[78px]">
          We’ve helped thousands of families and local authorities resolve complex, emotionally sensitive disputes, with empathy,
          impartiality, and professionalism. Our SEND mediation team includes experienced specialists with lived experience of the education
          system, disability, and youth support services.
        </p>
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="relative h-[303px] mb-8 mt-4 lg:h-[403px]  block md:hidden col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
            <Image
              width={1200}
              height={1200}
              className="object-cover object-bottom  w-full h-full relative z-0"
              alt={'Experienced Leader In Mediation'}
              src={wayChoose}
            />
          </div>

          <div className="relative  lg:max-h-[403px] max-h-[353px]  h-[600px] mx-auto w-full lg:max-w-auto max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            <Image
              width={1200}
              height={1200}
              className="object-cover w-full h-full relative z-0"
              alt={'Experienced Leader In Mediation'}
              src={wayChoose}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-6 font-semibold text-lg md:text-2xl">Why People Trust Us:</p>
            <ul className="space-y-6 text-base md:text-[20px]">
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  SEND-accredited mediators with deep understanding of legislation
                </p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  Trusted by families, local authorities, schools and other professionals
                </p>
              </li>
              <li className="flex items-center gap-6 py-4 px-[18px] md:px-6 rounded-xl border border-[#624A70]">
                <span className="w-[10px] flex-shrink-0 h-[10px] rounded-full bg-primary block"></span>
                <p className="text-base md:text-lg font-normal leading-[140%]">
                  Calm, inclusive approach that supports better long-term relationships
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <MediationCalculation /> */}
      {/* <FeedbackCarousel title={'What Parents and Young People Say'} subTitle={null} fullWidth={true} /> */}
      <div className="bg-[#F9F8FF]">
        <div className="md:px-16 px-5">
          <div className="py-[84px]  overflow-hidden px-8 relative  md:p-16 bg-secondary rounded-3xl">
            <div className="z-10 py-10 mx-auto text-white text-center">
              <div className="z-10 relative">
                <div className="max-w-[950px] mx-auto">
                  <h4 className="font-medium text-4xl md:text-[54px] leading-[120%] mb-[20px] md:mb-6">
                    Start Your SEND Mediation Journey
                  </h4>
                  <p className=" text-base md:text-lg  text-center">
                    If you’re a parent, carer, young person or professional needing support with a SEND disagreement, we’re here to help.
                    Our highly trained team can speak with you confidentially about your situation and explain your options.
                    <br /> <br />
                    We’re available to take your call from 8am to 10pm, every day. You’ll be treated with empathy, care and confidentiality,
                    whatever your situation.
                  </p>
                </div>
                <div className={`mt-8 md:max-w-[950px] grid grid-cols-1 md:grid-cols-2  gap-4  mx-auto`}>
                  <button className="bg-primary   font-semibold text-[#FCFCFD] px-6 py-3 rounded-[40px] text-lg">
                    <Link className="block w-full text-center" href={'/contact'}>
                      Book a session
                    </Link>
                  </button>
                  <button className="font-semibold  border border-white text-lg text-white px-6 py-3 rounded-[40px]">
                    <Link className="block w-full text-center" href={'/contact'}>
                      Contact our SEND team
                    </Link>
                  </button>
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
      </div>
      <FAQ
        title={'FAQs About SEND Mediation'}
        buttonText={'Speak to a SEND mediation specialist'}
        buttonLink={'/contact'}
        faqData={faqData}
      />
    </div>
  );
};

export default page;
