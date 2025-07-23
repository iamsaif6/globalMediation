import Header from '@/components/shared/Header';
import React from 'react';
import contactUsCover from '/public/contactUSCover.png';
import Map from '@/components/service/Map';
import CTA from '@/components/shared/CTA';
import Link from 'next/link';
import { Check, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import overlay from '/public/Overlay.png';

const ContactUs = () => {
  return (
    <div className=" bg-gray-100">
      {/* Contact us steps */}
      <div
        style={{
          backgroundImage: `url('${overlay.src}')`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
        className="flex text-white pt-[60px] bg-cover bg-no-repeat  flex-col  h-auto lg:min-h-screen"
      >
        <div className="grid flex-1 grid-cols-12 gap-6 pt-16 px-5 md:px-16 md:pt-[80px]">
          <div className="col-span-12 lg:col-span-7 flex items-center">
            <div className="text-center mb-10">
              <h1 className="leading-[120%] text-5xl md:[55px] lg:text-[65px] font-semibold mb-4">Let’s resolve things – together</h1>
              <p className="text-base text-white lg:text-lg">
                Get in touch to speak with a specialist about your situation. Whether you're navigating a conflict, booking mediation, or
                exploring training, we're here to help
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <form className="md:space-y-4 text-black  rounded-3xl border-2 border-[#E7E7F1] py-5 px-4 lg:px-8 bg-white space-y-3 ">
              <h2 className="text-3xl text-center font-semibold mb-6 opacity-80">Get in touch</h2>
              <div>
                <input
                  placeholder="Full Name"
                  className="w-full outline-0  py-3 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div>
                <input
                  placeholder="Email address"
                  required
                  className="w-full outline-0  py-3 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <input
                  placeholder="Company name"
                  className="w-full outline-0  py-3 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                  type="text"
                  name="company"
                  id="company"
                />
              </div>
              <div>
                <input
                  placeholder=" Type of conflict"
                  className="w-full outline-0  py-3 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                  type="text"
                  name="conflict"
                  id="conflict"
                />
              </div>
              <button
                className="bg-primary w-full cursor-pointer mt-1 py-2 px-8 text-white font-semibold text-lg rounded-3xl"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid text-white mt-10 mb-10  grid-cols-3 gap-10 pb-16 px-5 md:px-16 md:pb-[20px] ">
          <div className="col-span-3 lg:col-span-1 flex gap-5 items-center">
            <Check className="text-primary flex-shrink-0" />
            <p className=" font-normal text-[15px]">
              <strong>Free</strong> , no-obligation consultation to understand your needs and explain how we can help.
            </p>
          </div>

          <div className="col-span-3 lg:col-span-1 flex gap-5 items-center">
            <Check className="text-primary flex-shrink-0" />
            <p className=" font-normal text-[15px]">
              <strong> Tailored support from real experts</strong> — every inquiry is reviewed by an experienced case manager.
            </p>
          </div>

          <div className="col-span-3 lg:col-span-1 flex gap-5 items-center">
            <Check className="text-primary flex-shrink-0" />
            <p className=" font-normal text-[15px]">
              <strong> Trusted by Thousands</strong> . We’ve helped resolve over 20,000 disputes across the UK — from families and
              businesses to government bodies.
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-16 mt-10 px-5">
        <div className="py-[84px] overflow-hidden px-8 relative md:p-16 bg-secondary rounded-3xl">
          <div className="z-10 py-10 mx-auto text-white text-center">
            <div className="z-10 relative">
              <div className="max-w-[950px] mx-auto">
                <h1 className="font-medium text-4xl md:text-[54px] leading-[120%] mb-[20px] md:mb-6">Let’s find a way forward, together</h1>
                <p className=" text-base md:text-lg">
                  For more information about our services, team, training programs, or career opportunities, get in touch with us .
                </p>
              </div>
              <div className={`mt-8 md:max-w-[950px] grid grid-cols-1 md:grid-cols-2  gap-4  mx-auto`}>
                <button className="bg-primary font-semibold text-[#FCFCFD] px-10 py-3 rounded-[40px] text-base md:text-lg">
                  <Link className="flex items-center justify-center gap-2 w-full text-center" href="mailto:sen@globalmediaiton.co.uk">
                    <Mail className="flex-shrink-0" size={20} />
                    sen@globalmediaiton.co.uk
                  </Link>
                </button>
                <button className="font-semibold border border-white text-base md:text-lg text-white px-6 py-3 rounded-[40px]">
                  <Link className=" w-full text-center flex items-center gap-2 justify-center" href="tel:020 8441 1355">
                    <Phone size={20} />
                    020 8441 1355
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* Shapes */}
          <div className=" absolute top-0 left-0">
            <svg
              className="w-[157px] h-[162px] md:w-[302px] md:h-[309px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 302 309"
              fill="none"
            >
              <path
                d="M152.619 0.123877L0.0555271 0.251038L0.181096 150.905C0.143914 152.392 0.134061 153.715 0.135081 154.938C0.0672163 175.633 4.08846 196.137 11.9679 215.273C19.8259 234.233 30.6563 250.759 44.102 264.38C57.5477 278 73.79 288.913 92.3238 296.85C110.878 304.79 130.861 308.851 151.043 308.781C178.329 308.758 203.776 301.927 226.715 288.489C249.655 275.052 268.018 256.28 281.241 232.698C294.463 209.116 301.153 182.901 301.129 154.687C301.106 126.474 294.367 100.171 281.11 76.5345C267.854 52.8982 249.481 34.0462 226.503 20.5376C204.041 7.34152 179.192 0.51335 152.619 0.228156L152.619 0.123877Z"
                fill="#4E1470"
              />
            </svg>
          </div>
          <div className=" absolute right-0 bottom-0 z-[1]">
            <svg
              className="w-[157px] h-[162px] md:w-[302px] md:h-[309px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 301 309"
              fill="none"
            >
              <path
                d="M148.382 308.655H300.945V158.001C300.984 156.514 300.995 155.192 300.995 153.968C301.08 133.273 297.075 112.766 289.212 93.623C281.37 74.6569 270.553 58.1218 257.119 44.4899C243.684 30.858 227.451 19.9316 208.924 11.9796C190.376 4.02351 170.397 -0.0534584 150.215 -0.000466539C122.929 -0.000466539 97.476 6.81001 74.5256 20.2279C51.5752 33.6458 33.1963 52.4034 19.954 75.9739C6.71169 99.5445 0 125.755 0 153.968C0 182.181 6.71718 208.49 19.954 232.137C33.1908 255.785 51.5478 274.652 74.5146 288.18C96.9656 301.395 121.809 308.244 148.382 308.551V308.655Z"
                fill="#4E1470"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.296628053736!2d-0.1977913882050758!3d51.599453303857395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617534e13e1fb%3A0xf4f8bfe7deeed958!2sMolteno%20House%2C%20302%20Regents%20Park%20Rd%2C%20London%20N3%202JX%2C%20UK!5e0!3m2!1sen!2sbd!4v1742977399771!5m2!1sen!2sbd"
            className="w-full h-[350px] lg:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Custom CTA */}
    </div>
  );
};

export default ContactUs;
