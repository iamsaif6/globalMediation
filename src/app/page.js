import Header from '@/components/shared/Header';
import Marque from '@/components/home/Marque';
import MediationCards from '@/components/home/MediationCards';
import Link from 'next/link';
import FeedbackCarousel from '@/components/home/FeedbackCarousel';

export default function Home() {
  return (
    <div>
      <Header
        title={'Replacing Conflict with Harmony'}
        subTitle={'Professional mediation services to foster understanding and resolve disputes with care.'}
      />
      <Marque />
      <MediationCards />
      {/*Start Learn About Mediation */}
      <section className="grid grid-cols-2 gap-4 my-[64px] md:my-[80px] px-5 md:px-[60px]">
        <div className="col-span-2 md:col-span-1 text-white bg-primary rounded-3xl px-6 md:px-[58px] py-[34px] md:py-[121px]">
          <h2 className="font-medium leading-[120%] text-[32px] md:text-5xl mb-[18px]">A Better Way to Resolve Disputes</h2>
          <p className=" text-[10px] md:text-lg mb-5 md:mb-6">
            Mediation offers a cost-effective, efficient, and collaborative path to resolving disputes without the stress of litigation. At
            Global Mediation, we specialise in empowering individuals and organisations with impartial and tailored solutions that work.
          </p>
          <button className=" bg-white font-normal text-xs md:text-lg text-black px-6 md:px-[48px] md:py-3 py-2 rounded-[40px] ">
            <Link className="w-full  " href="#">
              Learn About Mediation
            </Link>
          </button>
        </div>
        <div className="col-span-2 md:col-span-1 bg-gray-500 rounded-3xl">ok</div>
      </section>
      {/*End Learn About Mediation */}
      <FeedbackCarousel title={'What Our Clients Say'} />
    </div>
  );
}
