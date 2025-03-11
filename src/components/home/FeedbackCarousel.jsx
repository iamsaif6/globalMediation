'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Button from '../shared/Button';

const FeedbackCarousel = ({ title, subTitle }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section className="py-[80px] slick-bar overflow-hidden">
      <div className="mb-[70px] px-4">
        <h1 className=" text-4xl md:text-5xl font-medium text-center">{title}</h1>
        {subTitle && <p className=" text-[#667085] font-normal text-lg">{subTitle}</p>}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-[15px] mb-[40px]">
            <div className=" rounded-3xl  my-9 py-6 px-5 md:p-[42px] shadow-xl">
              <p className="text-[#656565] leading-[150%] text-sm md:text-lg mb-5 lg:mb-[100px]">
                Meeting was very easy going. Mediator made it simple and welcome. Kept my nerves calm at all times. Meeting was very easy
                going. Mediator made it simple and welcome. Kept my nerves calm at all times.Meeting was very easy going. Mediator made it
                simple and welcome. Kept my nerves calm at all times.
              </p>
              <p className="text-sm md:text-2xl font-semibold text-[#1C1C1C]">Jenny Wilson - Customer</p>
            </div>
          </div>
          <div className="px-[15px]">
            <div className=" rounded-3xl  my-9 p-[42px] shadow-xl">
              <p className="text-[#656565] text-lg mb-[100px]">
                Meeting was very easy going. Mediator made it simple and welcome. Kept my nerves calm at all times. Meeting was very easy
                going. Mediator made it simple and welcome. Kept my nerves calm at all times.Meeting was very easy going. Mediator made it
                simple and welcome. Kept my nerves calm at all times.
              </p>
              <p className="text-2xl font-semibold">Jenny Wilson - Customer</p>
            </div>
          </div>
          <div className="px-[15px]">
            <div className=" rounded-3xl  my-9 p-[42px] shadow-xl">
              <p className="text-[#656565] text-lg mb-[100px]">
                Meeting was very easy going. Mediator made it simple and welcome. Kept my nerves calm at all times. Meeting was very easy
                going. Mediator made it simple and welcome. Kept my nerves calm at all times.Meeting was very easy going. Mediator made it
                simple and welcome. Kept my nerves calm at all times.
              </p>
              <p className="text-2xl font-semibold">Jenny Wilson - Customer</p>
            </div>
          </div>
          <div className="px-[15px]">
            <div className=" rounded-3xl  my-9 p-[42px] shadow-xl">
              <p className="text-[#656565] text-lg mb-[100px]">
                Meeting was very easy going. Mediator made it simple and welcome. Kept my nerves calm at all times. Meeting was very easy
                going. Mediator made it simple and welcome. Kept my nerves calm at all times.Meeting was very easy going. Mediator made it
                simple and welcome. Kept my nerves calm at all times.
              </p>
              <p className="text-2xl font-semibold">Jenny Wilson - Customer</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="text-center mt-[70px]">
        <Button title={'Read More Client Stories'} />
      </div>
    </section>
  );
};

export default FeedbackCarousel;
