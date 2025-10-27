import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const ContactDars = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px] bg-secondary text-white">
      <div className="max-w-[800px] mx-auto text-center">
        <h2
          className={`font-medium w-full !text-white   mx-auto leading-[120%] tracking-[-4%] text-4xl text-center  md:text-5xl mb-5 md:mb-6 `}
        >
          Contact DARS
        </h2>
        <p className="text-base md:text-lg leading-[150%] mb-8">
          If you would like to find out more, or start the process, contact the DARS team:
        </p>
        <div className="space-y-4 mb-8 text-base md:text-lg">
          <Link href={'tel:02890726060'} className="flex items-center justify-center">
            <Phone size={22} className="inline-block mr-2 " />
            <span>028 9072 6060</span>
          </Link>
          <Link href={'mailto:DARS@globalmediation.co.uk'}>
            <Mail size={22} className="inline-block mr-2 " />
            <span>DARS@globalmediation.co.uk</span>
          </Link>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-white text-black px-12 py-3 rounded-[40px] font-semibold text-base lg:text-lg hover:bg-gray-100 transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default ContactDars;
