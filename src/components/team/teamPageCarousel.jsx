'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img from '/public/Jeff Lermer.png';
import Image from 'next/image';

const member = [
  {
    name: 'Adam Gersch',
    description:
      'He is committed to delivering first-rate services to clients and his sparkling personality always shines through and brings a smile.',
    img: img,
  },
  {
    name: 'Martha Monday',
    description:
      'Martha is our Senior In-House Mediator.  She has been involved in hundreds of successful mediations and her calm and confident manner puts all participants at ease.',
    img: img,
  },
  {
    name: 'Jeff Lermer',
    description:
      'After becoming frustrated with our existing advisors, our financial director and I approached Jeff for advice and with complete certainty I can confirm that his professional help was instrumental in navigating our voyage through difficult waters.',
    img: img,
  },
  {
    name: 'Karen Heenan',
    description:
      'Karen is an In-House Mediator for Global Mediation and has a depth of knowledge and experience mediating in different cases.',
    img: img,
  },
  {
    name: 'Charles Horn',
    description: '‘Charles deserves the Nobel Peace Prize!’',
    img: img,
  },
  {
    name: 'Gareth Thompson',
    description:
      'He has a great capacity to engage, analyse, advise and support in an infectiously positive, enthusiastic and energetic manner.',
    img: img,
  },
  {
    name: 'Jane Gunn',
    description: '‘Excellent, reasonable, professional.’',
    img: img,
  },
  {
    name: 'Janick Fielding',
    description:
      'With a combination of excellent preparation and solidity in the face of uncertainty, Janick gets results where most would never even venture.',
    img: img,
  },
  {
    name: 'Julia Smart',
    description: 'Felt reassured and safe at a time when I was bewildered and confused you provided an excellent service in all areas.',
    img: img,
  },
  {
    name: 'Nigel Barr',
    description:
      'Nigel’s style was informal but firm and he was able to convey each party’s position to the other in a relaxed but informed way.',
    img: img,
  },
  {
    name: 'Richard Watkins',
    description: 'We found Richard punctual, confident and fair. He made us feel comfortable and at ease. We could not fault Richard.',
    img: img,
  },
  {
    name: 'Roy Poyntz',
    description: 'Friendly yet professional…managed all views to be heard in a safe and non-confrontational environment.',
    img: img,
  },
  {
    name: 'Mia Forbes Pirie',
    description:
      'An international mediator, facilitator and coach, Mia has had careers in law and science. In addition to her corporate clients and former career as a solicitor in a top City of London law firm; Mia has worked with governments, religious organisations and Members of Parliament.',
    img: img,
  },
  {
    name: 'Sally Ruthen',
    description:
      'She had a firm understanding of the issues involved and was sensitive to the concerns of both parties. I felt that she conducted herself in a confident and professional manner.',
    img: img,
  },
  {
    name: 'Henry Minto',
    description:
      'Henry’s skill of listening, intuitively posing the right questions in facilitating thinking, helps his participants to reflect, consider, and weigh up different perspectives and rationale. He’s a natural.',
    img: img,
  },
  {
    name: 'Laurence Cobb',
    description:
      'Laurence brings good humour, an impressive depth of legal knowledge and commercial experience to expertly guide parties towards resolution.',
    img: img,
  },
];

const TeamPageCarousel = () => {
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
    customPaging: i => <div className=" w-2  h-2 rounded-full bg-[#F3F1FF]"></div>,
  };

  return (
    <section className="about py-16 md:py-[80px] px-5 md:px-16">
      <div className="mb-12 md:mb-[80px]">
        <h1 className="mb-5 font-semibold text-4xl md:text-5xl">Our team</h1>
        <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div>
        <div className="team-caousel">
          <div className="slider-container">
            <Slider {...settings}>
              {[1, 2].map(item => (
                <div className="" key={item}>
                  <div className="grid grid-cols-4 gap-8">
                    {member.map(item => (
                      <div key={item.name} className="col-span-4 md:col-span-2 lg:col-span-1 mb-[30px] md:mb-[60px]">
                        <div className="w-full h-[290px] bg-gray-600 rounded-xl overflow-hidden">
                          <Image alt={item.name} src={item.img} className="w-full h-full object-cover" />
                        </div>
                        <h3 className={`text-black' mt-6 md:mt-6 mb-4 text-lg md:text-[20px] font-semibold `}>{item.name}</h3>
                        <p className={`text-black' leading-[150%] text-sm font-normal `}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPageCarousel;
