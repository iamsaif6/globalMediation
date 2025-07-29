'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '/public/newlogo.png';
import Image from 'next/image';

const resourceSubMenu = [
  { title: 'Blogs', href: '/blog' },
  { title: 'FAQ', href: '/faqs' },
  // { title: 'Case studies', href: '/case-studies' },
  { title: 'Guides', href: '/resources' },
];

const serviceSubmenu = [
  { title: 'Workplace and employment mediation', href: '/Workplace-and-Employment-Mediation' },
  { title: 'Business and commercial mediation', href: '/business' },
  { title: 'SEND (Special Educational Needs and Disability) mediation', href: '/send-mediation' },
  { title: 'Family mediation', href: '/family-mediation' },
  { title: 'Community mediation', href: '/Community-Mediation' },
  { title: 'Civil and legal dispute mediation', href: '/civil' },
];

// const traiingSubmenu = [
//   { title: 'Foundation Course in Mediation', href: '/Foundation-Course-in-Mediation' },
//   { title: 'SEND Mediation Training Course', href: '/SEND-Mediation-Training-Course' },
//   { title: 'SEND Mediation Professional Practice', href: '/SEND-Mediation-Professional-Practice' },
// ];

const traiingSubmenu = [
  { title: 'Learn more about Global Training', href: 'https://globaltraning.vercel.app/' },
  // { title: 'SEND mediation training course', href: 'https://globaltraning.vercel.app/' },
  // { title: 'SEND mediation professional practice', href: 'https://globaltraning.vercel.app/' },
];

const navLinksForMobile = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/services',
    title: 'Services',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Workplace and employment mediation', href: '/Workplace-and-Employment-Mediation' },
      { title: 'Business and commercial mediation', href: '/business' },
      { title: 'SEND (Special Educational Needs and Disability) mediation', href: '/send-mediation' },
      { title: 'Family mediation', href: '/family-mediation' },
      { title: 'Community mediation', href: '/Community-Mediation' },
      { title: 'Civil and legal dispute mediation', href: '/civil' },
    ],
  },
  {
    href: '/training',
    title: 'Training',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Learn more about Global Training', href: 'https://globaltraning.vercel.app/' },
      // { title: 'SEND mediation training course', href: 'https://globaltraning.vercel.app/' },
      // { title: 'SEND mediation professional practice', href: 'https://globaltraning.vercel.app/' },
    ],
  },

  {
    href: '/resources',
    title: 'Resources',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Blog', href: '/blog' },
      { title: 'FAQ', href: '/faqs' },
      // { title: 'Case studies', href: '/case-studies' },
      { title: 'Guides', href: '/resources' },
    ],
  },
  {
    href: '/about-us',
    title: 'About us',
  },
];

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/services',
    title: 'Services',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Workplace and employment mediation', href: '/Workplace-and-Employment-Mediation' },
      { title: 'Business and commercial mediation', href: '/business' },
      { title: 'SEND (Special Educational Needs and Disability) mediation', href: '/send-mediation' },
      { title: 'Family mediation', href: '/family-mediation' },
      { title: 'Community mediation', href: '/Community-Mediation' },
      { title: 'Civil and legal dispute mediation', href: '/civil' },
    ],
  },

  {
    href: '/resources',
    title: 'Resources',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Blog', href: '/blog' },
      { title: 'FAQ', href: '/faqs' },
      { title: 'Case studies', href: '/case-studies' },
      { title: 'Guides', href: '/resources' },
    ],
  },
  {
    href: '/about-us',
    title: 'About us',
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [activeMenu3, setActiveMenu3] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('Service');
  const [activeSubmenu2, setActiveSubmenu2] = useState('Resources');
  const [activeSubmenu3, setActiveSubmenu3] = useState('Training');
  const [menuHeight, setMenuHeight] = useState(0);
  const [menuHeight2, setMenuHeight2] = useState(0);
  const [menuHeight3, setMenuHeight3] = useState(0);
  const menuRef = React.useRef(null);
  const menuRef2 = React.useRef(null);
  const menuRef3 = React.useRef(null);
  const mobileMenuRef = React.useRef(null);
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (menuRef3.current && activeMenu2) {
      setMenuHeight3(menuRef3.current.scrollHeight);
    } else {
      setMenuHeight3(0);
    }
  }, [activeMenu3]);

  React.useEffect(() => {
    if (menuRef2.current && activeMenu2) {
      setMenuHeight2(menuRef2.current.scrollHeight);
    } else {
      setMenuHeight2(0);
    }
  }, [activeMenu2]);

  React.useEffect(() => {
    if (menuRef.current && activeMenu) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [activeMenu, activeSubmenu]);

  // Calculate the height of the menu when it's opened
  React.useEffect(() => {
    if (mobileMenuRef.current && mobileMenuOpen) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = e => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
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
      <div className={` ${scrolled ? 'bg-white top-0' : 'bg-transparent top-5'} fixed z-[50] duration-200  left-0 top-0 w-full`}>
        <nav
          className={`${
            scrolled ? 'border-transparent' : 'bg-transparent'
          } lg:max-w-[1318px] sticky top-0 rounded-[20px] border-[0.5px] border-primary duration-200  w-full bg-white max-w-[90%] mx-auto lg:rounded-4xl overflow-hidden`}
        >
          <div className="flex items-center justify-between  lg:pl-9 px-[18px] lg:px-3">
            <div className="flex items-center gap-10 relative">
              <Link href="/" className="flex items-center">
                <Image className="max-w-[150px] w-full md:max-w-[220px]" alt="Mediation Logo" width={250} height={250} src={logo} />
              </Link>
              <ul className="lg:flex relative hidden gap-6 text-secondary font-normal text-lg items-center">
                {navLinks.map(link => {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link?.href}
                        className={`px-2 py-[20px] lg:py-6 flex items-center ${link?.hasMegaMenu ? 'gap-1' : ''}`}
                        onMouseEnter={() =>
                          (link?.hasMegaMenu && link.title == 'Resources' && setActiveMenu2(true)) ||
                          (link.title == 'Services' && setActiveMenu(true)) ||
                          (link.title == 'Training' && setActiveMenu3(true))
                        }
                        onMouseLeave={() =>
                          (link.title == 'Resources' && setActiveMenu2(false)) ||
                          (link.title == 'Services' && setActiveMenu(false)) ||
                          (link.title == 'Training' && setActiveMenu3(false))
                        }
                      >
                        {link?.title}
                        {link?.hasMegaMenu && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 ml-1.5 w-4 transition-transform duration-300 ${
                              link.title == 'Resources' && activeMenu2 ? 'rotate-180' : ''
                            }   ${link.title == 'Services' && activeMenu ? 'rotate-180' : ''}  ${
                              link.title == 'Training' && activeMenu3 ? 'rotate-180' : ''
                            }`}
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
              <div className="hidden lg:flex flex-1 items-center gap-2">
                <button>
                  <Link
                    target="_blank"
                    className={`px-6 py-[20px] text-secondary lg:py-6 text-lg flex items-center`}
                    href="https://portal.globalmediation.co.uk/login/"
                  >
                    Login
                  </Link>
                </button>
                <button
                  className={`bg-primary  border leading-[140%] border-primary font-medium text-lg text-[#FCFCFD] px-6 py-3 rounded-[40px]`}
                >
                  <Link className="w-full" href="/contact-us">
                    Contact us
                  </Link>
                </button>
              </div>

              <button
                className="lg:hidden  cursor-pointer flex items-center justify-center w-12 h-12 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 24" fill="none">
                    <path
                      d="M16.692 6.34424L12.449 10.5862L8.20697 6.34424L6.79297 7.75824L11.035 12.0002L6.79297 16.2422L8.20697 17.6562L12.449 13.4142L16.692 17.6562L18.106 16.2422L13.864 12.0002L18.106 7.75824L16.692 6.34424Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            ref={menuRef}
            onMouseEnter={() => setActiveMenu(true)}
            onMouseLeave={() => setActiveMenu(false)}
            className={`bg-white z-[99] relative left-0 w-full bg-lavender-50 border-t-[0.5px] border-[#E2DEDE] overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: activeMenu ? `${menuHeight + 100}px` : '0',
              opacity: activeMenu ? 1 : 0,
              visibility: activeMenu ? 'visible' : 'hidden',
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-5 p-8 space-y-4">
                <Link
                  href={'/services'}
                  onMouseEnter={() => setActiveSubmenu('Service')}
                  className={` ${
                    activeSubmenu == 'Service' ? 'bg-[#DAD3FF]' : ''
                  } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
                >
                  <span className="text-lg block font-semibold">Services</span>
                  <span className="text-sm">A comprehensive guide to alternative dispute resolution</span>
                </Link>

                <Link
                  href={'/training'}
                  onMouseEnter={() => setActiveSubmenu('Training')}
                  className={` ${
                    activeSubmenu == 'Training' ? 'bg-[#DAD3FF]' : ''
                  } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
                >
                  <span className="text-lg block font-semibold">Training</span>
                  <span className="text-sm">A comprehensive guide to alternative dispute resolution</span>
                </Link>
              </div>
              <div className="col-span-7 leading-[150%] p-8 bg-[#F3F1FF]">
                <h3 className="text-[20px] text-[#330051] font-semibold mb-4">
                  {activeSubmenu == 'Service' ? 'Mediation services' : 'Global Training'}
                </h3>
                {activeSubmenu == 'Service' ? (
                  <ul className="space-y-3 text-sm ">
                    {serviceSubmenu.map(item => {
                      return (
                        <li
                          key={item.title}
                          className={` ${pathname.includes(item.href) ? 'text-secondary' : 'text-black'} hover:text-secondary `}
                        >
                          <Link title={item.title} href={`${item.href}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="space-y-3 text-sm text-[#98A2B3]">
                    {traiingSubmenu.map((item, idx) => {
                      return (
                        <li
                          key={`${item.title} ${idx}`}
                          className={` ${
                            pathname.includes(item.href) ? 'text-secondary' : 'text-black'
                          } hover:text-secondary  duration-200`}
                        >
                          <Link target="_blank" title="Workplace and Employment Mediation" href={`${item.href}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div
            ref={menuRef2}
            onMouseEnter={() => setActiveMenu2(true)}
            onMouseLeave={() => setActiveMenu2(false)}
            className={`bg-white z-[99] relative left-0 w-full bg-lavender-50 border-t-[0.5px] border-[#E2DEDE] overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: activeMenu2 ? `${menuHeight2 + 100}px` : '0',
              opacity: activeMenu2 ? 1 : 0,
              visibility: activeMenu2 ? 'visible' : 'hidden',
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-5 p-8 space-y-4">
                <button
                  className={` ${
                    activeSubmenu2 == 'Resources' ? 'bg-[#DAD3FF]' : ''
                  } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
                >
                  <span className="text-lg block font-semibold">Our resources</span>
                  <span className="text-sm">A comprehensive guide to alternative dispute resolution</span>
                </button>
              </div>
              <div className="col-span-7 leading-[150%] p-8 bg-[#F3F1FF]">
                {activeSubmenu2 == 'Resources' ? (
                  <ul className="space-y-3 text-sm ">
                    {resourceSubMenu.map((item, idx) => {
                      return (
                        <li
                          key={`${item.href}${idx}`}
                          className={` ${pathname.includes(item.href) ? ' text-secondary' : 'text-black'}  hover:text-secondary`}
                        >
                          <Link title={item.title} href={`${item.href}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="space-y-3 text-sm text-[#98A2B3]">
                    {traiingSubmenu.map((item, idx) => {
                      return (
                        <li
                          key={`${item.href} ${idx}`}
                          className={` ${item.href === pathname ? 'text-secondary' : 'text-[#98A2B3]'} hover:text-secondary duration-200`}
                        >
                          <Link title="Workplace and Employment Mediation" href={`${item.href}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div
            ref={menuRef3}
            onMouseEnter={() => setActiveMenu3(true)}
            onMouseLeave={() => setActiveMenu3(false)}
            className={`bg-white z-[99] relative left-0 w-full bg-lavender-50 border-t-[0.5px] border-[#E2DEDE] overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: activeMenu3 ? `${menuHeight3 + 400}px` : '0',
              opacity: activeMenu3 ? 1 : 0,
              visibility: activeMenu3 ? 'visible' : 'hidden',
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-5 p-8 space-y-4">
                <button
                  className={` ${
                    activeSubmenu3 == 'Training' ? 'bg-[#DAD3FF]' : ''
                  } flex cursor-pointer items-start flex-col w-full p-6 rounded-xl text-secondary transition-colors duration-200`}
                >
                  <span className="text-lg block font-semibold">Training</span>
                  <span className="text-sm">A Comprehensive Guide to Alternative Dispute Resolution</span>
                </button>
              </div>
              <div className="col-span-7 leading-[150%] p-8 bg-[#F3F1FF]">
                <ul className="space-y-3 text-sm ">
                  <ul className="space-y-3 text-sm text-[#98A2B3]">
                    {traiingSubmenu.map((item, idx) => {
                      return (
                        <li
                          key={`${item.title} ${idx}`}
                          className={` ${item.href === pathname ? 'text-secondary' : 'text-[#98A2B3]'} hover:text-secondary duration-200`}
                        >
                          <Link title="Workplace and Employment Mediation" href={`${item.href}`}>
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          {/* For Mobile Menu */}
          <div
            ref={mobileMenuRef}
            style={{
              maxHeight: mobileMenuOpen ? `${menuHeight + 100}px` : '0',
              opacity: mobileMenuOpen ? 1 : 0,
              visibility: mobileMenuOpen ? 'visible' : 'hidden',
            }}
            className={` inset-0 bg-white z-50 overflow-y-auto lg:hidden flex flex-col transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex-1 flex flex-col p-5 space-y-2">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                href="/"
                className="p-3 text-lg rounded-lg bg-lavender-50 hover:bg-lavender-100 transition-colors duration-200"
              >
                Home
              </Link>

              {navLinksForMobile
                .filter(link => link.title !== 'Home')
                .map(link => (
                  <div key={link.href} className="flex flex-col">
                    {link.hasMegaMenu ? (
                      <>
                        <button className="p-3 text-lg font-normal flex justify-between items-center bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200">
                          <Link onClick={() => toggleMobileMenu(false)} href={link.href}>
                            {link.title}
                          </Link>
                          <svg
                            onClick={e => {
                              toggleMobileSubmenu(link.title);
                              e.stopPropagation();
                            }}
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
                              onClick={() => setMobileMenuOpen(false)}
                              key={index}
                              href={link.title === 'Training' || link.title === 'Resources' ? item.href : `${item.href}`}
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
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-4 px-4 text-lg font-normal bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
            </div>

            <div className="p-5 pt-1 flex items-center gap-2">
              <button className={`bg-primary w-full border border-primary font-semibold text-lg text-[#FCFCFD] px-6 py-3 rounded-[40px]`}>
                <Link onClick={() => setMobileMenuOpen(false)} className="w-full" href="/contact-us">
                  Contact US
                </Link>
              </button>
              <button>
                <Link
                  target="_blank"
                  className={`px-6 py-[20px] lg:py-7 text-lg text-secondary flex items-center`}
                  href="https://portal.globalmediation.co.uk/login/"
                >
                  Login
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
