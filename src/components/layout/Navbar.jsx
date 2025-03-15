'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../shared/Button';

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/main-services',
    title: 'Services',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Workplace and Employment Mediation', href: '/services/workplace-employment' },
      { title: 'Business and Commercial Mediation', href: '/services/business-commercial' },
      { title: 'SEND (Special Educational Needs and Disability) Mediation', href: '/services/send' },
      { title: 'Community Mediation', href: '/services/community' },
      { title: 'Family Mediation', href: '/services/family' },
      { title: 'Civil and Legal Dispute Mediation', href: '/services/civil-legal' },
    ],
  },
  {
    href: '/training',
    title: 'Training',
  },
  {
    href: '/dars',
    title: 'DARS',
  },
  {
    href: '/resources',
    title: 'Resources',
  },
  {
    href: '/about-us',
    title: 'About us',
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('Service');
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = React.useRef(null);

  // Calculate the height of the menu when it's opened
  React.useEffect(() => {
    if (menuRef.current && activeMenu) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [activeMenu, activeSubmenu]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen(false);
  };

  const toggleMobileSubmenu = linkTitle => {
    if (mobileSubmenuOpen === linkTitle) {
      setMobileSubmenuOpen(false);
    } else {
      setMobileSubmenuOpen(linkTitle);
    }
  };

  return (
    <>
      <nav className="fixed z-50 md:max-w-[1380px] border border-primary left-1/2 -translate-x-1/2 w-full mx-auto bg-white max-w-[90%] top-5 rounded-4xl overflow-hidden">
        <div className="flex items-center justify-between py-[7px] md:py-3 md:pl-9 px-[18px] md:px-3">
          <div className="flex items-center gap-10 relative">
            <Link href="/" className="flex items-center">
              <p>Logo</p>
            </Link>
            <ul className="md:flex relative hidden gap-6 text-secondary font-normal text-lg items-center">
              {navLinks.map(link => {
                return (
                  <li key={link.href}>
                    <Link
                      href={link?.href}
                      className={`px-2 py-4 flex items-center ${link?.hasMegaMenu ? 'gap-1' : ''}`}
                      onMouseEnter={() => link?.hasMegaMenu && setActiveMenu(true)}
                    >
                      {link?.title}
                      {link?.hasMegaMenu && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform duration-300 ${activeMenu ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Button href="/contact-us" title="Contact Us" />
            </div>
            <button
              className="md:hidden flex items-center justify-center w-12 h-12 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={menuRef}
          onMouseLeave={() => setActiveMenu(false)}
          className={`bg-white left-0 w-full bg-lavender-50 border-t-[0.5px] border-[#E2DEDE] overflow-hidden transition-all duration-300 ease-in-out`}
          style={{
            maxHeight: activeMenu ? `${menuHeight}px` : '0',
            opacity: activeMenu ? 1 : 0,
            visibility: activeMenu ? 'visible' : 'hidden',
          }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-5 p-8 space-y-4">
              <button
                onClick={() => setActiveSubmenu('Service')}
                className={` ${
                  activeSubmenu == 'Service' ? 'bg-[#DAD3FF]' : ''
                } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
              >
                <span className="text-lg block font-semibold">Service</span>
                <span className="text-sm">A Comprehensive Guide to Alternative Dispute Resolution</span>
              </button>
              <button
                onClick={() => setActiveSubmenu('Training')}
                className={` ${
                  activeSubmenu == 'Training' ? 'bg-[#DAD3FF]' : ''
                } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
              >
                <span className="text-lg block font-semibold">Training</span>
                <span className="text-sm">A Comprehensive Guide to Alternative Dispute Resolution</span>
              </button>
            </div>
            <div className="col-span-7 leading-[150%] p-8 bg-[#F3F1FF]">
              <h3 className="text-[20px] font-semibold mb-4">{activeSubmenu == 'Service' ? 'Mediation Services' : 'Mediation Training'}</h3>
              {activeSubmenu == 'Service' ? (
                <ul className="space-y-3 text-sm text-[#98A2B3]">
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      Workplace and Employment Mediation
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      Business and Commercial Mediation
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      SEND (Special Educational Needs and Disability) Mediation
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      Community Mediation
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      Family Mediation
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      Civil and Legal Dispute Mediation
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="space-y-3 text-sm text-[#98A2B3]">
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      Foundation Course in Mediation
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      SEND Mediation Training Course
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-200">
                    <Link title="Workplace and Employment Mediation" href={'#'}>
                      SEND Mediation Professional Practice
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 overflow-y-auto md:hidden flex flex-col transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Global Mediation" className="h-12" />
          </a>
          <button onClick={toggleMobileMenu} className="p-2" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col p-5 space-y-2">
          <Link href="/" className="py-4 px-4 text-lg rounded-lg bg-lavender-50 hover:bg-lavender-100 transition-colors duration-200">
            Home
          </Link>

          {navLinks
            .filter(link => link.title !== 'Home')
            .map(link => (
              <div key={link.href} className="flex flex-col">
                {link.hasMegaMenu ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(link.title)}
                      className="py-4 px-4 text-lg font-normal flex justify-between items-center bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                    >
                      {link.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${mobileSubmenuOpen === link.title ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`mt-2 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileSubmenuOpen === link.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {link.megaMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-3 px-4 text-gray-600 hover:text-primary border-b border-gray-100 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="py-4 px-4 text-lg font-normal bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
        </div>

        <div className="p-5">
          <Button href="/contact-us" title="Contact Us" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
