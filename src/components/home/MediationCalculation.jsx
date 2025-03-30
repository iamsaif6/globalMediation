'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';
import Link from 'next/link';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const MediationCalculation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [calculationResults, setCalculationResults] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      dispute: 'SEND',
      litigationDuration: '',
      litigationCost: '',
      mediationDuration: 1,
      mediationCost: 2000,
    },
  });

  function openModal(data) {
    const litigationCost = parseFloat(data.litigationCost);
    const litigationDuration = parseInt(data.litigationDuration);
    const mediationCost = parseFloat(data.mediationCost);
    const mediationDuration = parseInt(data.mediationDuration);

    const costSavingsPercentage = (1 - mediationCost / litigationCost) * 100;
    const costSavingsAmount = litigationCost - mediationCost;
    const timeSavingsPercentage = (1 - mediationDuration / litigationDuration) * 100;

    setCalculationResults({
      costSavings: {
        percentage: costSavingsPercentage,
        range: `£ ${costSavingsAmount}`,
      },
      timeSavings: {
        percentage: timeSavingsPercentage,
        originalDuration: litigationDuration,
        newDuration: mediationDuration,
      },
      successRates: {
        mediation: 86,
        litigation: 50,
      },
    });

    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function afterCloseModal() {
    closeModal();
  }

  console.log(calculationResults);

  return (
    <section className="py-[64px] md:py-[80px] px-5 md:px-[60px]">
      <SectionHeading
        title={'See How Much Mediation Can Save You'}
        subTitle={'Try our Mediation Savings Calculator to discover how much time and cost you could save compared to going to court.'}
        center={true}
      />
      <div>
        <form onSubmit={handleSubmit(openModal)}>
          <div className="max-w-[850px] mx-auto mt-[60px]">
            <div className="bg-[#efedfc] rounded-[20px] p-8">
              <h3 className="text-sm md:text-[27px] text-[#393D4E] font-semibold leading-[140%]">User Inputs</h3>
              <div className="mt-5 space-y-[10px]">
                <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                  <label className="text-[#393D4E]">Type of Dispute</label>
                  <div>
                    <select
                      {...register('dispute', { required: 'Dispute type is required' })}
                      className="bg-white rounded-[10px] px-4 py-3 w-full"
                    >
                      <option value="SEND">SEND</option>
                      <option value="Workplace">Workplace</option>
                      <option value="PI/Clinical">PI/Clinical</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Housing">Housing</option>
                      <option value="Probate">Probate</option>
                    </select>
                    {errors.dispute && <p className="text-red-500 text-xs mt-1">{errors.dispute.message}</p>}
                  </div>
                </div>

                {/* Litigation Duration */}
                <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                  <p className="text-[#393D4E]">Estimated Litigation Duration (days)</p>
                  <div>
                    <input
                      {...register('litigationDuration', {
                        required: 'Duration is required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Please enter a whole number',
                        },
                        validate: value => parseInt(value) === parseFloat(value) || 'Please enter a whole number',
                      })}
                      className="bg-white outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3 w-full"
                      placeholder="Enter number of days"
                      type="text"
                    />
                    {errors.litigationDuration && <p className="text-red-500 text-xs mt-1">{errors.litigationDuration.message}</p>}
                  </div>
                </div>

                {/* Litigation Cost */}
                <div className="grid grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                  <p className="text-[#393D4E]">Estimated Litigation Cost (£)</p>
                  <div>
                    <input
                      {...register('litigationCost', {
                        required: 'Cost is required',
                        pattern: {
                          value: /^[0-9]*\.?[0-9]*$/,
                          message: 'Please enter a valid number',
                        },
                      })}
                      className="bg-white outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3 w-full"
                      placeholder="£"
                      type="text"
                    />
                    {errors.litigationCost && <p className="text-red-500 text-xs mt-1">{errors.litigationCost.message}</p>}
                  </div>
                </div>

                {/* Mediation Duration  */}
                <div className="grid hidden grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                  <p className="text-[#393D4E]">Estimated Mediation Duration (days)</p>
                  <div>
                    <input
                      {...register('mediationDuration', {
                        required: 'Mediation duration is required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Please enter a whole number',
                        },
                        validate: value => parseInt(value) === parseFloat(value) || 'Please enter a whole number',
                      })}
                      className="bg-white outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3 w-full"
                      placeholder="Enter number of days"
                      type="text"
                      value={1}
                      readOnly
                    />
                    {errors.mediationDuration && <p className="text-red-500 text-xs mt-1">{errors.mediationDuration.message}</p>}
                  </div>
                </div>

                {/* Mediation Cost  */}
                <div className="grid hidden grid-cols-2 text-[10px] md:text-[20px] items-center gap-2">
                  <p className="text-[#393D4E]">Estimated Mediation Cost (£)</p>
                  <div>
                    <input
                      {...register('mediationCost', {
                        required: 'Mediation cost is required',
                        pattern: {
                          value: /^[0-9]*\.?[0-9]*$/,
                          message: 'Please enter a valid number',
                        },
                      })}
                      className="bg-white outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3 w-full"
                      placeholder="£"
                      type="text"
                      value={2000}
                      readOnly
                    />
                    {errors.mediationCost && <p className="text-red-500 text-xs mt-1">{errors.mediationCost.message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-16">
            <button
              type="submit"
              className="hover:bg-primary hover:text-white hover:border-primary cursor-pointer duration-300 font-normal border border-[#393D4E] text-lg text-[#393D4E] px-9 py-3 rounded-[40px]"
            >
              Calculate
            </button>
          </div>
        </form>
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

          {calculationResults && (
            <div>
              <div className="mt-8">
                <h2 className="text-[#393D4E] font-medium md:font-semibold text-2xl md:text-[32px] mb-[53px] text-center">
                  Based on your inputs, mediation could save you:
                </h2>
                <div className="grid grid-cols-3 gap-7.5 leading-[140%]">
                  <div className="bg-[#EAE8FE] col-span-3 lg:col-span-1 flex flex-col gap-[30px] justify-between text-secondary rounded-[20px] px-7 md:px-[35px] pt-[22px] pb-[42px]">
                    <h3 className="leading-[140%] flex items-center gap-2.5 text-[42px] md:text-[54px] font-semibold">
                      {calculationResults.costSavings.percentage.toFixed(2)}%{' '}
                      <span className="font-semibold text-base md:text-[20px]">in cost</span>
                    </h3>
                    <p className="text-[20px] md:text-2xl font-semibold">
                      Potential savings: <br />
                      {calculationResults.costSavings.range}
                    </p>
                  </div>
                  <div className="bg-[#EAE8FE] col-span-3 lg:col-span-1 flex flex-col gap-[30px] justify-between text-secondary rounded-[20px] px-7 md:px-[35px] pt-[22px] pb-[42px]">
                    <h3 className="leading-[140%] flex flex-col gap-2.5 text-[42px] md:text-[54px] font-semibold">
                      {calculationResults.timeSavings.percentage.toFixed(2)}%
                      <span className="font-semibold leading-0 text-base md:text-[20px]">of your time</span>
                    </h3>
                    <p className="text-[20px] leading-[140%] font-semibold">
                      Resolving your dispute in just {calculationResults.timeSavings.newDuration} days instead of{' '}
                      {calculationResults.timeSavings.originalDuration} days
                    </p>
                  </div>
                  <div className="bg-[#EAE8FE] col-span-3 lg:col-span-1 flex items-center p-[29px] md:p-[37px] flex-col gap-[30px] justify-between text-secondary rounded-[20px] p">
                    <h3 className="font-semibold flex items-center gap-6 md:gap-2">
                      <span className="text-sm md:text-lg">Mediation</span>
                      <span className="text-4xl md:text-5xl inline-block">{calculationResults.successRates.mediation}%</span>
                      <span className="text-xs md:text-base font-normal">success Rate</span>
                    </h3>
                    <p className="font-semibold text-[20px] md:text-2xl text-secondary">VS</p>
                    <h3 className="font-semibold flex items-center gap-6 md:gap-2">
                      <span className="text-sm md:text-lg">Litigation</span>
                      <span className="text-4xl md:text-5xl inline-block">{calculationResults.successRates.litigation}%</span>
                      <span className="text-xs md:text-base font-normal">success Rate</span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="md:flex hidden items-center gap-4 justify-center mt-[60px]">
                <Button title={'Schedule a Mediation Session'} href="#" />
                <button className="font-normal border border-[#393D4E] text-lg text-[#393D4E] px-[24px] py-3 rounded-[40px]">
                  <Link className="w-full" href="#">
                    Speak to a Mediator Today
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default MediationCalculation;
