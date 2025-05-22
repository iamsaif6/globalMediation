'use client';
import React, { useEffect, useState } from 'react';
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
    setValue,
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

  const litigationCost = watch('litigationCost');
  useEffect(() => {
    if (litigationCost) {
      const numericValue = litigationCost.replace(/,/g, '');
      if (!isNaN(numericValue)) {
        const formatted = Number(numericValue).toLocaleString('en-UK');
        if (formatted !== litigationCost) {
          setValue('litigationCost', formatted);
        }
      }
    }
  }, [litigationCost, setValue]);

  function openModal(data) {
    const litigationCost = parseFloat(data.litigationCost.replace(/,/g, ''));
    const litigationDuration = parseInt(data.litigationDuration);
    const mediationCost = parseFloat(data.mediationCost);
    const mediationDuration = parseInt(data.mediationDuration);

    const costSavingsPercentage = (1 - mediationCost / litigationCost) * 100;
    const costSavingsAmount = litigationCost - mediationCost;
    const timeSavingsPercentage = Math.floor((1 - mediationDuration / litigationDuration) * 100);

    setCalculationResults({
      costSavings: {
        percentage: costSavingsPercentage,
        range: `${costSavingsAmount}`,
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

  return (
    <section aria-label="Mediation Calculator" className="py-[64px] md:py-[50px] px-5 md:px-[60px]">
      <SectionHeading
        title={'See How Much Mediation Can Save You'}
        subTitle={'Try our Mediation Savings Calculator to discover how much time and cost you could save compared to going to court.'}
        center={true}
      />
      <div>
        <form onSubmit={handleSubmit(openModal)}>
          <div className="max-w-[850px] mx-auto mt-[60px]">
            <div className="bg-[#efedfc] rounded-[20px] p-8">
              <h3 className="text-base md:text-[27px] text-[#393D4E] font-semibold leading-[140%]">User Inputs</h3>
              <div className="mt-5 space-y-[10px]">
                <div className="grid grid-cols-2 text-[14px] md:text-[20px] items-center gap-2">
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
                <div className="grid grid-cols-2 text-[14px] md:text-[20px] items-center gap-2">
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
                <div className="grid grid-cols-2 text-[14px] md:text-[20px] items-center gap-2">
                  <p className="text-[#393D4E]">Estimated Litigation Cost (£)</p>
                  <div>
                    <input
                      {...register('litigationCost', {
                        required: 'Cost is required',
                        validate: value => /^(\d{1,3}(,\d{3})*|\d+)(\.\d+)?$/.test(value) || 'Please enter a valid number',
                      })}
                      className="bg-white outline-0 placeholder:text-black placeholder:opacity-100 text-[#000] rounded-[10px] px-4 py-3 w-full"
                      placeholder="£"
                      type="text"
                    />
                    {errors.litigationCost && <p className="text-red-500 text-xs mt-1">{errors.litigationCost.message}</p>}
                  </div>
                </div>

                {/* Mediation Duration  */}
                <div className=" hidden grid-cols-2 text-[14px] md:text-[20px] items-center gap-2">
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
                <div className=" hidden grid-cols-2 text-[14px] md:text-[20px] items-center gap-2">
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
            <button type="submit" className="bg-primary  font-semibold text-lg text-white px-[57px] py-3 rounded-3xl lg:rounded-[40px]">
              Calculate
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onRequestClose={afterCloseModal} contentLabel="Mediation Savings Results">
        <div className="p-0 border-0">
          <div className="navbar sticky top-0 flex items-center justify-end flex-wrap">
            {/* Delete and Close Modal Section */}
            <div className="buttons flex items-center gap-3 !mt-0 px-2">
              <button
                onClick={() => closeModal()}
                className="close cursor-pointer text-sm text-[#17181B]  h-9 w-9 flex items-center justify-center rounded-full bg-white border-black/15 transition-all hover:bg-gray-200"
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
                <h2 className=" font-medium md:font-semibold text-2xl md:text-[32px] mb-[53px] text-center">
                  Based on your inputs, mediation could save you:
                </h2>
                <div className="grid grid-cols-3 gap-7.5 leading-[140%]">
                  <div className="bg-[#EAE8FE] text-center col-span-3 lg:col-span-1 flex flex-col gap-[30px] justify-between items-center  rounded-[20px] px-7 md:px-[35px] p-[29px] ">
                    <p className="font-semibold">Cost</p>
                    <div>
                      <h3 className="leading-[140%] font-normal text-secondary  text-center text-[25px]  ">
                        {/* {calculationResults.costSavings.percentage.toFixed(2)}% <span className=" text-base">in cost</span> */}
                        <span className="block"> £ {Number(calculationResults.costSavings.range).toLocaleString()}</span>
                        <span className="text-base block">Potential savings</span>
                      </h3>
                      {/* <p className=" text-secondary font-normal ">
                        Potential savings: £ {Number(calculationResults.costSavings.range).toLocaleString()}
                      </p> */}
                    </div>
                    <p className="font-semibold">{Math.round(calculationResults.costSavings.percentage)}% in cost savings</p>
                  </div>
                  <div className="bg-[#EAE8FE] col-span-3 text-center lg:col-span-1 flex flex-col gap-[30px] justify-between items-center  rounded-[20px] px-7 md:px-[35px] p-[29px] ">
                    <p className="font-semibold">Time</p>
                    <h3 className="leading-[140%] text-secondary flex flex-col gap-2.5  text-[25px] font-normal">
                      {calculationResults.timeSavings.percentage}%<span className=" leading-0 text-base ">of your time</span>
                    </h3>
                    <p className=" font-semibold">
                      Resolving your dispute in just {calculationResults.timeSavings.newDuration} days instead of{' '}
                      {calculationResults.timeSavings.originalDuration} days
                    </p>
                  </div>
                  <div className="bg-[#EAE8FE] text-center col-span-3 lg:col-span-1 flex flex-col gap-[30px] justify-between items-center  rounded-[20px] px-7 md:px-[35px] p-[29px] ">
                    <p className="font-semibold">Success Rate</p>
                    <div className="flex flex-col gap-4 items-center justify-center">
                      <h3 className=" text-secondary flex items-center gap-6 md:gap-2">
                        <span className="text-[25px] inline-block">{calculationResults.successRates.mediation}%</span>
                        <span className="  font-normal">Mediation</span>
                        <span className=" font-normal">Success Rate</span>
                      </h3>
                      <p className=" text-secondary text-[18px] ">VS</p>
                      <h3 className=" text-secondary  flex items-center gap-6 md:gap-2">
                        <span className="text-[25px]  inline-block">{calculationResults.successRates.litigation}%</span>
                        <span className="  font-normal ">Litigation</span>

                        <span className="  font-normal">Success Rate</span>
                      </h3>
                    </div>
                    <p className="font-semibold">36% success rate increase</p>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="md:flex hidden items-center gap-4 justify-center mt-[60px]">
                <Button title={'Schedule a Mediation Session'} href="/contact-us" />
                <button className="font-normal border border-[#393D4E] text-lg text-[#393D4E] px-[24px] py-3 rounded-[40px]">
                  <Link title=" Speak to a Mediator Today" className="w-full" href="/contact-us">
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
