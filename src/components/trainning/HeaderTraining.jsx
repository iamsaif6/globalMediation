'use client';
import React, { useState } from 'react';
import banner from '/public/Hero Training Page with Layer.png';
import Link from 'next/link';
import Modal from 'react-modal';
import overlay from '/public/Overlay.png';
import Image from 'next/image';

export const HeaderTraining = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function afterCloseModal() {
    closeModal();
  }

  // linear-gradient(to right, rgba(62, 0, 101, 0.9) 1.68%, rgba(62,0,101,0.15) 69.4%)

  return (
    <header
      style={{
        backgroundImage: `url('${banner.src}')`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
      className=" pt-[187px] h-auto lg:h-screen relative md:pt-[238px] pb-[176px] md:pb-[203px] px-5 md:px-[60px]"
    >
      <Image src={overlay} alt="Header Overlay" className=" absolute top-0 left-0 w-full h-full object-cover" />
      <div className="w-full relative z-10 lg:max-w-[1318px] mx-auto">
        <h1 className="font-semibold tracking-[-4%] max-w-[900px] leading-[120%] text-5xl md:[55px] lg:text-[65px] text-white">
          Mediation Training: Learn, Qualify, and Specialise
        </h1>
        <p className="text-white mt-[18px] max-w-[700px] md:mt-6 mb-[26px] md:mb-8 w-[70%] font-normal text-sm md:text-lg">
          Explore accredited mediation training programmes designed for aspiring mediators and professionals looking to build their skills
          in conflict resolution.Our hands-on courses help you grow with confidence, guided by expert trainers and real-world practice.
        </p>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <button
            title=" Enroll in a Mediation Training Program Today"
            onClick={openModal}
            className={`bg-primary cursor-pointer border w-full md:w-auto border-primary font-normal text-lg text-[#FCFCFD] px-12 py-3 rounded-[40px]`}
          >
            Enroll in a Mediation Training Program Today
          </button>

          <button className=" w-full md:w-auto bg-transparent font-normal border border-white text-lg text-[#FCFCFD] px-[48px] py-3 rounded-[40px] ">
            <Link title="Contact Us for Upcoming Course Dates" className="w-full  " href={'/contact-us'}>
              Contact Us for Upcoming Course Dates
            </Link>
          </button>
        </div>
      </div>
      {/* Contact Modal */}

      {/* Modal */}
      <Modal isOpen={modalOpen} onRequestClose={afterCloseModal} contentLabel="Mediation Savings Results">
        <div className="p-0 border-0">
          <div className="navbar flex items-center justify-end flex-wrap">
            {/* Delete and Close Modal Section */}
            <div className="buttons flex items-center gap-3 !mt-0 px-2">
              <button
                onClick={() => closeModal()}
                className="close cursor-pointer text-sm text-[#17181B] bg-transparent h-7 w-7 flex items-center justify-center rounded-full transition-all hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <div className="mt-8">
              <h2 className="text-4xl text-center font-semibold mb-5 opacity-80">Get in Touch</h2>
              <div className=" leading-[140%]">
                <form className="md:space-y-4  rounded-3xl py-10 px-8 space-y-6 ">
                  {/* <div className="grid grid-cols-2 gap-5"></div> */}
                  <div>
                    <label className="text-base font-normal md:text-[16px] block mb-2.5 text-[#393D4E]" htmlFor="name">
                      Name
                    </label>
                    <input className="w-full outline-0  p-3 rounded-xl bg-[#F8F8F8]" type="text" name="name" id="name" />
                  </div>
                  <div>
                    <label className="text-base font-normal md:text-[16px] block mb-2.5 text-[#393D4E]" htmlFor="email">
                      Email
                    </label>
                    <input required className="w-full outline-0 p-3 rounded-xl bg-[#F8F8F8]" type="email" name="email" id="email" />
                  </div>
                  <div>
                    <label className="text-base font-normal md:text-[16px] block mb-2.5 text-[#393D4E]" htmlFor="company">
                      Company name
                    </label>
                    <input className="w-full outline-0 p-3 rounded-xl bg-[#F8F8F8]" type="text" name="company" id="company" />
                  </div>
                  <div>
                    <label className="text-base font-normal md:text-[16px] block mb-2.5 text-[#393D4E]" htmlFor="conflict">
                      Type of conflict
                    </label>
                    <input className="w-full outline-0 p-3 rounded-xl bg-[#F8F8F8]" type="text" name="conflict" id="conflict" />
                  </div>
                  <div>
                    <label className="text-base font-normal md:text-[16px] block mb-2.5 text-[#393D4E]" htmlFor="conflict">
                      Message
                    </label>
                    <textarea
                      placeholder="Type your message..."
                      className="w-full outline-0 placeholder:text-[20px] placeholder:text-[#C5C0C9] p-3 rounded-xl bg-[#F8F8F8]"
                      type="text"
                      name="conflict"
                      id="conflict"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <input required type="checkbox" />
                    <label className="text-base font-normal md:text-[16px] block  text-[#393D4E]" htmlFor="conflict">
                      I accept the{' '}
                      <Link href={'#'} className="underline">
                        Terms
                      </Link>
                    </label>
                  </div>
                  <button className="bg-primary cursor-pointer mt-3 py-3 px-8 text-white font-normal text-lg rounded-3xl" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            {/* 
            <div className="md:flex hidden items-center gap-4 justify-center mt-[60px]">
              <Button title={'Schedule a Mediation Session'} href="/contact-us" />
              <button className="font-normal border border-[#393D4E] text-lg text-[#393D4E] px-[24px] py-3 rounded-[40px]">
                <Link className="w-full" href="/contact-us">
                  Speak to a Mediator Today
                </Link>
              </button>
            </div> */}
          </div>
        </div>
      </Modal>
    </header>
  );
};
