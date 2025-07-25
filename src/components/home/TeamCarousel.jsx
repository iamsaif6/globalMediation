'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Adam from '/public/members/Adam.jpeg';
import Suraiya from '/public/members/Suraiya.jpeg';
import Altaf from '/public/members/Altaf.jpeg';
import Jo from '/public/members/Jo.jpeg';
import Barr from '/public/members/Nigel Barr.jpeg';
import Rebecca from '/public/members/Rebecca.jpeg';
import Suneta from '/public/members/Suneta.jpeg';
import Vicky from '/public/members/Vicky.jpeg';

const members = [
  {
    name: 'Altaf Baghdadi',
    // image: Altaf,
    position: 'Senior Mediator',
    details:
      'Altaf is an experienced SEND, community, and workplace mediator known for his calm, impartial presence. He quickly builds trust and helps parties feel heard with empathy and respect.',
  },

  {
    name: 'Jo Winters',
    // image: Jo,
    position: 'Senior Mediator',
    details:
      'Jo brings warmth, empathy, and strong communication skills to every mediation. She’s passionate about helping participants reach the best possible outcomes through understanding and collaboration.',
  },

  {
    name: 'Adam Gersch',
    // image: Adam,
    position: 'Founder & CEO',
    details:
      'Adam is a practising criminal barrister and CEDR-accredited mediator who founded Global Mediation in 1999. He oversees the organisation’s strategic direction and brings decades of legal and mediation experience from the UK and US.',
  },

  {
    name: 'Rebecca Hayward',
    // image: Rebecca,
    position: 'Senior Mediator',
    details:
      'Rebecca brings a calm, supportive presence and clear professional guidance to each SEND mediation. She ensures all voices are heard while keeping the focus firmly on the child or young person.',
  },

  {
    name: 'Suraiya Baghdadi',
    // image: Suraiya,
    position: 'Mediation Director ',
    details:
      'Suraiya leads Global Mediation’s team of mediators, ensuring high standards across all services. With over 25 years in education and leadership, she brings deep expertise to SEND mediation.',
  },

  {
    name: 'Nigel Barr',
    // image: Barr,
    position: 'Senior Mediator',
    details:
      'Nigel has been a SEND mediator since 2013 and has led over 1,000 mediations. He brings extensive experience and continues to support families and professionals through the mediation process.',
  },

  {
    name: 'Emma Gersch',
    image: null,
    position: 'Specialist Mediator',
    details:
      'With a background in theatre and coaching, Emma brings over 20 years’ experience in communication and interpersonal skills training. Now a SEND mediator, she combines her expertise to support clients with empathy, clarity, and a deep belief in the power of listening.',
  },

  {
    name: 'Suneta Bagri',
    // image: Suneta,
    position: 'Course Director',
    details:
      'Suneta is an experienced mediator specialising in SEND and workplace resolution, particularly in education. She’s committed to helping individuals and teams reach clear, lasting solutions through collaboration and understanding.',
  },
  // {
  //   name: 'Vicky Mansell',
  //   // image: Vicky,
  //   position: 'Senior Mediator',
  // },
  {
    name: 'Janet Kenward',
    image: null,
    position: 'Senior Mediator',
    details:
      'With a background in SEN education, Janet brings deep subject knowledge and a calm, reassuring presence to mediation. She’s known for her listening skills and ability to put families at ease during challenging times.',
  },

  // {
  //   name: 'Laurence Cobb',
  //   image: null,
  //   position: 'Panel Member',
  // },
  {
    name: 'Nikeisha Campbell',
    image: null,
    position: 'Mediator',
    details:
      'Nikiesha joined Global Mediation in 2017 and progressed from Case Manager to Area Lead before becoming a mediator. She now supports families with care and commitment throughout the SEND mediation process.',
  },
];

const TeamCarousel = ({ darkText = false, isDouble }) => {
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`flex justify-center translate-y-1/2 mr-2  absolute -bottom-[50px] border border-[#9C9C9C] right-1/2
           md:right-1/2 z-20 items-center text-[#9C9C9C]  rounded-full ${
             darkText ? 'hover:bg-secondary hover:border-secondary' : 'hover:bg-primary hover:border-primary'
           }  hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
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
        className={`flex justify-center translate-y-1/2 ml-2  absolute -bottom-[50px] border border-[#9C9C9C] left-1/2 md:right-1/2 z-20   items-center text-[#9C9C9C]  rounded-full ${
          darkText ? 'hover:bg-secondary hover:border-secondary' : 'hover:bg-primary hover:border-primary'
        } hover:text-white  cursor-pointer w-[35px] h-[35px] md:w-12 md:h-12`}
        onClick={onClick}
      >
        <ArrowRight />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    rows: 2,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
        },
      },
    ],
    customPaging: i => <div className="w-2  h-2 rounded-full bg-[#F3F1FF]"></div>,
  };

  return (
    <div className="team-caousel">
      <div className="slider-container lg:px-[50px]">
        <Slider {...settings}>
          {members.map(item => (
            <div className="px-5 min-h-[250px] lg:px-[25px]   mb-[20px]">
              <h3 className={`${darkText ? 'text-black' : 'text-white'} mt-3 md:mt-6 text-2xl md:text-[32px] font-semibold `}>
                {item.name}
              </h3>
              <p className={`${darkText ? 'text-black' : 'text-white'} font-medium mt-1`}>{item?.position}</p>
              {isDouble && <p className="mt-3">{item?.details}</p>}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
