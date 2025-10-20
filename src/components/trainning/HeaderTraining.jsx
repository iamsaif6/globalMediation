import banner from '/public/global_2025-88.jpg';
import Link from 'next/link';

export const HeaderTraining = () => {
  return (
    <header
      style={{
        backgroundImage: `url('${banner.src}')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
      className=" pt-[187px] h-auto lg:h-screen relative flex items-center md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
        <h1 className="font-semibold tracking-[-4%] max-w-[900px] leading-[120%] text-5xl md:[55px] lg:text-[65px] !text-white">
          Mediation Training: <br /> Learn, Qualify <br /> and Specialise
        </h1>
        <p className="text-white mt-[18px] max-w-[700px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-base md:text-lg">
          Explore accredited mediation training programmes designed for aspiring mediators and professionals looking to build their skills
          in conflict resolution. Our hands-on courses help you grow with confidence, guided by expert trainers and real-world practice.
        </p>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <button
            title=" Enroll in a Mediation Training Program Today"
            className={`bg-primary md:block hidden  cursor-pointer border  border-primary font-semibold text-lg text-[#FCFCFD] px-2 md:px-12 py-3 rounded-[40px]`}
          >
            <Link title="Contact Us for Upcoming Course Dates" className="w-full" target="_blank" href={'https://www.globaltraining.uk/'}>
              Enroll in a Mediation Training Program Today
            </Link>
          </button>
          <button
            title=" Enroll in a Mediation Training Program Today"
            className={`bg-primary block md:hidden  cursor-pointer border  border-primary font-semibold text-lg text-[#FCFCFD] px-5 py-3 rounded-[40px]`}
          >
            <Link title="Contact Us for Upcoming Course Dates" className="w-full" target="_blank" href={'https://www.globaltraining.uk/'}>
              Enquire today
            </Link>
          </button>

          <button className="bg-secondary font-semibold border border-secondary text-lg text-[#FCFCFD] px-3 md:px-[48px] py-3 rounded-[40px] ">
            <Link
              title="Contact Us for Upcoming Course Dates"
              className="w-full"
              target="_blank"
              href={'https://www.globaltraining.uk/contact-us'}
            >
              Contact Us for Upcoming Course Dates
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};
