import Header from '@/components/shared/Header';
import React from 'react';
import contactUsCover from '/public/contactUSCover.png';
import Map from '@/components/service/Map';
import CTA from '@/components/shared/CTA';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="pt-[120px] bg-gray-100">
      {/* <Header title={'Contact us'} subTitle={'Direct users to reach out for consultations or general inquiries'} cover={contactUsCover} /> */}
      {/* Contact us steps */}
      <div className="grid  grid-cols-12 gap-6 py-16 px-5 md:px-16 md:py-[80px]">
        <div className="col-span-12 lg:col-span-7">
          <div className="mb-[100px]">
            <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-70">Direct users to reach out for consultations or general inquiries</p>
            {/* <div className="my-8 text-base">
              <a className=" my-2 block " href="mailto:sen@globalmediaiton.co.uk">
                sen@globalmediaiton.co.uk
              </a>
              <a className="my-2 block " href="tel:020 8441 1355">
                020 8441 1355
              </a>
              <a target="_blank" className="my-2 block " href="http://www.globalmediation.co.uk">
                www.globalmediation.co.uk
              </a>
            </div> */}
            <form className="bg-white max-w-[500px] border-[#E7E7F1] mt-5 border rounded-4xl relative">
              <Mail size={20} className="text-gray-600 absolute left-6 top-1/2 -translate-y-1/2" />
              <input placeholder="Your email address" type="email" required className="py-5  pr-6 pl-14 outline-0 w-full " />
              <button
                className=" py-3 cursor-pointer font-bold px-6 border-[#E7E7F1] rounded-4xl absolute top-1/2 right-3 -translate-y-1/2 border"
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-3 lg:col-span-1">
              <h4 className="font-semibold text-[20px] mb-4">Email</h4>
              <p className="text-[#667085] mb-6 font-normal text-[16px]">sen@globalmediaiton.co.uk</p>
            </div>

            <div className="col-span-3 lg:col-span-1">
              <h4 className="font-semibold text-[20px] mb-4">Phone</h4>
              <p className="text-[#667085] mb-6 font-normal text-[16px]">020 8441 1355</p>
            </div>

            <div className="col-span-3 lg:col-span-1">
              <h4 className="font-semibold text-[20px] mb-4">Website</h4>
              <p className="text-[#667085] mb-6 font-normal text-[16px]">www.globalmediation.co.uk</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <form className="md:space-y-4  rounded-3xl border-2 border-[#E7E7F1] py-10 px-8 bg-white space-y-6 ">
            <h2 className="text-4xl text-center font-semibold mb-6 opacity-80">Get in Touch</h2>
            <div>
              <input
                placeholder="Full Name"
                className="w-full outline-0  py-4 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div>
              <input
                placeholder="Email Address"
                required
                className="w-full outline-0  py-4 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <input
                placeholder="Company Name"
                className="w-full outline-0  py-4 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                type="text"
                name="company"
                id="company"
              />
            </div>
            <div>
              <input
                placeholder=" Type of Conflict"
                className="w-full outline-0  py-4 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                type="text"
                name="conflict"
                id="conflict"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your message..."
                className="w-full outline-0  py-4 px-6 rounded-4xl  border border-[#E7E7F1] bg-[#F8F9FD]"
                type="text"
                name="conflict"
                id="conflict"
                rows={1}
              />
            </div>
            {/* <div className="flex gap-1.5 items-center">
              <input required type="checkbox" />
              <label className="text-base font-normal md:text-[16px] block  text-[#393D4E]" htmlFor="conflict">
                I accept the{' '}
                <Link href={'#'} className="underline">
                  Terms
                </Link>
              </label>
            </div> */}
            <button className="bg-primary w-full cursor-pointer mt-3 py-3 px-8 text-white font-normal text-lg rounded-3xl" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mb-10">
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
      <CTA
        title={'Start Your Mediation Training Journey Today'}
        subTitle={'Take the first step toward becoming a qualified mediator or enhancing your existing mediation skills.'}
        Button1Link={'/training'}
        Button1Text={'Enrol in a Mediation Training Program Today'}
        Button2Link={'/contact-us'}
        Button2Text={'Contact Us for Upcoming Course Dates'}
      />
    </div>
  );
};

export default ContactUs;
