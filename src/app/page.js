import Marque from '@/components/home/Marque';
import MediationCards from '@/components/home/MediationCards';
import Link from 'next/link';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import ServiceCarousel from '@/components/home/ServiceCarousel';
import Serving from '@/components/home/Serving';
import MediationCalculation from '@/components/home/MediationCalculation';
import betterWay from '/public/a betterway 2.jpeg';
import Image from 'next/image';
import LearnMore from '@/components/home/LearnMore';
import CTA from '@/components/shared/CTA';
import WhyMediation from '@/components/home/WhyMediation';
import Header from '@/components/home/Header';
import Head from 'next/head';
import MeetOurFounder from '@/components/home/MeetOurFounder';

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Mediation Services | Move Forward with Confidence</title>
        <meta
          name="description"
          content="Expert mediation services to help resolve disputes, rebuild trust, and move forward on your terms."
        />
        <meta name="keywords" content="mediation, conflict resolution, professional mediators, dispute resolution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="root">
        <Header />
        <Marque />
        <MediationCards />
        {/*Start Learn About Mediation */}
        <section
          aria-label="A Better Way to Resolve Disputes"
          className="grid grid-cols-2 lg:max-w-[1318px] mx-auto gap-4 my-[64px] md:my-[80px] px-5 md:px-[60px]"
        >
          <div className="col-span-2 lg:col-span-1 text-white bg-primary rounded-xl lg:rounded-3xl px-6 lg:px-[58px] py-[34px] lg:py-[61px]">
            <h2 className="font-medium leading-[120%] text-[32px] lg:text-5xl mb-[18px]">A better way to resolve disputes</h2>
            <p className=" text-base md:text-lg mb-5 md:mb-6">
              Mediation offers a cost-effective, faster alternative to going to court. It gives people a way to move forward without the
              emotional and financial strain of litigation. Whether you’re navigating a workplace issue, family disagreement or commercial
              dispute, mediation brings clarity, structure and a chance to be heard.
            </p>
            <div className="flex justify-center md:block">
              <Link
                title="Learn About Mediation"
                className=" bg-white mt-3 inline-block  font-semibold text-lg text-secondary px-6 md:px-[57px] py-3 rounded-3xl lg:rounded-[40px] "
                href="/about"
              >
                Learn about mediation
              </Link>
            </div>
          </div>
          <div className="col-span-2  overflow-hidden lg:col-span-1 bg-gray-500 rounded-xl lg:rounded-3xl">
            <Image className="object-cover object-left h-full w-full" alt="A Better Way" src={betterWay} />
          </div>
        </section>
        {/*End Learn About Mediation */}
        <FeedbackCarousel title={'What our clients say'} />
        <WhyMediation />
        <ServiceCarousel />
        <Serving />
        {/* Team Carousel */}
        <section className="bg-secondary py-16 md:py-[80px] mt-[10px] md:mt-[80px]">
          <h4 className="text-4xl md:text-5xl mb-12 md:mb-[70px] text-white text-center px-4 font-medium">Meet the founder</h4>
          <MeetOurFounder />
          {/* <TeamCarousel /> */}
        </section>

        <MediationCalculation />
        <LearnMore />
        <CTA
          title={'Ready to resolve your dispute?'}
          subTitle={'We are here to help. Let’s talk'}
          Button1Text={'Schedule consultation'}
          Button1Link={'/contact'}
          Button2Text={'Contact us'}
          Button2Link={'/contact'}
        />
      </div>
    </>
  );
}
