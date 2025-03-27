import Marque from '@/components/home/Marque';
import MediationCards from '@/components/home/MediationCards';
import Link from 'next/link';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';
import ServiceCarousel from '@/components/home/ServiceCarousel';
import TeamCarousel from '@/components/home/TeamCarousel';
import Serving from '@/components/home/Serving';
import MediationCalculation from '@/components/home/MediationCalculation';
import betterWay from '/public/a betterway 2.jpeg';
import Image from 'next/image';
import LearnMore from '@/components/home/LearnMore';
import CTA from '@/components/shared/CTA';
import WhyMediation from '@/components/home/WhyMediation';
import Header from '@/components/home/Header';

export default function Home() {
  return (
    <div id="root">
      <Header />
      <Marque />
      <MediationCards />
      {/*Start Learn About Mediation */}
      <section className="grid grid-cols-2 gap-4 my-[64px] md:my-[80px] px-5 md:px-[60px]">
        <div className="col-span-2 lg:col-span-1 text-white bg-primary rounded-3xl px-6 lg:px-[58px] py-[34px] lg:py-[121px]">
          <h2 className="font-medium leading-[120%] text-[32px] lg:text-5xl mb-[18px]">A Better Way to Resolve Disputes</h2>
          <p className=" text-[10px] md:text-lg mb-5 md:mb-6">
            Mediation offers a cost-effective, faster alternative to going to court. It gives people a way to move forward without the
            emotional and financial strain of litigation. Whether you’re navigating a workplace issue, family disagreement or commercial
            dispute, mediation brings clarity, structure and a chance to be heard.
          </p>
          <button className=" bg-white font-normal text-xs md:text-lg text-black px-6 md:px-[48px] md:py-3 py-2 rounded-[40px] ">
            <Link className="w-full  " href="/about-us">
              Learn About Mediation
            </Link>
          </button>
        </div>
        <div className="col-span-2  overflow-hidden lg:col-span-1 bg-gray-500 rounded-3xl">
          <Image className="object-cover object-left h-full w-full" alt="A Better Way" src={betterWay} />
        </div>
      </section>
      {/*End Learn About Mediation */}
      <FeedbackCarousel title={'What Our Clients Say'} />
      <WhyMediation />
      <ServiceCarousel />
      {/* Team Carousel */}
      <section className="bg-secondary py-16 md:py-[80px] mt-[60px] md:mt-[80px]">
        <h1 className="text-4xl md:text-5xl mb-12 md:mb-[70px] text-white text-center px-4 font-medium">Meet Our Team</h1>
        <TeamCarousel />
      </section>
      <Serving />
      <MediationCalculation />
      <LearnMore />
      <CTA
        title={'Ready to Resolve Your Dispute?'}
        subTitle={'We are here to help. Let’s talk'}
        Button1Text={'Schedule a Free Consultation Today'}
        Button1Link={'#'}
        Button2Text={'Contact us'}
        Button2Link={'/contact-us'}
      />
    </div>
  );
}
