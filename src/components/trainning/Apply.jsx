import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import Link from 'next/link';
import Button from '../shared/Button';

const Apply = () => {
  return (
    <section className="py-16 px-5 md:px-16 md:py-[80px]">
      <SectionHeading
        title={'How to Apply for Our Training Programmes'}
        subTitle={'Ready to take the next step in your mediation career? Applying is simple:'}
        fullWidth={true}
      />
      <div className="grid grid-cols-3 gap-[18px] md:gap-8 my-10 md:my-[54px]">
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            1
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Contact us</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">Email us at</span> <br />
            <span className="flex items-center gap-1 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path
                  d="M4.16602 4.70508H14.9993C15.6624 4.70508 16.2983 4.96847 16.7671 5.43731C17.236 5.90615 17.4993 6.54204 17.4993 7.20508V14.7051C17.4993 15.3681 17.236 16.004 16.7671 16.4728C16.2983 16.9417 15.6624 17.2051 14.9993 17.2051H4.16602C3.50297 17.2051 2.86709 16.9417 2.39825 16.4728C1.92941 16.004 1.66602 15.3681 1.66602 14.7051V7.20508C1.66602 6.54204 1.92941 5.90615 2.39825 5.43731C2.86709 4.96847 3.50297 4.70508 4.16602 4.70508ZM4.16602 5.53841C3.74935 5.53841 3.38268 5.68008 3.09935 5.93008L9.58268 10.1217L16.066 5.93008C15.7827 5.68008 15.416 5.53841 14.9993 5.53841H4.16602ZM9.58268 11.1301L2.60768 6.60508C2.54102 6.78841 2.49935 6.99674 2.49935 7.20508V14.7051C2.49935 15.1471 2.67494 15.571 2.9875 15.8836C3.30006 16.1961 3.72399 16.3717 4.16602 16.3717H14.9993C15.4414 16.3717 15.8653 16.1961 16.1779 15.8836C16.4904 15.571 16.666 15.1471 16.666 14.7051V7.20508C16.666 6.99674 16.6243 6.78841 16.5577 6.60508L9.58268 11.1301Z"
                  fill="#43006A"
                />
              </svg>

              <a className="text-secondary" href="mailto:info@globalmediation.co.uk">
                info@globalmediation.co.uk
              </a>
            </span>
          </p>
          <p className="flex text-base md:text-lg items-center mt-0.5">
            or call
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M5.65618 2.42777L6.8419 2.07062C7.38165 1.90778 7.96222 1.94693 8.47522 2.18076C8.98823 2.41459 9.39861 2.82712 9.62975 3.34134L10.3676 4.98277C10.5664 5.42495 10.6218 5.91829 10.526 6.39356C10.4302 6.86883 10.188 7.30216 9.83332 7.63277L8.54404 8.83491C8.52861 8.85023 8.5156 8.86781 8.50547 8.88705C8.37047 9.16277 8.57547 9.89919 9.21761 11.0121C9.9419 12.2663 10.5012 12.7621 10.7605 12.6856L12.4526 12.1678C12.916 12.0263 13.4121 12.0333 13.8713 12.1879C14.3305 12.3425 14.7299 12.6369 15.0133 13.0299L16.0619 14.4821C16.3911 14.938 16.5436 15.498 16.491 16.0579C16.4385 16.6178 16.1845 17.1396 15.7762 17.5263L14.874 18.3799C14.5603 18.6771 14.1794 18.8939 13.7637 19.0119C13.348 19.13 12.91 19.1457 12.4869 19.0578C9.97475 18.5349 7.72404 16.5121 5.71547 13.0335C3.70618 9.55277 3.07975 6.58848 3.8869 4.15062C4.02201 3.74248 4.25338 3.37286 4.56145 3.07299C4.86953 2.77312 5.24454 2.55181 5.65618 2.42777ZM5.9669 3.45348C5.7199 3.52787 5.49445 3.66063 5.30957 3.84053C5.1247 4.02042 4.98585 4.24218 4.90475 4.48705C4.20904 6.58777 4.77261 9.25634 6.64404 12.4978C8.51404 15.7371 10.5412 17.5585 12.7062 18.0085C12.96 18.0612 13.2229 18.0517 13.4722 17.9808C13.7216 17.9099 13.9502 17.7797 14.1383 17.6013L15.0398 16.7485C15.2597 16.5403 15.3966 16.2593 15.4249 15.9578C15.4533 15.6563 15.3713 15.3548 15.194 15.1092L14.1455 13.6563C13.9929 13.4448 13.7779 13.2863 13.5307 13.203C13.2835 13.1198 13.0164 13.1159 12.7669 13.1921L11.0705 13.7113C10.1319 13.9906 9.24904 13.2085 8.29047 11.5471C7.47832 10.1413 7.1969 9.12562 7.54404 8.41634C7.61166 8.27824 7.70166 8.15657 7.81404 8.05134L9.10332 6.84919C9.29435 6.67118 9.42484 6.43781 9.47647 6.18186C9.52809 5.9259 9.49827 5.66019 9.39118 5.42205L8.65261 3.78134C8.52815 3.50438 8.30713 3.28219 8.03084 3.15627C7.75454 3.03035 7.44186 3.0093 7.15118 3.09705L5.9669 3.45348Z"
                fill="#43006A"
              />
            </svg>
            <a className="text-secondary" href="tel:0208 441 1355.">
              0208 441 1355.
            </a>
          </p>
        </div>

        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            2
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Submit your application</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">Complete the application form provided by our team</span>
          </p>
        </div>
        <div className="bg-[#F3F1FF] rounded-xl py-[37px] md:py-[46px] px-[19px] md:px-6 col-span-3 lg:col-span-1">
          <p className="font-medium text-2xl leading-[140%] mb-[42px] flex items-center justify-center w-[54px] h-[54px] text-white  bg-secondary rounded-xl">
            3
          </p>
          <p className=" font-medium text-[20px] md:text-2xl leading-[140%] mb-[28px] ">Select your course</p>
          <p className="font-normal text-base md:text-lg">
            <span className="">Choose from our available courses and confirm your enrollment</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button padding="xxlarge" title={'Contact us'} href="/contact-us" />
      </div>
    </section>
  );
};

export default Apply;
