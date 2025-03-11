'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center translate-y-1/2 -translate-x-full absolute -bottom-[12.5px] border border-[#9C9C9C] right-[50px] md:right-[75px] z-30 items-center text-[#9C9C9C]  rounded-full hover:bg-primary hover:border-primary hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center translate-y-1/2 absolute -bottom-[12.5px] border border-[#9C9C9C] right-10 md:right-[60px] z-30   items-center text-[#9C9C9C]  rounded-full hover:bg-primary hover:border-primary hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
}

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    customPaging: i => <div className=" w-2  h-2 rounded-full bg-[#F3F1FF]"></div>,
  };
  return (
    <div className="team-caousel">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-[15px] mb-[80px]">
            <div className="w-full h-[390px] bg-gray-600 rounded-3xl"></div>
            <h3 className="my-3 md:my-6 text-2xl md:text-[32px] font-semibold text-white">Adam Gersch</h3>
            <p className=" leading-[150%] text-base md:text-lg font-normal text-white">
              ‘He is committed to delivering first-rate services to clients and his sparkling personality always shines through and brings a
              smile.’
            </p>
          </div>
          <div className="px-[15px] mb-[80px]">
            <div className="w-full h-[390px] bg-gray-600 rounded-3xl"></div>
            <h3 className="my-6 text-[32px] font-semibold text-white">Adam Gersch</h3>
            <p className=" leading-[150%] text-lg font-normal text-white">
              ‘He is committed to delivering first-rate services to clients and his sparkling personality always shines through and brings a
              smile.’
            </p>
          </div>
          <div className="px-[15px] mb-[80px]">
            <div className="w-full h-[390px] bg-gray-600 rounded-3xl"></div>
            <h3 className="my-6 text-[32px] font-semibold text-white">Adam Gersch</h3>
            <p className=" leading-[150%] text-lg font-normal text-white">
              ‘He is committed to delivering first-rate services to clients and his sparkling personality always shines through and brings a
              smile.’
            </p>
          </div>
          <div className="px-[15px] mb-[80px]">
            <div className="w-full h-[390px] bg-gray-600 rounded-3xl"></div>
            <h3 className="my-6 text-[32px] font-semibold text-white">Adam Gersch</h3>
            <p className=" leading-[150%] text-lg font-normal text-white">
              ‘He is committed to delivering first-rate services to clients and his sparkling personality always shines through and brings a
              smile.’
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
