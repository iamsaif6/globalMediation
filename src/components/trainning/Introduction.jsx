'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import service1 from '/public/training-1.jpg';
import Link from 'next/link';
import Modal from 'react-modal';

const Introduction = () => {
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

  return (
    <section>
      <div className=" py-16 px-5 md:px-16 md:py-[80px]">
        <div className="text-left md:text-center mb-10 lg:mb-[80px]">
          <h2 className="font-medium text-4xl md:text-5xl leading-[120%]">Overview of Mediation Training</h2>
          <p className="text-black text-base md:text-lg leading-[150%] my-6">
            Whether you’re starting your mediation journey or expanding into specialist areas like SEND, our training programmes are
            designed to give you the practical tools and confidence to mediate with clarity, care and professionalism. <br /> <br />{' '}
            Delivered by experienced trainers, each course offers expert insight, immersive practice, and tailored support.
          </p>
        </div>
        <div className="items-center grid grid-cols-2 gap-[80px]">
          <div className="relative mx-auto w-full lg:max-w-auto h-[303px] lg:h-[403px] max-w-[600px] hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
            <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="relative h-[303px] lg:h-[403px] my-10 block md:hidden  rounded-3xl overflow-hidden">
              {/* <div className={`from-[rgba(67,0,106,0.1)] to-[#00a49e9b] absolute inset-0 bg-gradient-to-b  z-10`}></div> */}
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
            </div>
            <div>
              <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
              <ul className="text-[#667085] text-lg">
                <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                  <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                  <span>Accredited by the Civil Mediation Council and the College of Mediators</span>
                </li>
                <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                  <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                  <span>Hands-on learning through role plays, exercises and reflection</span>
                </li>
                <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                  <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                  <span>Comprehensive support, including tutorials, coaching and feedback</span>
                </li>
              </ul>

              <div className="mt-6 flex justify-center md:block">
                <button
                  title=" Start Your Mediation Journey Today"
                  onClick={openModal}
                  className={`bg-primary border cursor-pointer border-primary font-semibold text-lg text-[#FCFCFD] px-[19px] md:px-[42px] py-3 rounded-[40px]`}
                >
                  Start Your Mediation Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Introduction;
