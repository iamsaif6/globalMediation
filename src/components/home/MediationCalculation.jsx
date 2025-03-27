'use client';
import React, { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';
import Link from 'next/link';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const MediationCalculation = () => {
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
    <section className="py-[64px] md:py-[80px] px-5 md:px-[60px]">
      <SectionHeading
        title={'See How Much Mediation Can Save You'}
        subTitle={'Try our Mediation Savings Calculator to discover how much time and cost you could save compared to going to court.'}
        center={true}
      />
      <div>
        <div className="grid grid-cols-2 gap-[33px] mt-[60px]">
          <div className="bg-[#efedfc] col-span-2 lg:col-span-1 rounded-[20px] p-8">
            <h3 className="text-sm md:text-[27px] text-[#393D4E] font-semibold leading-[140%]">User Inputs</h3>
            <div className="mt-5 space-y-[10px]">
              <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                <p className="text-[#393D4E] ">Type of Dispute</p>
                <select className="bg-[#F6F1F9] rounded-[10px] px-4 py-3" name="" id="">
                  <option value="workplace">Workplace</option>
                </select>
              </div>
              <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                <p className="text-[#393D4E] ">Estimated Litigation Duration </p>
                <div className="grid grid-cols-2 gap-[10px]">
                  <input
                    className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                    placeholder="DD"
                    type="text"
                  />
                  <input
                    className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                    placeholder="YY"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                <p className="text-[#393D4E] ">Estimated Litigation Cost (£)</p>
                <input
                  className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                  placeholder="£"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#efedfc] col-span-2 lg:col-span-1 rounded-[20px] p-8">
            <h3 className="text-sm md:text-[27px] text-[#393D4E] font-semibold leading-[140%]">Outputs</h3>
            <div className="mt-5 space-y-[10px]">
              <div className="grid text-[10px] md:text-[20px] grid-cols-2 items-center gap-2">
                <p className="text-[#393D4E] ">Time Saved</p>
                <input
                  className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                  placeholder="0%"
                  type="text"
                />
              </div>
              <div className="grid text-[10px] md:text-[20px] grid-cols-2 items-center gap-2">
                <p className="text-[#393D4E] ">Cost Saved</p>
                <div className="grid grid-cols-2 gap-[10px]">
                  <input
                    className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                    placeholder="£0"
                    type="text"
                  />
                  <input
                    className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                    placeholder="0%"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                <p className="text-[#393D4E] ">Success Rate Comparison</p>
                <input
                  className="bg-[#F6F1F9] outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3"
                  placeholder="0%"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <button
            onClick={() => openModal()}
            className=" hover:bg-primary hover:text-white hover:border-primary cursor-pointer duration-300  font-normal border border-[#393D4E] text-lg text-[#393D4E] px-9 py-3 rounded-[40px] "
          >
            Calculate
          </button>
        </div>
      </div>
      {/* Result Section */}

      {/* Modal */}
      <Modal isOpen={modalOpen} onRequestClose={afterCloseModal} contentLabel="Example Modal">
        <div className="p-0 border-0">
          <div className="navbar flex items-center justify-end  flex-wrap">
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
              <h2 className="text-[#393D4E] font-medium md:font-semibold text-2xl md:text-[32px] mb-[53px] text-center">
                Based on your inputs, mediation could save you:
              </h2>
              <div className="grid grid-cols-3 gap-7.5 leading-[140%]">
                <div className="bg-[#EAE8FE] col-span-3 lg:col-span-1 flex flex-col gap-[30px] justify-between text-secondary rounded-[20px] px-7 md:px-[35px] pt-[22px] pb-[42px]">
                  <h3 className="leading-[140%] flex items-center gap-2.5 text-[42px] md:text-[54px] font-semibold">
                    90% <span className="font-semibold text-base md:text-[20px]">in cost</span>
                  </h3>
                  <p className=" text-[20px] md:text-2xl font-semibold">
                    Potential savings: <br />
                    £X,XXX - £X,XXX
                  </p>
                </div>
                <div className="bg-[#EAE8FE] col-span-3 lg:col-span-1 flex flex-col gap-[30px] justify-between text-secondary rounded-[20px] px-7 md:px-[35px] pt-[22px] pb-[42px]">
                  <h3 className="leading-[140%] flex flex-col  gap-2.5  text-[42px] md:text-[54px] font-semibold">
                    80%
                    <span className="font-semibold leading-0 text-base md:text-[20px]">of your time</span>
                  </h3>
                  <p className=" text-[20px] leading-[140%]  font-semibold">Resolving your dispute in just X weeks instead of X months</p>
                </div>
                <div className="bg-[#EAE8FE] col-span-3 lg:col-span-1 flex items-center p-[29px] md:p-[37px] flex-col gap-[30px] justify-between text-secondary rounded-[20px] p">
                  <h3 className="font-semibold flex items-center gap-6 md:gap-2">
                    <span className="text-sm  md:text-lg">Mediation</span> <span className="text-4xl md:text-5xl inline-block ">90%</span>{' '}
                    <span className="text-xs md:text-base font-normal">success Rate</span>
                  </h3>
                  <p className="font-semibold text-[20px] md:text-2xl text-secondary">VS</p>
                  <h3 className="font-semibold flex items-center gap-6 md:gap-2">
                    <span className="text-sm md:text-lg">Litigation</span> <span className="text-4xl md:text-5xl inline-block ">80%</span>{' '}
                    <span className="text-xs md:text-base font-normal">success Rate</span>
                  </h3>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="md:flex hidden items-center gap-4 justify-center mt-[60px]">
              <Button title={'Schedule a Mediation Session'} href="#" />
              <button className="  font-normal border border-[#393D4E] text-lg text-[#393D4E] px-[24px] py-3 rounded-[40px] ">
                <Link className="w-full  " href="#">
                  Speak to a Mediator Today
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default MediationCalculation;
