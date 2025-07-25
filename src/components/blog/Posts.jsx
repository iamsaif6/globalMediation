'use client';
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';

const Posts = ({ articles }) => {
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`flex justify-center translate-y-1/2 -translate-x-full absolute -bottom-[12.5px] border border-[#9C9C9C] right-[50px] md:right-[75px] z-30 items-center text-[#9C9C9C]  rounded-full hover:bg-secondary hover:border-secondary  hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
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
        className={`flex justify-center translate-y-1/2 absolute -bottom-[12.5px] border border-[#9C9C9C] right-10 md:right-[60px] z-30   items-center text-[#9C9C9C]  rounded-full hover:bg-secondary hover:border-secondary hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
        onClick={onClick}
      >
        <ArrowRight />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: i => <div className=" w-2  h-2 rounded-full bg-[#DAD3FF]"></div>,
  };
  const articleData = articles?.data || [];

  return (
    <section className="pb-16 mb-10 pt-[120px] lg:pt-[150px] bg-[#F9F8FF] about px-5 md:px-16 md:pb-[80px] ">
      <div className="mb-12 md:mb-[80px] flex-col gap-8  lg:flex-row flex justify-between items-center lg:items-end">
        <div className="text-center  w-full mx-auto lg:text-left max-w-[1200px]">
          <h3 className="font-medium mb-[20px]- md:mb-0 text-4xl md:text-5xl leading-[120%]">Blogs</h3>
        </div>
      </div>
      <div className="team-caousel">
        <div className="slider-container">
          <Slider {...settings}>
            {Array.from({ length: Math.ceil(articleData.length / 8) }).map((_, slideIndex) => (
              <div key={slideIndex}>
                <div className="grid grid-cols-2 max-w-[1200px] mx-auto gap-8">
                  {articleData.slice(slideIndex * 8, (slideIndex + 1) * 8).map((article, index) => (
                    <div key={article.id || index} className="col-span-2 md:col-span-2 lg:col-span-1 mb-[28px] md:mb-[30px]">
                      <div className="w-full overflow-hidden h-[300px] max-h-[290px] bg-gray-600 rounded-xl">
                        {article?.cover?.formats?.small?.url && (
                          <Image
                            className="h-full w-full object-cover"
                            alt={article.title}
                            width={400}
                            height={400}
                            src={`${article?.cover?.formats?.small?.url}`}
                          />
                        )}
                      </div>
                      <h4
                        title={article?.title}
                        className={`text-black leading-[140%] mt-6 md:mt-6 mb-4 text-lg md:text-[24px] font-semibold`}
                      >
                        {article?.title}
                      </h4>
                      <Link
                        title="Read More"
                        href={`/blogs/blog/${article?.slug || article.id}`}
                        className="flex w-max pb-1 border-b border-secondary gap-1 items-center text-secondary font-medium text-sm"
                      >
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12.646 6.64604C12.6924 6.59948 12.7476 6.56253 12.8084 6.53733C12.8691 6.51212 12.9342 6.49915 13 6.49915C13.0658 6.49915 13.1309 6.51212 13.1916 6.53733C13.2524 6.56253 13.3076 6.59948 13.354 6.64604L18.354 11.646C18.4006 11.6925 18.4375 11.7477 18.4627 11.8084C18.4879 11.8692 18.5009 11.9343 18.5009 12C18.5009 12.0658 18.4879 12.1309 18.4627 12.1917C18.4375 12.2524 18.4006 12.3076 18.354 12.354L13.354 17.354C13.2601 17.4479 13.1328 17.5007 13 17.5007C12.8672 17.5007 12.7399 17.4479 12.646 17.354C12.5521 17.2602 12.4994 17.1328 12.4994 17C12.4994 16.8673 12.5521 16.7399 12.646 16.646L16.793 12.5H6C5.86739 12.5 5.74021 12.4474 5.64645 12.3536C5.55268 12.2598 5.5 12.1326 5.5 12C5.5 11.8674 5.55268 11.7403 5.64645 11.6465C5.74021 11.5527 5.86739 11.5 6 11.5H16.793L12.646 7.35404C12.5994 7.30759 12.5625 7.25242 12.5373 7.19167C12.5121 7.13093 12.4991 7.06581 12.4991 7.00004C12.4991 6.93427 12.5121 6.86915 12.5373 6.80841C12.5625 6.74766 12.5994 6.69248 12.646 6.64604Z"
                            fill="#43006A"
                          />
                        </svg>
                      </Link>
                    </div>
                  ))}
                  {slideIndex === Math.ceil(articleData.length / 8) - 1 &&
                    articleData.length % 8 !== 0 &&
                    Array.from({ length: 8 - (articleData.length % 8) }).map((_, emptyIndex) => (
                      <div key={`empty-${emptyIndex}`} className="col-span-4 md:col-span-2 lg:col-span-1 mb-[48px] md:mb-[60px]"></div>
                    ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Posts;
