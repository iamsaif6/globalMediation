import CTA from '@/components/shared/CTA';
import React from 'react';
// import heaerImage from '/public/nhs-logo-880x4951.png';
import heaerImage from '/public/nhs-header.jpg';
import Link from 'next/link';
import Head from 'next/head';
import about from '/public/nhs-about.jpg';
import further from '/public/further-info.jpg';
import panel from '/public/mediation_panel.jpg';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export const metadata = {
  title: 'NHS Mediation Scheme',
  description:
    'Global Mediation offers cost-effective, efficient and confidential mediation services for a broad range of personal or professional disputes.',
};

const mediators = [
  {
    name: 'Caroline Lowe',
    cv: '/PDF/Caroline Lowe CV FINAL.pdf',
  },
  {
    name: 'Erica Power',
    cv: '/PDF/Erica Power CV FINAL.pdf',
  },
  {
    name: 'Gareth Thompson',
    cv: '/PDF/Gareth Thompson CV FINAL.pdf',
  },
  {
    name: 'Henry Minto',
    cv: '/PDF/Henry Minto CV FINAL.pdf',
  },
  {
    name: 'Laura Elfield',
    cv: '/PDF/Laura Elfield CV FINAL.pdf',
  },
  {
    name: 'Martin Forde KC',
    cv: '/PDF/Martin Forde KC CV FINAL.pdf',
  },
  {
    name: 'Tabitha Nice',
    cv: '/PDF/Tabitha Nice CV FINAL.pdf',
  },
  {
    name: 'Tessa Herman',
    cv: '/PDF/Tessa Herman CV FINAL.pdf',
  },
];

const steps = [
  {
    number: 1,
    title: 'Submit enquiry',
    description: 'Submit an enquiry using Global Mediation’s NHS form. We’ll collect initial case details and check eligibility.',
  },
  {
    number: 2,
    title: 'Mediator appointed',
    description:
      'Parties may nominate a mediator, or Global Mediation will appoint a suitable professional with the relevant expertise and accreditation. We carry out conflict-of-interest checks.',
  },
  {
    number: 3,
    title: 'Preparation',
    description:
      'Agree on the mediation date and format (online, in person or hybrid). We’ll support parties to prepare documents, and offer individual calls ahead of the session if needed.',
  },
  {
    number: 4,
    title: 'Mediation day',
    description:
      'Joint sessions take place with the mediator present, including private breakout spaces. Parties present their views, explore options, and negotiate with structured support.',
  },
  {
    number: 5,
    title: 'Settlement or next steps',
    description: 'If agreement is reached, it’s written up and signed. If not, next steps are agreed and mediation feedback is collected.',
  },
];

const documents = [
  {
    title: 'NHS mediation scheme procedure',
    description: 'What is mediation, how to prepare, what to expect & confidentiality',
    link: '/PDF/NHS Resolution  Claims Mediation  Service Procedure- 2025.pdf',
  },
  {
    title: 'Draft Mediation Agreement',
    description: '',
    link: '/PDF/NHS Model Hybrid Mediation Agreement- January 2025.pdf',
  },
  {
    title: 'Post mediation feedback form',
    description: '',
    link: '/PDF/Feedback Questionnaire.pdf',
  },
];

const MainServices = () => {
  return (
    <div>
      <Head>
        <title>Services - Global Mediation</title>
        <meta name="description" content="" />

        <meta itemprop="name" content="Services - Global Mediation" />
        <meta itemprop="description" content="" />
        <meta itemprop="image" content="" />

        <meta property="og:url" content="https://www.globalmediation.co.uk/service" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - Global Mediation" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Global Mediation" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Head>
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(62, 0, 101, 0.90) 5.68%, rgba(62, 0, 101, 0.31) 79.4%, rgba(255, 255, 255, 1) 100%)`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="pt-[137px] borer grid gap-[50px] grid-cols-1 lg:grid-cols-2 relative md:pt-[180px] gap-y-12 lg:gap-y-0  md:pb-[70px] px-5 md:px-[60px] items-center"
      >
        <div className="order-2 lg:order-1  ">
          <div className="min-h-[200px] lg:min-h-[400px] flex items-center justify-center lg:max-w-[1130px]  mx-auto overflow-hidden  rounded-3xl p-6 w-full ">
            <Image alt="ZSL" className="object-cover w-full h-full rounded-3xl" src={heaerImage} />
          </div>
        </div>
        <div className="text-center order-1 lg:order-2 lg:text-left  relative z-10 ">
          <h2 className="font-medium mb-4 tracking-[-4%] leading-[120%] text-[30px]  lg:text-[50px] text-white">NHS Mediation Scheme</h2>
          <p className="  justify-center lg:justify-start  items-center text-sm lg:text-base text-black">
            Independent mediation support, delivered by Global Mediation on behalf of NHS Resolution <br /> <br />
            Global Mediation has been appointed by NHS Resolution to deliver workplace and complaint-related mediation services across the
            NHS.
            <br /> <br />
            The service provides impartial, highly structured support for resolving disputes that arise within NHS settings. It offers a
            calm, confidential space for all parties to be heard, reducing escalation, improving communication, and promoting lasting
            resolution.
            <br /> <br />
            Mediators are accredited, experienced, and approved by NHS Resolution, with specialist expertise in sensitive and complex
            health-based contexts. Every mediation follows a fair and consistent process, designed specifically with NHS environments in
            mind.
          </p>
          {/* <div className="flex md:block mt-10 justify-center">
            <button
              className={`bg-primary inline-block border-primary font-semibold text-lg text-[#FCFCFD] px-[38px] py-3 rounded-3xl lg:rounded-[40px]`}
            >
              <Link className="w-full" href="/contact">
                Contact us
              </Link>
            </button>
          </div> */}
        </div>
      </header>

      {/* about */}
      {/* <div className=" pt-16 pb-0 px-5 md:px-16 md:py-[80px] grid grid-cols-2 gap-[80px]">
        <div className="col-span-2 flex justify-center  flex-col gap-9 lg:col-span-1">
          <h2 className="font-medium text-4xl md:text-5xl  leading-[120%]">About the NHS Mediation Scheme</h2>
          <p className="text-black text-base md:text-lg  leading-[150%]">
            The NHS Mediation Scheme offers structured, impartial support to help resolve disputes involving NHS bodies, staff, and service
            users. <br />
            <br />
            Run by Global Mediation, the scheme is designed to support resolution without the need for litigation — offering a confidential,
            independent space for all parties to be heard and work towards agreement.
            <br />
            <br />
            Whether raised by individuals, Trusts or professionals, each case is matched with a trained and accredited mediator, following a
            clear and fair process designed with NHS settings in mind.
          </p>
          <div className="relative my-0 block md:hidden  rounded-3xl overflow-hidden">
            <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={about} />
          </div>
        </div>
        <div className="relative  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
          <Image className="object-cover w-full max-h-[700px]  h-full relative z-0" alt={'Experienced Leader In Mediation'} src={about} />
        </div>
      </div> */}

      <div className="">
        <div className="bg-white  py-16 lg:py-24">
          <div className="">
            {/* <section className=" bg-[#F9F8FF] pt-16 pb-0 px-5 md:px-16 md:py-[80px]">
              <div className="lg:text-center mb-16">
                <h2 className=" lg:text-5xl  text-purple-800 mb-6 font-medium text-4xl md:text-5xl  leading-[120%]">How it works</h2>
                <p className=" text-black text-base md:text-lg leading-[150%] my-6 max-w-3xl mx-auto">
                  A streamlined process to support you through NHS mediation – from enquiry to resolution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {steps.slice(0, 3).map((step, index) => (
                  <div key={step.number} className="group relative">
                    <div className="bg-[#F3F1FF]  rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#43006aa3] h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <p className="font-medium  text-secondary my-[30px] lg:my-[40px] text-2xl">{step.title}</p>
                      <p className=" text-base lg:text-lg  mb-[25px] font-normal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                {steps.slice(3).map((step, index) => (
                  <div key={step.number} className="group relative">
                    <div className="bg-[#F3F1FF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#43006aa3] h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <p className="font-medium  text-secondary my-[30px] lg:my-[40px] text-2xl">{step.title}</p>
                      <p className="text-base lg:text-lg  mb-[25px] font-normal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Further Information Section */}
            <section className="mb-10 lg:mb-20 bg-secondary pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <div className="text-left mb-16">
                    <h2 className=" lg:text-5xl  !text-white mb-6 font-medium text-4xl md:text-5xl  leading-[120%]">How it works</h2>
                    <p className=" text-white text-base md:text-lg leading-[150%] my-6 max-w-3xl ">
                      A streamlined process to support you through NHS mediation – from enquiry to resolution.
                    </p>
                  </div>
                  <p className="text-white text-base md:text-lg  leading-[150%]">For full guidance on how the scheme works, please see:</p>

                  <div className="space-y-4 mt-10 text-white">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                        <div>
                          <Link target="_blank" href={doc?.link} className="font-normal text-gray-800 flex items-center">
                            <strong className="text-white">{doc.title}</strong> <span className="text-white font-medium">(PDF)</span>
                            <p className="bg-primary ml-2 p-[2px] text-white rounded-full">
                              <ArrowDown size={12} />
                            </p>
                          </Link>
                          <p className="text-white  mt-1">— {doc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:pl-8">
                  <div className="relative">
                    <Image src={further} alt="NHS Documentation" className="w-full h-auto rounded-2xl shadow-lg" />
                  </div>
                </div>
              </div>
            </section>

            {/* Mediators Panel Section */}
            <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="">
                  <div className="relative">
                    <Image
                      src={panel}
                      alt="Professional Mediators"
                      className="w-full max-h-[700px] object-cover h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="lg:text-5xl  text-purple-800 mb-6 font-medium text-4xl md:text-5xl  leading-[120%]">Meet the mediators</h2>
                  <p className="text-black text-base md:text-lg  leading-[150%]">
                    Global Mediation works with a trusted panel of accredited mediators, all approved by NHS Resolution. Each brings deep
                    experience in workplace, clinical and complaint-based mediation, with a focus on empathy, professionalism and
                    neutrality.
                  </p>

                  <div className="border border-gray-200 mt-7 rounded-3xl bg-white">
                    <button
                      // onClick={() => setIsExpanded(!isExpanded)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-4xl"
                    >
                      <span className="text-lg font-medium text-gray-800">View mediators panel ({mediators.length} mediators)</span>
                      {/* {isExpanded ? <ChevronUp className="w-5 h-5 " /> : <ChevronDown className="w-5 h-5 " />} */}
                    </button>

                    {true && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          {mediators.map((mediator, index) => (
                            <Link
                              key={index}
                              href={mediator.cv}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                              <span className="text-black font-medium hover:underline">{mediator.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* About Global Mediation Section */}
            <section className="pt-16 pb-10 px-5 md:px-16 md:py-[80px] bg-secondary">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="lg:text-5xl !text-white mb-6 font-medium text-4xl md:text-5xl  leading-[120%]">Get in touch</h2>
                  <p className="text-white text-base md:text-lg  leading-[150%]">
                    To refer a case, request further information, or discuss commissioning options, please get in touch using the contact
                    form. A member of our team will respond promptly.
                  </p>
                  <button
                    className={`bg-primary mt-10 inline-block border-primary font-semibold text-lg text-[#FCFCFD] px-[38px] py-3 rounded-3xl lg:rounded-[40px]`}
                  >
                    <Link className="w-full" href="/contact">
                      Contact us
                    </Link>
                  </button>
                </div>

                <div className="lg:pl-8">
                  <div className="relative">
                    <Image
                      width={1000}
                      height={1000}
                      src={'https://global-mediation.s3.eu-west-2.amazonaws.com/large-files/global_2025-6.jpg'}
                      alt="About Global Mediation"
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <CTA
        title={'Ready to resolve your dispute?'}
        subTitle={'Your trusted partner in conflict resolution'}
        Button1Text={'Schedule consultation'}
        Button1Link={'/contact'}
        // Button2Text={'Contact us'}
        // Button2Link={'/contact'}
      />
    </div>
  );
};

export default MainServices;
