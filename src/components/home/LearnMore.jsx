import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Questions from '../Icons/Questions';
import Guides from '../Icons/Guides';
import BlogIcon from '../Icons/BlogIcon';
import Calculator from '../Icons/Calculator';
import BrandValuesIcon from '../Icons/BrandValuesIcon';
import TeamIcon from '../Icons/TeamIcon';

const cards = [
  {
    title: 'FAQ',
    desc: 'Find answers to common questions',
    href: '/faqs',
    Icon: Questions,
  },
  {
    title: 'Guides',
    desc: 'Downloadable prep and tips',
    href: '/resources',
    Icon: Guides,
  },
  {
    title: 'Cost Calculator',
    desc: 'Calculate mediation cost',
    href: '/savings-calculator',
    Icon: Calculator,
  },

  {
    title: 'Mediation Matters Podcast',
    desc: 'Listen Mediation Matters Podcast',
    href: 'https://podcasts.apple.com/gb/podcast/mediation-matters/id1602971487',
    Icon: BlogIcon,
    target: true,
  },
  {
    title: 'Brand Values',
    desc: 'Global’s Brand Values',
    href: '/global-brand-value',
    Icon: BrandValuesIcon,
  },
  {
    title: 'Meet The Team',
    desc: 'Meet Our Leadership, Case Management & Administrative Team',
    href: '/team',
    Icon: TeamIcon,
  },
];

const Card = ({ title, desc, href, Icon, target }) => (
  <div className="border border-[#EBE5E5] hover:border-[#DAD3FF] col-span-6 md:col-span-2 lg:col-span-1 rounded-3xl py-[20px] flex flex-col">
    <div className="p-5 pt-0 pb-0 flex gap-4 lg:gap-0 items-center lg:justify-end">
      <Icon />
      <h4 className="text-[#101828] block lg:hidden font-medium text-2xl">{title}</h4>
    </div>

    <div className="p-5 flex-grow flex flex-col">
      <div className="flex flex-col flex-grow mb-4">
        <h4 className="text-[#101828] hidden lg:block font-medium mb-2 text-xl">{title}</h4>
        <p className="text-[#101828] text-base md:text-base">{desc}</p>
      </div>

      <Link
        title="Read more"
        target={target ? '_blank' : '_self'}
        href={href}
        className="text-sm md:text-lg text-secondary duration-300 hover:gap-4 border-b-2 pb-1.5 w-max flex items-center gap-2 font-semibold mt-auto"
      >
        <span>Read more</span>
        <ArrowRight strokeWidth={1.5} size={20} />
      </Link>
    </div>
  </div>
);

const LearnMore = () => {
  return (
    <section aria-label="Learn More About Mediation" className="px-5 md:px-[64px] py-16 md:py-[80px]">
      <SectionHeading
        title="Learn More About Mediation"
        subTitle="Explore resources to help you prepare for mediation or learn more about how it works:"
        center
      />

      <div className="grid grid-cols-6 gap-3 mt-16">
        {cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default LearnMore;
