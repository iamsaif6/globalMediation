'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Button from '../shared/Button';

const clientReview = [
  {
    review: 'Extremely useful, impartial and a calm environment in which to discuss concerns',
    name: '',
  },
  {
    review: 'Absolutely essential! Supports positive relationships. Thank you – very approachable and efficient. Impartial and fair.',
    name: '',
  },
  {
    review:
      'Very helpful and explained all that we needed to know, very well. We also felt that we were listened too throughout this process. Extremely well managed meeting.',
    name: '',
  },
  {
    review:
      'Informal and easy talk to clarify issues. A good chance to discuss and clarify issues face to face and also to put a plan together that might not have been available to do in the first place',
    name: '',
  },
  {
    review: 'Meeting was very easy going. Mediator made it simple and welcome. Kept my nerves calm at all times.',
    name: '',
  },
  {
    review: 'This was really useful to identify gaps information and find out what information was needed. Very professional and impartial',
    name: '',
  },
];

const FeedbackCarousel = ({ title, subTitle }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
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
    <section className="py-[40px] slick-bar ">
      <div className="mb-10 px-5 md:px-16 text-center md:mb-[70px] ">
        <h1 className=" text-4xl md:text-5xl font-medium leading-[120%] ">{title}</h1>
        {subTitle && <p className=" font-normal text-lg mt-6">{subTitle}</p>}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {clientReview.map(item => {
            return (
              <div className="px-[15px]  mb-[40px]">
                <div className=" rounded-[10px] bg-white md:rounded-3xl  h-auto lg:h-[330px]  my-9 py-6 px-5 lg:p-[42px] shadow-[10px_10px_55px_0px_rgba(175,172,172,0.25)]">
                  <svg
                    className="w-[30px] h-[30px] lg:w-[61px] lg:h-[61px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 61 61"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6164_8277)">
                      <path
                        d="M13.4047 26.6875C16.0439 26.6875 18.6238 27.4701 20.8181 28.9363C23.0125 30.4026 24.7228 32.4866 25.7328 34.9248C26.7427 37.3631 27.007 40.0461 26.4921 42.6345C25.9772 45.2229 24.7064 47.6005 22.8402 49.4667C20.974 51.3329 18.5964 52.6037 16.008 53.1186C13.4196 53.6335 10.7366 53.3692 8.29832 52.3593C5.86007 51.3493 3.77606 49.639 2.30983 47.4446C0.843597 45.2503 0.061 42.6704 0.061 40.0312L0 38.125C0 31.047 2.81171 24.259 7.81659 19.2541C12.8215 14.2492 19.6095 11.4375 26.6875 11.4375V19.0625C24.1831 19.0558 21.7022 19.5456 19.3882 20.5036C17.0743 21.4617 14.9732 22.8689 13.2065 24.644C12.5198 25.3294 11.8864 26.066 11.3117 26.8476C11.9941 26.7409 12.6918 26.6837 13.4009 26.6837L13.4047 26.6875ZM47.7172 26.6875C50.3564 26.6875 52.9363 27.4701 55.1306 28.9363C57.325 30.4026 59.0353 32.4866 60.0453 34.9248C61.0552 37.3631 61.3195 40.0461 60.8046 42.6345C60.2897 45.2229 59.0189 47.6005 57.1527 49.4667C55.2865 51.3329 52.9089 52.6037 50.3205 53.1186C47.7321 53.6335 45.0491 53.3692 42.6108 52.3593C40.1726 51.3493 38.0886 49.639 36.6223 47.4446C35.1561 45.2503 34.3735 42.6704 34.3735 40.0312L34.3125 38.125C34.3125 31.047 37.1242 24.259 42.1291 19.2541C47.134 14.2492 53.922 11.4375 61 11.4375V19.0625C58.4956 19.0558 56.0147 19.5456 53.7007 20.5036C51.3868 21.4617 49.2857 22.8689 47.519 24.644C46.8323 25.3294 46.1989 26.066 45.6242 26.8476C46.3066 26.7409 47.0043 26.6875 47.7172 26.6875Z"
                        fill="#43006A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6164_8277">
                        <rect width="61" height="61" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="mt-3 md:mt-[38px] pl-3 md:pl-10 md:pr-5">
                    <p className="leading-[150%] text-sm lg:text-lg mb-5">{item.review}</p>
                    {item.name && <p className="text-sm lg:text-2xl font-semibold text-[#1C1C1C]"> - {item.name}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div className="text-center mt-[70px]">
        <Button href="/case-studies" title={'Read More Client Stories'} />
      </div> */}
    </section>
  );
};

export default FeedbackCarousel;
