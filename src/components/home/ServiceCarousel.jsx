'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const ServiceCarousel = () => {
  const sliderRef = useRef(null);

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`flex justify-center -translate-y-1/2  absolute top-1/2 border border-[#9C9C9C] left-0 md:-left-[60px] z-20 items-center text-[#9C9C9C] bg-white  rounded-full hover:bg-primary hover:border-primary hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
        onClick={onClick}
      >
        <ArrowLeft />
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`flex justify-center bg-white -translate-y-1/2 absolute top-1/2 border border-[#9C9C9C] right-0 md:-right-[60px] z-20   items-center text-[#9C9C9C]  rounded-full hover:bg-primary hover:border-primary hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
        onClick={onClick}
      >
        <ArrowRight />
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section aria-label="Global Mediation Services" className="py-[0px] lg:max-w-[1318px] px-5 md:px-[60px] mx-auto slick-bar ">
      <div className="max-w-[800px] px-5 mx-auto lg:text-center md:text-center mb-[20px] lg:mb-[70px]">
        <h2 className="font-medium text-4xl md:text-5xl mb-5 md:mb-6">Global Mediation services</h2>
        <p className=" leading-[150%] text-base md:text-lg font-normal">
          Tailored solutions for workplaces, communities, families and individuals.
        </p>
      </div>

      <div className="relative">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            <div className="px-[45px] lg:px-[15px]  mb-[90px] h-[300px] md:h-[350px]">
              <div className="rounded-[20px]  group hover:bg-secondary hover:text-white duration-200 md:rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA] my-9 py-10 md:py-[49px] px-5 md:px-6 h-full flex flex-col">
                {/* <div className="mb-[54px] group-hover:text-white text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                    <path
                      d="M37.455 5.39644C33.8514 4.85288 30.272 3.32665 26.8161 0.860177C26.7169 0.789456 26.5982 0.751465 26.4765 0.751465H16.2736C16.1519 0.751465 16.0331 0.789456 15.9341 0.860177C12.4782 3.32665 8.89872 4.85288 5.29519 5.39644C4.18361 5.56418 3.37695 6.50167 3.37695 7.62562V21.3526C3.37695 23.7735 3.95951 26.2123 5.10824 28.6014C6.14042 30.7479 7.60302 32.8074 9.4553 34.7227C12.8088 38.1902 17.2082 40.9027 21.2237 41.9787C21.2733 41.9919 21.3242 41.9985 21.375 41.9985C21.4259 41.9985 21.4767 41.9919 21.5263 41.9787C25.5418 40.9027 29.9412 38.1902 33.2948 34.7227C35.147 32.8074 36.6096 30.7479 37.6418 28.6014C38.7906 26.2123 39.3731 23.7735 39.3731 21.3526V7.62562C39.3731 6.50159 38.5664 5.56418 37.455 5.39644ZM38.2042 21.3525C38.2042 30.907 28.3088 38.8735 21.375 40.8081C14.4414 38.8736 4.5459 30.907 4.5459 21.3525V7.62562C4.5459 7.08448 4.93432 6.6331 5.46945 6.55236C9.20306 5.98917 12.8998 4.43097 16.4599 1.92041H26.2902C29.8501 4.43097 33.5469 5.98917 37.2805 6.55236C37.8157 6.6331 38.2041 7.08448 38.2041 7.62562V21.3525H38.2042ZM36.5524 7.61735C32.9907 6.98862 29.4642 5.4993 26.0712 3.19055C25.9742 3.12459 25.8596 3.08927 25.7424 3.08927H17.0076C16.8904 3.08927 16.7758 3.12459 16.6788 3.19055C13.2858 5.4993 9.75939 6.98871 6.1977 7.61735C5.91841 7.66661 5.71484 7.90933 5.71484 8.19289V21.3525C5.71484 23.4803 6.24888 25.6381 7.30202 27.7663C8.22131 29.6238 9.51116 31.4175 11.1358 33.0974C11.3341 33.3025 11.5413 33.5092 11.7515 33.7119C11.9568 33.9098 12.275 33.9306 12.5045 33.7612C12.7339 33.5917 12.8075 33.2815 12.6786 33.027C11.9868 31.6612 11.6361 30.1909 11.6361 28.657V21.0452H31.1139V28.6572C31.1139 30.1911 30.7632 31.6614 30.0712 33.0273C29.9424 33.2817 30.016 33.5921 30.2453 33.7615C30.3491 33.8381 30.471 33.8759 30.5924 33.8759C30.7395 33.8759 30.8858 33.8205 30.9982 33.7122C31.208 33.5099 31.4153 33.3031 31.6141 33.0975C33.2387 31.4176 34.5286 29.624 35.448 27.7665C36.5011 25.6383 37.0351 23.4804 37.0351 21.3527V8.19297C37.0352 7.90933 36.8317 7.6667 36.5524 7.61735ZM28.8471 19.8762H26.1144V15.9077C26.1144 13.5118 24.1652 11.5626 21.7693 11.5626H20.9807C18.5848 11.5626 16.6355 13.5118 16.6355 15.9077V19.8762H13.903V16.3019C13.903 12.1818 17.255 8.82988 21.3751 8.82988C25.4952 8.82988 28.8472 12.1818 28.8472 16.3019V19.8762H28.8471ZM24.9454 19.8762H17.8046V15.9077C17.8046 14.1563 19.2294 12.7316 20.9808 12.7316H21.7694C23.5207 12.7316 24.9455 14.1563 24.9455 15.9077V19.8762H24.9454ZM35.8663 21.3525C35.8663 24.4952 34.5287 27.8066 32.0655 30.8319C32.2102 30.1226 32.2829 29.3965 32.2829 28.6571V20.4607C32.2829 20.1379 32.0212 19.8762 31.6984 19.8762H30.016V16.3019C30.016 11.5373 26.1397 7.66093 21.375 7.66093C16.6103 7.66093 12.7339 11.5373 12.7339 16.3019V19.8762H11.0517C10.7289 19.8762 10.4672 20.1379 10.4672 20.4607V28.6572C10.4672 29.3965 10.5399 30.1226 10.6844 30.8319C8.22131 27.8067 6.88371 24.4952 6.88371 21.3526V8.67825C10.3919 7.98557 13.8545 6.50034 17.1868 4.2583H25.5633C28.8955 6.50034 32.3582 7.98557 35.8664 8.67825V21.3525H35.8663ZM21.375 23.2735C19.4777 23.2735 17.9342 24.8171 17.9342 26.7144C17.9342 27.6682 18.3223 28.5633 19.0081 29.2119V32.6421C19.0081 33.9473 20.0699 35.0091 21.375 35.0091C22.6802 35.0091 23.742 33.9473 23.742 32.6421V29.2119C24.4278 28.5633 24.8159 27.6682 24.8159 26.7145C24.8159 24.8171 23.2724 23.2735 21.375 23.2735ZM22.7925 28.4899C22.6539 28.6008 22.5731 28.7687 22.5731 28.9463V32.6421C22.5731 33.3027 22.0357 33.8401 21.3751 33.8401C20.7146 33.8401 20.1771 33.3027 20.1771 32.6421V28.9463C20.1771 28.7687 20.0964 28.6008 19.9577 28.4899C19.4146 28.0557 19.1032 27.4086 19.1032 26.7145C19.1032 25.4617 20.1224 24.4426 21.3751 24.4426C22.6278 24.4426 23.647 25.4618 23.647 26.7145C23.647 27.4085 23.3355 28.0557 22.7925 28.4899Z"
                      fill="currentColor"
                    />
                  </svg>
                </div> */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-2xl group-hover:!text-white duration-200 leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                    Workplace and employment mediation
                  </h3>
                  <p className="text-base md:text-lg duration-200 leading-[150%] font-normal mb-[26px] flex-grow">
                    Resolve team conflict, grievances and workplace challenges.
                  </p>
                  <Link
                    title="Learn more"
                    className="text-sm md:text-lg duration-300 hover:gap-4 border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
                    href={'/services/Workplace-and-Employment-Mediation'}
                  >
                    <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-[45px] lg:px-[15px] mb-[90px] h-[300px] md:h-[350px]">
              <div className="rounded-[20px] group hover:bg-secondary hover:text-white duration-200 md:rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA] my-9 py-10 md:py-[49px] px-5 md:px-6 h-full flex flex-col">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-2xl group-hover:!text-white duration-200 leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                    Business and commercial mediation
                  </h3>
                  <p className="text-base md:text-lg duration-200 leading-[150%] font-normal mb-[26px] flex-grow">
                    Addressing disputes over contracts, partnerships, and more
                  </p>
                  <Link
                    title="Learn more"
                    className="text-sm md:text-lg duration-300 hover:gap-4 border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
                    href={'/business'}
                  >
                    <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-[45px] lg:px-[15px] mb-[90px] h-[300px] md:h-[350px]">
              <div className="rounded-[20px] group hover:bg-secondary hover:text-white duration-200 md:rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA] my-9 py-10 md:py-[49px] px-5 md:px-6 h-full flex flex-col">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-2xl group-hover:!text-white duration-200 leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                    SEND mediation
                  </h3>
                  <p className="text-base md:text-lg duration-200 leading-[150%] font-normal mb-[26px] flex-grow">
                    Support for families, schools and authorities navigating special educational needs.
                  </p>
                  <Link
                    title="Learn more"
                    className="text-sm md:text-lg duration-300 hover:gap-4 border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
                    href={'/services/send-mediation'}
                  >
                    <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-[45px] lg:px-[15px] mb-[90px] h-[300px] md:h-[350px]">
              <div className="rounded-[20px] group hover:bg-secondary hover:text-white duration-200 md:rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA] my-9 py-10 md:py-[49px] px-5 md:px-6 h-full flex flex-col">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-2xl group-hover:!text-white duration-200 leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                    Family mediation
                  </h3>
                  <p className="text-base md:text-lg duration-200 leading-[150%] font-normal mb-[26px] flex-grow">
                    Calm, impartial support to help you resolve family issues around parenting.
                  </p>
                  <Link
                    title="Learn more"
                    className="text-sm md:text-lg duration-300 hover:gap-4 border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
                    href={'/family-mediation'}
                  >
                    <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-[45px] lg:px-[15px] mb-[90px] h-[300px] md:h-[350px]">
              <div className="rounded-[20px] group hover:bg-secondary hover:text-white duration-200 md:rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA] my-9 py-10 md:py-[49px] px-5 md:px-6 h-full flex flex-col">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-2xl group-hover:!text-white duration-200 leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                    Community mediation
                  </h3>
                  <p className="text-base md:text-lg duration-200 leading-[150%] font-normal mb-[26px] flex-grow">
                    Supportive, impartial mediation to help neighbours
                  </p>
                  <Link
                    title="Learn more"
                    className="text-sm md:text-lg duration-300 hover:gap-4 border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
                    href={'/services/Community-Mediation'}
                  >
                    <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-[45px] lg:px-[15px] mb-[90px] h-[300px] md:h-[350px]">
              <div className="rounded-[20px] group hover:bg-secondary hover:text-white duration-200 md:rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA] my-9 py-10 md:py-[49px] px-5 md:px-6 h-full flex flex-col">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-2xl group-hover:!text-white duration-200 leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                    Civil and legal dispute mediation
                  </h3>
                  <p className="text-base md:text-lg duration-200 leading-[150%] font-normal mb-[26px] flex-grow">
                    A calmer alternative to court in a wide range of legal matters.
                  </p>
                  <Link
                    title="Learn more"
                    className="text-sm md:text-lg duration-300 hover:gap-4 border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
                    href={'/civil'}
                  >
                    <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
