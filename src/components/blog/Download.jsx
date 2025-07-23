import React from 'react';

const items = [
  {
    name: 'A simple guide to mediation',
    link: 'https://www.globalmediation.co.uk/wp-content/uploads/2017/09/a-simple-guide-to-mediation3.pdf',
  },
  {
    name: 'Child friendly safeguarding policy – updated',
    link: 'https://www.globalmediation.co.uk/wp-content/uploads/2017/09/Child-Friendly-Safeguarding-Policy-Updated.pdf',
  },
  {
    name: 'Global mediation – mediator code of conduct',
    link: 'https://www.globalmediation.co.uk/wp-content/uploads/2020/05/GlobalMediation_Code_of_Conduct_Final.pdf',
  },
  {
    name: 'Global mediation safeguarding policy 2020',
    link: 'https://www.globalmediation.co.uk/wp-content/uploads/2020/05/GlobalMediation_Safeguarding-Policy_2020.pdf',
  },
  {
    name: 'Global mediation data protection policy 2020',
    link: 'https://www.globalmediation.co.uk/wp-content/uploads/2020/05/GlobalMediation_Data_Protection_Policy-25.02.20.pdf',
  },
  {
    name: 'Global mediation privacy statement 2020',
    link: 'https://www.globalmediation.co.uk/wp-content/uploads/2020/05/GlobalMediation_Privacy_Statement-25.02.20.pdf',
  },
];

const Download = () => {
  return (
    <section className="py-16  px-0 md:py-[80px] md:pb-[30px] md:px-[64px]">
      <div className="text-left mb-[54px] px-5">
        <h4 className="font-medium mb-[20px] md:mb-6 text-4xl md:text-5xl leading-[120%]">Download guides</h4>
      </div>
      <div className="w-full">
        <ul className="text-sm md:text-lg  font-normal text-secondary">
          {/* ${
                idx % 2 != 1 ? 'bg-[#F3F1FF]' : ''
              } */}
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`bg-[#F3F1FF] w-full md:py-6 last:border-b-[0.5px] gap-4 border-t-[0.5px] p-3 md:px-8 flex items-center justify-between`}
            >
              <p className="flex items-center gap-6">
                <svg className="w-5 h-[24px] md:w-[30px] md:h-[36px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 36" fill="none">
                  <path
                    d="M14.6362 15.678L14.5347 16.1418C14.0944 18.1887 13.283 20.1376 12.1407 21.8923M12.1407 21.8923C14.0312 21.0607 16.0315 20.5055 18.0802 20.2438L18.2464 20.221M12.1407 21.8923C11.4103 22.2119 10.694 22.5724 9.99168 22.9738L7.00618 24.68C6.17493 25.1543 5.99643 26.4195 6.65268 27.1703C7.23368 27.8335 8.19268 27.7618 8.69143 27.018L12.0339 22.0533L12.1407 21.8923ZM14.6344 15.678L15.4517 11.94C15.7352 10.6485 14.4787 9.63703 13.5092 10.3755C12.9894 10.771 12.7969 11.5393 13.0542 12.1903L13.4847 13.27C13.8183 14.1089 14.2016 14.9115 14.6344 15.678ZM14.6344 15.678C15.5877 17.3758 16.8072 18.9097 18.2464 20.221M18.2464 20.221L22.1927 19.7205C23.2987 19.5805 24.1002 20.8948 23.6032 22.0305C23.2409 22.86 22.3414 23.1663 21.6414 22.699L20.1522 21.705C19.4814 21.2577 18.8445 20.7617 18.2464 20.221Z"
                    stroke="#43006A"
                    strokeWidth="1.75"
                  />
                  <path
                    d="M7.63867 34.1875H22.3667C23.9911 34.1875 25.549 33.5422 26.6977 32.3935C27.8464 31.2449 28.4917 29.687 28.4917 28.0625V18.385C28.4923 16.7608 27.8477 15.2028 26.6997 14.0537L16.2539 3.60625C15.6851 3.0375 15.0099 2.58637 14.2667 2.27859C13.5235 1.97082 12.727 1.81244 11.9227 1.8125H7.63867C6.01422 1.8125 4.4563 2.45781 3.30764 3.60647C2.15898 4.75513 1.51367 6.31305 1.51367 7.9375V28.0625C1.51367 29.687 2.15898 31.2449 3.30764 32.3935C4.4563 33.5422 6.01422 34.1875 7.63867 34.1875Z"
                    stroke="#43006A"
                    strokeWidth="2.625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{item.name}</span>
              </p>
              <a target="_blank" download={'PDF'} href={item.link}>
                <svg
                  className="md:w-[42px] w-[24px] h-[24px] md:h-[42px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M21 27.2598L14.8068 21.0682L16.0457 19.8083L20.125 23.8875V8.75H21.875V23.8875L25.9525 19.81L27.1932 21.0682L21 27.2598ZM8.75 33.25V26.1835H10.5V31.5H31.5V26.1835H33.25V33.25H8.75Z"
                    fill="#00A49F"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Download;
