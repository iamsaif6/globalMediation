'use client';
import React, { useEffect, useState, useRef } from 'react';
import SectionHeading from '../shared/SectionHeading';
import service1 from '/public/service1.jpg';
import Image from 'next/image';
import Button from '../shared/Button';

const Tabs = ({ title, subtitle, services }) => {
  const [active, setActive] = useState('Workplace');
  const [contentVisible, setContentVisible] = useState(true);
  const [displayedContent, setDisplayedContent] = useState('Workplace');
  const scrollContainerRef = useRef(null);
  console.log('serives', services);

  const tabs = [
    { id: 'Workplace', label: 'Workplace and Employment Disputes' },
    { id: 'Harassment', label: 'Harassment and Bullying Complaints' },
    { id: 'Team', label: 'Team Conflicts and Collaboration Issues' },
    { id: 'Leadership', label: 'Leadership and Management Issues' },
    { id: 'Performance', label: 'Performance and Evaluation Disputes' },
    { id: 'Compensation', label: 'Compensation and Benefits Concerns' },
  ];

  const handleBtnClick = tabId => {
    if (tabId !== active) {
      // Start fade out animation
      setContentVisible(false);

      // After fade out completes, update the active tab
      setTimeout(() => {
        setActive(tabId);
        setDisplayedContent(tabId);
        // Start fade in animation
        setContentVisible(true);
      }, 300); // Match this with the CSS transition duration
    }
  };

  const getTabContent = tabId => {
    switch (tabId) {
      case 'Workplace':
        return (
          <div className=" grid grid-cols-2 gap-[80px]">
            <div className="col-span-2 lg:col-span-1">
              <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">{title}</h1>
              <p className="text-[#667085] capitalize text-base md:text-lg leading-[150%] my-10">{subtitle}</p>
              <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
                <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
              </div>
              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
                <ul className="text-[#667085] text-lg">
                  {services.map(item => {
                    return (
                      <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                        <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                  {/* <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Enhanced workplace morale</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Improve morale and workplace satisfaction.</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Strengthen collaboration and communication.</span>
                  </li> */}
                </ul>
                <div className="mt-9">
                  <Button title={'Resolve Workplace Disputes Today'} href="#" />
                </div>
              </div>
            </div>
            <div className="relative  max-h-[600px]  hidden lg:block col-span-2 md:col-span-1 rounded-3xl overflow-hidden">
              <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
            </div>
          </div>
        );
      case 'Harassment':
        return (
          <div className=" grid grid-cols-2 gap-[80px]">
            <div className="relative  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Harassment and Bullying Complaints</h1>
              <p className="text-[#667085] text-base md:text-lg leading-[150%] my-10">
                Conflicts between colleagues, teams, or management can cause inefficiencies and strain relationships. Our mediators provide
                a neutral environment to address these issues, rebuild trust, and foster collaboration.
              </p>
              <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
                <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
              </div>
              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
                <ul className="text-[#667085] text-lg">
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Enhanced workplace morale</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Improve morale and workplace satisfaction.</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Strengthen collaboration and communication.</span>
                  </li>
                </ul>
                <div className="mt-9">
                  <Button title={'Resolve Workplace Disputes Today'} href="#" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'Team':
        return (
          <div className=" grid grid-cols-2 gap-[80px]">
            <div className="relative  hidden md:block col-span-2 lg:col-span-1 rounded-3xl overflow-hidden">
              <div className={`from-[rgba(0, 164, 159, 0.20)] to-[#006863a3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
              <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="font-medium text-4xl md:text-5xl leading-[120%]">Team Conflicts and Collaboration Issues</h1>
              <p className="text-[#667085] text-base md:text-lg leading-[150%] my-10">
                Conflicts between colleagues, teams, or management can cause inefficiencies and strain relationships. Our mediators provide
                a neutral environment to address these issues, rebuild trust, and foster collaboration.
              </p>
              <div className="relative my-10 block md:hidden  rounded-3xl overflow-hidden">
                <div className={`from-[rgba(67,0,106,0.1)] to-[#43006aa3] absolute inset-0 bg-gradient-to-b  z-10`}></div>
                <Image className="object-cover w-full h-full relative z-0" alt={'Experienced Leader In Mediation'} src={service1} />
              </div>
              <div>
                <h3 className="md:text-2xl text-lg font-medium text-secondary mb-8 md:mb-6">Key benefits:</h3>
                <ul className="text-[#667085] text-lg">
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Enhanced workplace morale</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Improve morale and workplace satisfaction.</span>
                  </li>
                  <li className="flex items-center py-6 pl-[7px] gap-[26px] border-b-[0.5px] border-t-[0.5px] border-[#DAD3FF]">
                    <span className="inline-block flex-shrink-0 h-[10px] w-[10px] bg-primary rounded-full"></span>
                    <span>Strengthen collaboration and communication.</span>
                  </li>
                </ul>
                <div className="mt-9">
                  <Button title={'Resolve Workplace Disputes Today'} href="#" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'Leadership':
        return <p>Content for Leadership and Management Issues tab</p>;
      case 'Performance':
        return <p>Content for Performance and Evaluation Disputes tab</p>;
      case 'Compensation':
        return <p>Content for Compensation and Benefits Concerns tab</p>;
      default:
        return <p>Select a tab to view content</p>;
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeTab = container.querySelector(`[data-tab="${active}"]`);

      if (activeTab) {
        const containerWidth = container.offsetWidth;
        const activeTabLeft = activeTab.offsetLeft;
        const activeTabWidth = activeTab.offsetWidth;
        // Calculate position to center the active tab
        const scrollPosition = activeTabLeft - containerWidth / 2 + activeTabWidth / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [active]);

  return (
    <section className="py-16 md:py-[80px]">
      <div className="px-5 md:px-16 mb-[120px] ">
        <SectionHeading title={'Comprehensive workplace and employment mediation services'} />
      </div>
      <div className="mt-[42px] md:mt-[54px]">
        {/* Buttons */}
        <div className="flex flex-col w-full">
          {/* <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 md:gap-6 mb-[42px] md:mb-16 overflow-x-auto py-4 px-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                data-tab={tab.id}
                onClick={() => handleBtnClick(tab.id)}
                className={`${
                  active === tab.id ? 'bg-[#F3F1FF] text-secondary opacity-100' : 'bg-[#F2F1FB] text-[#8D8D8D] opacity-60'
                } text-sm md:text-lg cursor-pointer leading-[150%] py-2 md:py-3 px-[34px] md:px-12 rounded-[24px] flex-shrink-0`}
              >
                {tab.label}
              </button>
            ))}
          </div> */}

          <div className=" px-5 md:px-16 ">
            <div className={` transition-opacity duration-300 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
              {getTabContent(displayedContent)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
