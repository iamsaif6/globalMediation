"use client";
import TeamPageCarousel from "@/components/team/teamPageCarousel";
import React from "react";
import Image from "next/image";
import jeff from "/public/members/jeff.jpg";
import emma from "/public/members/emma.jpg";
import Irvine from "/public/members/Irvine.jpg";
import Ashleigh from "/public/members/Ashleigh.jpg";
import Nigel from "/public/members/Nigel.jpg";
import Janet from "/public/members/Janet.jpg";
import Suneta from "/public/members/Suneta.jpg";
import Nikeisha from "/public/members/Nikeisha.jpg";
import Altaf from "/public/members/Altaf.jpeg";
import { useState } from "react";
import { X } from "lucide-react";
import adam from "/public/members/Adam.jpeg";
import male from "/public/man.jpg";
import female from "/public/female.jpeg";
import rebecca from "/public/members/rebecca.jpg";
import emery from "/public/members/emery.jpg";
import jo from "/public/members/jo.jpg";

const caseManagment = [
  { name: "Anni Williams", title: "Commercial & Business Development Manager" },
  {
    name: "Karen Morrison",
    title: "Operations Manager",
  },
  {
    name: "Nayara Seibet",
    title: "SEN Team Lead",
  },
  {
    name: "Christina Tsangari",
    title: "Client Service Lead",
  },
  {
    name: "Natalie Gersch",
    title: "Safeguarding Lead",
  },
  {
    name: "Nikki McCartney",
    title: "NI Service Coordinator",
  },
  {
    name: "Flamur",
    title: "Case Manager",
  },
  {
    name: "Emily ",
    title: "Case Manager",
  },
  {
    name: "Emmanuelle",
    title: "Case Manager",
  },
  {
    name: "Gemma ",
    title: "Case Manager",
  },
  {
    name: "George ",
    title: "Case Manager",
  },
  {
    name: "Jordan ",
    title: "Case Manager",
  },
  {
    name: "Samalie ",
    title: "Case Manager",
  },
  {
    name: "Sibyl ",
    title: "Case Manager",
  },
  {
    name: "Regine Cabegin",
    title: "Executive Assistant to CEO",
  },
];

// export const metadata = {
//   title: 'Team - Global Mediation - Mediation Services UK',
//   description:
//     'Global Mediation was established in 1999. The company offers a wide range of mediation services UK, covering all aspects of personal and professional life.',
// };

const members = [
  {
    name: "Adam Gersch",
    image: adam,
    position: "Founder & CEO",
    details: (
      <p>
        Adam is a practising criminal barrister and a CEDR-accredited mediator
        with over two decades of legal and mediation experience in both the UK
        and US. He founded Global Mediation in 1999 and continues to lead the
        organisation’s strategic direction.
        <br /> <br />
        Adam’s background in law, coupled with his belief in the power of
        impartial dialogue, has shaped Global’s reputation for calm,
        professional and human-centred mediation services.
      </p>
    ),
  },

  {
    name: "Jeff Lermer",
    image: jeff,
    position: "Chief Financial Officer & Accredited Mediator",
    details: (
      <p>
        Jeff is an accredited mediator and the Chief Financial Officer of Global
        Mediation. With over 30 years of commercial and financial experience, he
        brings a rare blend of analytical insight and human understanding to the
        organisation. <br /> <br />
        As CFO, Jeff oversees Global’s financial strategy, helping the business
        deliver thousands of mediations each year for local authorities,
        businesses and individuals across the UK. A qualified accountant and
        experienced adviser, he previously ran a successful accountancy firm
        supporting owner-managed and family-run businesses. <br /> <br />
        Jeff brings this practical, people-focused approach into his work as a
        mediator — resolving commercial and workplace disputes with calm
        authority and a focus on lasting outcomes.
      </p>
    ),
  },
  {
    name: "Emma Gersch",
    image: emma,
    position: "Global Training Director",
    details: (
      <p>
        Emma is a theatre director, trainer, mediator and coach with over 20
        years’ experience designing and delivering training across the NHS,
        British Red Cross, the legal profession and the education sector. Her
        expertise lies in positive communication, leadership, team management
        and courageous conversations.
        <br /> <br />
        A qualified teacher and member of the Higher Education Faculty at
        Shakespeare’s Globe, Emma was formerly Senior Teaching Fellow at Bath
        Spa University. She has taught at leading drama schools including the
        Royal Central School of Speech and Drama, LAMDA and ArtsEd.
        <br /> <br />
        Emma is also Artistic Director of Moving Stories Theatre Company, which
        creates adaptations of Shakespeare and socially engaged work — including
        recent projects with Women’s Aid and St Martin’s homeless charity.
      </p>
    ),
  },
  {
    name: "Emeritus Professor Irvine Gersch - BA (Hons). PGCE. DipEdPsych. PhD. CPsychol. FBPsS. FHEA. HCPC Reg. PostGradDip.Coaching",
    image: Irvine,
    position: "Non-Executive Director",
    details: (
      <p>
        Irvine is an Emeritus Professor of Educational and Child Psychology with
        a distinguished career spanning more than four decades across teaching,
        advising, research, and leadership. He has worked as a teacher,
        psychologist, and Principal Educational Psychologist, and served as a
        Government Advisor and University Course Director responsible for
        training the next generation of educational and child psychologists.{" "}
        <br /> <br />
        A specialist in school leadership and decision-making, Irvine’s doctoral
        research explored effective leadership in education. His pioneering work
        on listening to children, school systems, SEND, coaching and mediation
        has influenced national practice. He is the author of over 100 journal
        articles, book chapters and books, including The Philosophical Life
        Compass (2021), The Little Box of Big Questions (2012), and Resolving
        Disagreement in Special Needs (2003). <br /> <br />
        Irvine is a Fellow of the British Psychological Society and the Higher
        Education Academy, and has received national recognition for his
        contributions to psychology and education. As a qualified life coach and
        mediator, he brings academic rigour, practical insight, and a
        long-standing commitment to improving outcomes for children and
        families.
      </p>
    ),
  },
  {
    name: "Les Emery",
    image: emery,
    position: "Chief Operating Officer",
    details: (
      <p>
        Les is an experienced organisational leader with a career spanning the
        UK, Europe and the USA. He has held senior roles across sectors
        including supply chain, manufacturing, the NHS, and both local and
        national government. <br /> <br />
        He brings deep expertise in lean leadership, coaching, strategic
        alignment and policy deployment, and plays a central role in shaping and
        delivering Global Mediation’s operational strategy.
      </p>
    ),
  },
  {
    name: "Ashleigh Stent",
    image: Ashleigh,
    position: "Marketing Director",
    details: (
      <p>
        Ashleigh is a board-level marketing leader with over 20 years of
        experience building high-performing teams, brands and digital
        ecosystems. She brings a strategic mindset that fuses creativity, data
        and technology to drive meaningful commercial outcomes. <br /> <br />
        Her career spans the full spectrum of marketing — from brand and digital
        to demand generation and commerce — with a proven track record of
        scaling global teams, shaping strategy, and delivering measurable
        growth. Known for her clarity, curiosity and commercial focus, Ashleigh
        leads with energy and purpose, ensuring Global Mediation continues to
        connect with the people who need us most.
      </p>
    ),
  },

  {
    name: "Suraiya Baghdadi",
    image: female,
    position: "Mediation Director",
    details: (
      <p>
        Suraiya is the Mediation Director at Global Mediation, where she leads
        the team of Senior and Associate Mediators and upholds the exceptional
        standards of practice that define our service. With over 25 years of
        experience in education, teacher training and leadership, she brings
        specialist expertise to mediation — particularly in the area of Special
        Educational Needs and Disabilities (SEND). <br /> <br />
        A CMC-accredited mediator with specialist SEND accreditation, Suraiya is
        driven by a belief in the power of inclusive communication. She creates
        safe, respectful spaces for open dialogue, always placing the voices of
        children and young people at the heart of the process. She is on the
        panel for the CoM Practice Standards Committee and also for the SEND
        Mediation Assessors/DfE. <br /> <br />
        Her deep commitment to social inclusion is reflected in her research and
        leadership. She has led Home Office research into the barriers faced by
        excluded groups, published work on disability and inclusion, and
        previously served as a Disability Equality Lead, championing
        accessibility and equity across her organisation.
      </p>
    ),
  },
];

const mediator = [
  {
    name: "Rebecca Hayward",
    image: rebecca,
    position: "Senior Mediator",
    details: (
      <p>
        Rebecca combines a calm, supportive style with professional clarity to
        deliver impartial, well-structured SEND mediations. She creates safe,
        respectful environments where all parties feel heard — managing the
        process with warmth, fairness and a focus on moving forward. <br />{" "}
        <br />
        As a highly experienced mediator, Rebecca helps families, local
        authorities, schools and professionals work together with the child or
        young person at the centre of every conversation.
      </p>
    ),
  },

  {
    name: "Nigel Barr",
    image: Nigel,
    position: "Senior Mediator",
    details: (
      <p>
        Nigel is a highly experienced SEND mediator who has conducted over 1,000
        mediations since 2013. Known for his calm, consistent approach, he
        continues to support families and professionals to navigate complex
        issues and find positive, forward-focused outcomes.
      </p>
    ),
  },
  {
    name: "Suneta Bagri",
    image: Suneta,
    position: "Course Leader & Senior Mediator",
    details: (
      <p>
        Suneta is a highly experienced mediator specialising in SEND and
        workplace resolution, with a strong focus on the education sector. She
        brings empathy, clarity and professionalism to every case — helping
        individuals and teams navigate challenges, strengthen communication and
        build lasting solutions.
      </p>
    ),
  },

  {
    name: "Janet Kenward",
    image: Janet,
    position: "Senior Mediator",
    details: (
      <p>
        Janet brings deep expertise in SEND, built over a career as a teacher,
        advisor and manager in the sector before training as a mediator. She is
        known for her calm, grounded approach, clear subject knowledge and
        ability to listen with care — helping participants feel heard, supported
        and confident throughout the process.
      </p>
    ),
  },

  {
    name: "Nikeisha Beharie-Campbell",
    image: Nikeisha,
    position: "Mediator",
    details: (
      <p>
        Nikeisha is a trained mediator with a strong background in case
        management and family support. Since joining Global Mediation in 2017,
        she has progressed from Case Manager to Area Lead, and now forms part of
        the IH Mediation team. <br /> <br />
        Having completed both the Foundation and SEND Mediation courses,
        Nikeisha brings a calm, structured approach to every case. She is
        committed to guiding families through the mediation process with
        empathy, clarity and care.
      </p>
    ),
  },
  {
    name: "Altaf Baghdadi",
    image: Altaf,
    position: "Senior Mediator",
    details: (
      <p>
        Altaf is a CMC-qualified mediator with a strong background in SEND and
        community mediation. He brings over two decades of experience across
        education and local government, with a particular focus on supporting
        young people with special educational needs and learning difficulties.
        <br /> <br />
        Holding an MPhil in Law, Altaf blends academic rigour with practical
        expertise in empathy, communication and collaborative problem-solving.
        He is committed to creating safe, transparent spaces where individuals
        feel empowered to resolve conflict constructively and reach lasting
        outcomes.
      </p>
    ),
  },
  {
    name: "Jo Winters",
    image: jo,
    position: "Senior Mediator",
    details: (
      <p>
        Jo brings warmth, empathy and a deep belief in the power of mediation to
        every case. Known for her calm presence and strong communication skills,
        she helps participants feel supported and heard — empowering them to
        work together toward fair and lasting outcomes
      </p>
    ),
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  return (
    <div className=" py-24 lg:max-w-[1318px] mx-auto md:py-[80px] mt-[10px] md:mt-[80px]">
      <div>
        <h2 className="text-4xl font-medium text-center mb-16">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((item) => (
            <div className="px-5 min-h-[250px] lg:px-[25px]   mb-[20px]">
              <div className="h-[300px] w-full rounded-3xl overflow-hidden bg-gray-200">
                {item?.image && (
                  <Image
                    className="object-cover object-top h-full w-full"
                    alt={item.name}
                    src={item.image}
                  />
                )}
              </div>
              <h3
                className={` mt-3 truncate md:mt-6 text-2xl md:text-[32px] font-semibold `}>
                {item.name}
              </h3>
              <p className={`font-medium mt-1 truncate`}>{item?.position}</p>
              <div className="mt-3 line-clamp-3">{item?.details}</div>
              <button
                onClick={() => setSelectedMember(item)}
                className="mt-4 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-medium text-center mb-16">
          In-House Mediators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediator.map((item) => (
            <div className="px-5 min-h-[250px] lg:px-[25px]   mb-[20px]">
              <div className="h-[300px] w-full rounded-3xl overflow-hidden bg-gray-200">
                {item?.image && (
                  <Image
                    className="object-cover object-top h-full w-full"
                    alt={item.name}
                    src={item.image}
                  />
                )}
              </div>
              <h3
                className={` mt-3 truncate md:mt-6 text-2xl md:text-[32px] font-semibold `}>
                {item.name}
              </h3>
              <p className={`font-medium mt-1 truncate`}>{item?.position}</p>
              <div className="mt-3 line-clamp-3">{item?.details}</div>
              <button
                onClick={() => setSelectedMember(item)}
                className="mt-4 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16 px-5">
        <h5 className="text-2xl md:text-xl font-medium text-center mb-16">
          Case Management & Administrative Team
        </h5>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center text-gray-700">
          {caseManagment.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg py-3 px-2 text-sm font-medium shadow-sm transition">
              <div className="font-semibold">{person.name}</div>
              <div className="text-xs text-gray-500 mt-1">{person.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16 px-5">
        <h5 className="text-2xl md:text-xl font-medium text-center mb-16">
          Our In-House mediators are further supported by our panel mediators
        </h5>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center text-gray-700">
          {[
            "Adrian Wilson",
            "Amy Bonehill",
            "Amymay Bowes",
            "Anita Marsh",
            "Anna Lancy",
            "Ben Walsh",
            "Bernardina Selemane",
            "Caroline Lowe",
            "Catherine Milsom",
            "Deborah Beharie",
            "Deborah Rix",
            "Dominique Young",
            "Emma Jenkings",
            "Eva Edel",
            "Gareth Thompson",
            "Gordon Douglas",
            "Grace Snead",
            "Helen Shea",
            "Henry Minto",
            "Jane Elias",
            "Janick Fielding",
            "Jen Connell Waite",
            "Jeremy Connell",
            "John Keers (NI)",
            "Joseline Porter",
            "Julia Smart",
            "Karen Heenan",
            "Kellie Millard",
            "Kyle Francis",
            "Laura Coulter",
            "Laurence Cobb",
            "Lise Seager",
            "Loveday Aleksieva-Fox",
            "Mabel Edge",
            "Malki Robinson",
            "Martha Monday",
            "Michelle Mendall",
            "Miranda Runnalls",
            "Nikki Lindsay",
            "Nikki Trayman",
            "Peter Phillips",
            "Peter Shaw",
            "Polly Walker",
            "Rosalind Dunlop",
            "Roy Poyntz",
            "Sally Ruthen",
            "Sarah Denny",
            "Sarah Milsom",
            "Sayka Hussain",
            "Sean O'Baoil",
            "Simon Dryer",
            "Steve Saunders",
            "Steven Mills",
            "Tabitha Nice",
            "Tessa Herman",
            "Timea Tallodi",
          ].map((name, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg py-3 px-2 text-sm font-medium shadow-sm transition">
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex  items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedMember(null);
          }}>
          <div className="bg-white w-full max-h-[90vh]  max-w-3xl rounded-3xl shadow-2xl relative overflow-scroll animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 cursor-pointer right-4 text-gray-400 hover:text-gray-700 transition"
              onClick={() => setSelectedMember(null)}>
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-10 text-center">
              {/* Image */}
              {selectedMember.image ? (
                <div className="flex justify-center mb-6">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-center"
                    />
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
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {selectedMember.name}
              </h2>
              <p className="text-primary font-medium mt-2 mb-4 text-base md:text-lg">
                {selectedMember.position}
              </p>

              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3 overflow-y-auto text-left">
                {selectedMember.details}
              </div>

              {/* Close Button (Mobile-Friendly) */}
              <div className="mt-6">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="mt-3 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-200">
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

export default Team;
