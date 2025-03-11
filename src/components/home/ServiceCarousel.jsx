'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServiceCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 600,
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
    customPaging: i => <div className=" w-[50px]  h-1 rounded-xl bg-[#EBEBEB]"></div>,
  };
  return (
    <section className="slick-bar">
      <div className="max-w-[800px] mx-auto text-center md:text-center mb-[70px]">
        <h1 className="font-medium text-4xl md:text-5xl mb-5 md:mb-6">Global Mediation Services</h1>
        <p className=" leading-[150%] text-base md:text-lg font-normal">
          Tailored mediation solutions for families, businesses, and communities across the UK
        </p>
      </div>
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="px-[15px] mb-[40px]">
            <div className=" rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA]  my-9 py-10  md:py-[49px] px-5 md:px-6  ">
              <p className="mb-[54px]">Icon Here</p>
              <div>
                <h3 className=" text-lg md:text-2xl leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                  Workplace and Employment Mediation
                </h3>
                <p className="text-sm md:text-lg leading-[150%] font-normal mb-[26px]">
                  Resolving team conflicts, grievances, and workplace challenges
                </p>
                <Link className="text-sm md:text-lg border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold" href={'#'}>
                  <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="px-[15px] mb-[40px]">
            <div className=" rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA]  my-9 py-10  md:py-[49px] px-5 md:px-6  ">
              <p className="mb-[54px]">Icon Here</p>
              <div>
                <h3 className=" text-lg md:text-2xl leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                  Workplace and Employment Mediation
                </h3>
                <p className="text-sm md:text-lg leading-[150%] font-normal mb-[26px]">
                  Resolving team conflicts, grievances, and workplace challenges
                </p>
                <Link className="text-sm md:text-lg border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold" href={'#'}>
                  <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="px-[15px] mb-[40px]">
            <div className=" rounded-3xl border bg-[#F3F1FF] border-[#D4DBEA]  my-9 py-10  md:py-[49px] px-5 md:px-6  ">
              <p className="mb-[54px]">Icon Here</p>
              <div>
                <h3 className=" text-lg md:text-2xl leading-[140%] mb-[6px] md:mb-2 font-semibold text-secondary">
                  Workplace and Employment Mediation
                </h3>
                <p className="text-sm md:text-lg leading-[150%] font-normal mb-[26px]">
                  Resolving team conflicts, grievances, and workplace challenges
                </p>
                <Link className="text-sm md:text-lg border-b-[2px] pb-1.5 w-max flex items-center gap-2 font-semibold" href={'#'}>
                  <span>Learn more</span> <ArrowRight strokeWidth={1.5} size={20} />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ServiceCarousel;
