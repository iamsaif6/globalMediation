'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import jeff from '/public/members/jeff.jpg';
import emma from '/public/members/emma.jpg';
import Irvine from '/public/members/Irvine.jpg';
import Ashleigh from '/public/members/Ashleigh.jpg';
import adam from '/public/members/Adam.jpeg';
import { useState } from 'react';
import female from '/public/female.png';
import male from '/public/man.jpg';

const members = [
  {
    name: 'Adam Gersch',
    image: adam,
    position: 'Founder & CEO',
    details: (
      <p>
        Adam is a practising criminal barrister and a CEDR-accredited mediator with over two decades of legal and mediation experience in
        both the UK and US. He founded Global Mediation in 1999 and continues to lead the organisation’s strategic direction.
        <br />
        Adam’s background in law, coupled with his belief in the power of impartial dialogue, has shaped Global’s reputation for calm,
        professional and human-centred mediation services.
      </p>
    ),
  },

  {
    name: 'Jeff Lermer',
    image: jeff,
    position: 'Chief Financial Officer & Accredited Mediator',
    details: (
      <p>
        Jeff is an accredited mediator and the Chief Financial Officer of Global Mediation. With over 30 years of commercial and financial
        experience, he brings a rare blend of analytical insight and human understanding to the organisation. <br />
        As CFO, Jeff oversees Global’s financial strategy, helping the business deliver thousands of mediations each year for local
        authorities, businesses and individuals across the UK. A qualified accountant and experienced adviser, he previously ran a
        successful accountancy firm supporting owner-managed and family-run businesses. <br />
        Jeff brings this practical, people-focused approach into his work as a mediator — resolving commercial and workplace disputes with
        calm authority and a focus on lasting outcomes.
      </p>
    ),
  },
  {
    name: 'Emma Gersch',
    image: emma,
    position: 'Global Training Director',
    details: (
      <p>
        Emma is a theatre director, trainer, mediator and coach with over 20 years’ experience designing and delivering training across the
        NHS, British Red Cross, the legal profession and the education sector. Her expertise lies in positive communication, leadership,
        team management and courageous conversations.
        <br />
        A qualified teacher and member of the Higher Education Faculty at Shakespeare’s Globe, Emma was formerly Senior Teaching Fellow at
        Bath Spa University. She has taught at leading drama schools including the Royal Central School of Speech and Drama, LAMDA and
        ArtsEd.
        <br />
        Emma is also Artistic Director of Moving Stories Theatre Company, which creates adaptations of Shakespeare and socially engaged work
        — including recent projects with Women’s Aid and St Martin’s homeless charity.
      </p>
    ),
  },
  {
    name: 'Emeritus Professor Irvine Gersch - BA (Hons). PGCE. DipEdPsych. PhD. CPsychol. FBPsS. FHEA. HCPC Reg. PostGradDip.Coaching',
    image: Irvine,
    position: 'Non-Executive Director',
    details: (
      <p>
        Irvine is an Emeritus Professor of Educational and Child Psychology with a distinguished career spanning more than four decades
        across teaching, advising, research, and leadership. He has worked as a teacher, psychologist, and Principal Educational
        Psychologist, and served as a Government Advisor and University Course Director responsible for training the next generation of
        educational and child psychologists. <br />
        A specialist in school leadership and decision-making, Irvine’s doctoral research explored effective leadership in education. His
        pioneering work on listening to children, school systems, SEND, coaching and mediation has influenced national practice. He is the
        author of over 100 journal articles, book chapters and books, including The Philosophical Life Compass (2021), The Little Box of Big
        Questions (2012), and Resolving Disagreement in Special Needs (2003). <br />
        Irvine is a Fellow of the British Psychological Society and the Higher Education Academy, and has received national recognition for
        his contributions to psychology and education. As a qualified life coach and mediator, he brings academic rigour, practical insight,
        and a long-standing commitment to improving outcomes for children and families.
      </p>
    ),
  },
  {
    name: 'Les Emery',
    image: male,
    position: 'Chief Operating Officer',
    details: (
      <p>
        Les is an experienced organisational leader with a career spanning the UK, Europe and the USA. He has held senior roles across
        sectors including supply chain, manufacturing, the NHS, and both local and national government. <br />
        He brings deep expertise in lean leadership, coaching, strategic alignment and policy deployment, and plays a central role in
        shaping and delivering Global Mediation’s operational strategy.
      </p>
    ),
  },
  {
    name: 'Ashleigh Stent',
    image: Ashleigh,
    position: 'Marketing Director',
    details: (
      <p>
        Ashleigh is a board-level marketing leader with over 20 years of experience building high-performing teams, brands and digital
        ecosystems. She brings a strategic mindset that fuses creativity, data and technology to drive meaningful commercial outcomes.{' '}
        <br />
        Her career spans the full spectrum of marketing — from brand and digital to demand generation and commerce — with a proven track
        record of scaling global teams, shaping strategy, and delivering measurable growth. Known for her clarity, curiosity and commercial
        focus, Ashleigh leads with energy and purpose, ensuring Global Mediation continues to connect with the people who need us most.
      </p>
    ),
  },

  {
    name: 'Suraiya Baghdadi',
    image: female,
    position: 'Mediation Director',
    details: (
      <p>
        Suraiya is the Mediation Director at Global Mediation, where she leads the team of Senior and Associate Mediators and upholds the
        exceptional standards of practice that define our service. With over 25 years of experience in education, teacher training and
        leadership, she brings specialist expertise to mediation — particularly in the area of Special Educational Needs and Disabilities
        (SEND). <br />
        A CMC-accredited mediator with specialist SEND accreditation, Suraiya is driven by a belief in the power of inclusive communication.
        She creates safe, respectful spaces for open dialogue, always placing the voices of children and young people at the heart of the
        process. She is on the panel for the CoM Practice Standards Committee and also for the SEND Mediation Assessors/DfE. <br />
        Her deep commitment to social inclusion is reflected in her research and leadership. She has led Home Office research into the
        barriers faced by excluded groups, published work on disability and inclusion, and previously served as a Disability Equality Lead,
        championing accessibility and equity across her organisation.
      </p>
    ),
  },
];

const TeamCarousel = ({ darkText = false, isDouble }) => {
  const [selectedMember, setSelectedMember] = useState(null);
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
    initialSlide: 0,
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
              <div className="h-[300px] w-full rounded-3xl overflow-hidden bg-gray-200">
                {item?.image && <Image className="object-cover object-center h-full w-full" alt={item.name} src={item.image} />}
              </div>
              <h3 className={`${darkText ? 'text-black' : '!text-white'} mt-3 truncate md:mt-6 text-2xl md:text-[32px] font-semibold `}>
                {item.name}
              </h3>
              <p className={`font-medium mt-1 truncate ${darkText ? 'text-black' : 'text-white'}`}>{item?.position}</p>
              <div className={`mt-3 line-clamp-3 ${darkText ? 'text-black' : 'text-white'}`}>{item?.details}</div>
              <button
                onClick={() => setSelectedMember(item)}
                className="mt-4 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                View
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex  items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={e => {
            if (e.target === e.currentTarget) setSelectedMember(null);
          }}
        >
          <div className="bg-white w-full max-h-[90vh]  max-w-3xl rounded-3xl shadow-2xl relative overflow-scroll animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-700 transition"
              onClick={() => setSelectedMember(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-10 text-center">
              {/* Image */}
              {selectedMember.image ? (
                <div className="flex justify-center mb-6">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md">
                    <Image src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover object-center" />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center mb-6">
                  <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-lg">
                    No Image
                  </div>
                </div>
              )}

              {/* Text */}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{selectedMember.name}</h2>
              <p className="text-primary font-medium mt-2 mb-4 text-base md:text-lg">{selectedMember.position}</p>

              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3 overflow-y-auto text-left">
                {selectedMember.details}
              </div>

              {/* Close Button (Mobile-Friendly) */}
              <div className="mt-6">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="mt-3 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
