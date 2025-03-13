import Link from 'next/link';
import React from 'react';

const Map = () => {
  return (
    <section className="py-16 px-5 items-center md:px-16 md:py-[80px] grid grid-cols-2 gap-7 md:gap-[80px]">
      <div className="pr-0 col-span-2 md:col-span-1 md:pr-10">
        <h1 className="text-[#393D4E] leading-[120%] text-4xl md:text-5xl font-medium ">Start Resolving Conflicts Today</h1>
        <p className=" md:text-lg mb-6 md:mb-[52px] text-base mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className=" rounded-xl  overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9582586.552593486!2d-15.035877914596911!3d54.10036344966766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sbd!4v1741855507918!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <form className="md:space-y-4 space-y-6">
          <div>
            <label className="text-base font-normal md:text-[20px] block mb-2.5 text-[#393D4E]" htmlFor="name">
              Name
            </label>
            <input className="w-full p-3 rounded-xl bg-[#F8F8F8]" type="text" name="name" id="name" />
          </div>
          <div>
            <label className="text-base font-normal md:text-[20px] block mb-2.5 text-[#393D4E]" htmlFor="email">
              Email
            </label>
            <input required className="w-full p-3 rounded-xl bg-[#F8F8F8]" type="email" name="email" id="email" />
          </div>
          <div>
            <label className="text-base font-normal md:text-[20px] block mb-2.5 text-[#393D4E]" htmlFor="company">
              Company name
            </label>
            <input className="w-full p-3 rounded-xl bg-[#F8F8F8]" type="text" name="company" id="company" />
          </div>
          <div>
            <label className="text-base font-normal md:text-[20px] block mb-2.5 text-[#393D4E]" htmlFor="conflict">
              Type of conflict
            </label>
            <input className="w-full p-3 rounded-xl bg-[#F8F8F8]" type="text" name="conflict" id="conflict" />
          </div>
          <div>
            <label className="text-base font-normal md:text-[20px] block mb-2.5 text-[#393D4E]" htmlFor="conflict">
              Message
            </label>
            <textarea
              placeholder="Type your message..."
              className="w-full placeholder:text-[20px] placeholder:text-[#C5C0C9] p-3 rounded-xl bg-[#F8F8F8]"
              type="text"
              name="conflict"
              id="conflict"
              rows={5}
            />
          </div>
          <div className="flex gap-1.5 items-center">
            <input required type="checkbox" />
            <label className="text-base font-normal md:text-[20px] block  text-[#393D4E]" htmlFor="conflict">
              I accept the{' '}
              <Link href={'#'} className="underline">
                Terms
              </Link>
            </label>
          </div>
          <button className="bg-primary mt-3 py-3 px-8 text-white font-normal text-lg rounded-3xl" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Map;
