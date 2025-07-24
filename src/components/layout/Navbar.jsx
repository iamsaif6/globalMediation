'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '/public/newlogo.png';
import Image from 'next/image';

const resourceSubMenu = [
  { title: 'Blogs', href: '/blogs' },
  { title: 'FAQ', href: '/faq' },
  // { title: 'Case studies', href: '/case-studies' },
  { title: 'Guides', href: '/guides' },
];

const serviceSubmenu = [
  { title: 'Workplace and employment mediation', href: '/Workplace-and-Employment-Mediation' },
  { title: 'Business and commercial mediation', href: '/Business-and-Commercial-Mediation' },
  { title: 'SEND (Special Educational Needs and Disability) mediation', href: '/send-mediation' },
  { title: 'Family mediation', href: '/Family-Mediation' },
  { title: 'Community mediation', href: '/Community-Mediation' },
  { title: 'Civil and legal dispute mediation', href: '/Civil-and-Legal-Dispute-Mediation' },
];

// const traiingSubmenu = [
//   { title: 'Foundation Course in Mediation', href: '/Foundation-Course-in-Mediation' },
//   { title: 'SEND Mediation Training Course', href: '/SEND-Mediation-Training-Course' },
//   { title: 'SEND Mediation Professional Practice', href: '/SEND-Mediation-Professional-Practice' },
// ];

const traiingSubmenu = [
  { title: 'Foundation course in mediation', href: 'https://globaltraning.vercel.app/' },
  { title: 'SEND mediation training course', href: 'https://globaltraning.vercel.app/' },
  { title: 'SEND mediation professional practice', href: 'https://globaltraning.vercel.app/' },
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
      { title: 'Business and commercial mediation', href: '/Business-and-Commercial-Mediation' },
      { title: 'SEND (Special Educational Needs and Disability) mediation', href: '/send-mediation' },
      { title: 'Family mediation', href: '/Family-Mediation' },
      { title: 'Community mediation', href: '/Community-Mediation' },
      { title: 'Civil and legal dispute mediation', href: '/Civil-and-Legal-Dispute-Mediation' },
    ],
  },
  {
    href: '/training',
    title: 'Training',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Foundation course in mediation', href: 'https://globaltraning.vercel.app/' },
      { title: 'SEND mediation training course', href: 'https://globaltraning.vercel.app/' },
      { title: 'SEND mediation professional practice', href: 'https://globaltraning.vercel.app/' },
    ],
  },

  {
    href: '/resources',
    title: 'Resources',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Blog', href: '/blogs' },
      { title: 'FAQ', href: '/faq' },
      // { title: 'Case studies', href: '/case-studies' },
      { title: 'Guides', href: '/guides' },
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
      { title: 'Business and commercial mediation', href: '/Business-and-Commercial-Mediation' },
      { title: 'SEND (Special Educational Needs and Disability) mediation', href: '/send-mediation' },
      { title: 'Family mediation', href: '/Family-Mediation' },
      { title: 'Community mediation', href: '/Community-Mediation' },
      { title: 'Civil and legal dispute mediation', href: '/Civil-and-Legal-Dispute-Mediation' },
    ],
  },

  {
    href: '/resources',
    title: 'Resources',
    hasMegaMenu: true,
    megaMenuItems: [
      { title: 'Blog', href: '/blogs' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Case studies', href: '/case-studies' },
      { title: 'Guides', href: '/guides' },
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
      <div className={` ${scrolled ? 'bg-white' : 'bg-transparent'} fixed z-[50] left-0 top-0 w-full`}>
        <nav
          className={`${
            scrolled ? 'border-transparent' : 'bg-transparent'
          } lg:max-w-[1318px] rounded-[20px] border-[0.5px] border-primary  w-full bg-white max-w-[90%] mx-auto top-5 lg:rounded-4xl overflow-hidden`}
        >
          <div className="flex items-center justify-between  lg:pl-9 px-[18px] lg:px-3">
            <div className="flex items-center gap-10 relative">
              <Link href="/" className="flex items-center">
                {/* <svg
                className="w-[86px] h-[56px] md:w-[80px] md:h-auto lg:w-[132px] lg:h-[59px]"
                xmlns="http://www.w3.org/2000/svg"
                width="132"
                height="59"
                viewBox="0 0 132 59"
                fill="none"
              >
                <g clipPath="url(#clip0_14907_103)">
                  <path
                    d="M129.157 44.0212C128.549 44.0212 128.013 44.1709 127.549 44.4704C127.086 44.7698 126.755 45.1924 126.558 45.7381V44.1402H125.029V51.4163H126.558V47.5468C126.558 46.8077 126.74 46.2464 127.106 45.8629C127.472 45.4795 127.959 45.2882 128.567 45.289C129.157 45.289 129.622 45.4673 129.962 45.8241C130.302 46.1808 130.471 46.6848 130.47 47.336V51.4163H131.998V47.1762C131.998 46.1635 131.739 45.3841 131.221 44.8378C130.703 44.2916 130.015 44.0189 129.157 44.0197M116.721 45.3545C117.1 45.3509 117.473 45.4415 117.807 45.618C118.137 45.7941 118.403 46.065 118.603 46.4306C118.804 46.7963 118.904 47.2429 118.904 47.7706C118.904 48.3085 118.804 48.7568 118.603 49.1184C118.403 49.48 118.136 49.7466 117.807 49.9233C117.472 50.097 117.1 50.1878 116.721 50.1878C116.343 50.1878 115.971 50.097 115.636 49.9233C115.306 49.7474 115.04 49.4791 114.839 49.1184C114.638 48.7568 114.538 48.3085 114.538 47.7706C114.538 47.2427 114.638 46.796 114.839 46.4306C115.04 46.0653 115.306 45.7944 115.636 45.618C115.97 45.4413 116.343 45.3507 116.721 45.3545ZM116.721 44.0467C116.007 44.0467 115.366 44.1965 114.798 44.4959C114.235 44.7922 113.77 45.2419 113.458 45.7915C113.132 46.355 112.969 47.0152 112.969 47.7722C112.97 48.5291 113.133 49.1917 113.458 49.7599C113.768 50.3122 114.233 50.764 114.798 51.0606C115.365 51.3601 116.006 51.5098 116.721 51.5098C117.435 51.5098 118.078 51.3599 118.65 51.0602C119.216 50.7671 119.682 50.3166 119.99 49.7646C120.312 49.2016 120.473 48.5368 120.473 47.7702C120.473 47.0133 120.312 46.353 119.99 45.7895C119.681 45.2379 119.216 44.7875 118.65 44.4939C118.079 44.1945 117.435 44.0448 116.721 44.0448M106.885 51.4136H108.413V44.1394H106.885V51.4136ZM106.67 42.024C106.666 42.1406 106.688 42.2566 106.734 42.3639C106.78 42.4712 106.85 42.5672 106.938 42.6451C107.117 42.8022 107.354 42.8807 107.648 42.8807C107.943 42.8807 108.182 42.8022 108.365 42.6451C108.455 42.5682 108.526 42.4725 108.573 42.3651C108.621 42.2577 108.644 42.1412 108.64 42.024C108.643 41.9051 108.62 41.787 108.572 41.6776C108.525 41.5682 108.454 41.4701 108.365 41.39C108.182 41.2233 107.943 41.1396 107.648 41.1391C107.353 41.1386 107.117 41.2222 106.938 41.39C106.851 41.471 106.781 41.5694 106.735 41.6787C106.689 41.788 106.667 41.9057 106.67 42.024ZM101.631 50.107C101.239 50.107 100.964 50.0276 100.808 49.8687C100.651 49.7098 100.573 49.4236 100.573 49.0101V45.4181H102.355V44.1374H100.573V42.3275H99.0329V44.1374H97.9744V45.4181H99.0329V48.9838C99.0329 49.8559 99.2361 50.4789 99.6424 50.8529C100.049 51.227 100.645 51.4138 101.431 51.4136H102.37V50.107H101.631ZM89.9592 45.3651C90.3636 45.3593 90.7619 45.4619 91.1117 45.6619C91.4547 45.8643 91.7332 46.1574 91.9156 46.508C92.1116 46.8726 92.2098 47.2928 92.21 47.7686C92.21 48.2526 92.1119 48.6752 91.9156 49.0364C91.7319 49.3842 91.4536 49.6747 91.1117 49.8754C90.7622 50.076 90.3637 50.1788 89.9592 50.1726C89.2799 50.1726 88.7372 49.959 88.3311 49.5318C87.925 49.1047 87.7218 48.5169 87.7216 47.7686C87.7216 47.0206 87.9248 46.433 88.3311 46.0058C88.7374 45.5787 89.2801 45.3651 89.9592 45.3651ZM89.4895 44.0448C88.8466 44.0448 88.2728 44.1945 87.7682 44.4939C87.2636 44.7934 86.8681 45.2252 86.5818 45.7895C86.2963 46.353 86.1533 47.0133 86.1528 47.7702C86.1528 48.5368 86.2958 49.2016 86.5818 49.7646C86.8679 50.3276 87.2633 50.7595 87.7682 51.0602C88.2728 51.3599 88.8466 51.5098 89.4895 51.5098C90.1604 51.5098 90.7322 51.347 91.2049 51.0214C91.6711 50.7057 92.0231 50.2519 92.21 49.7258V51.414H93.7382V44.1402H92.21V45.8307C92.0233 45.3046 91.6712 44.8507 91.2049 44.5351C90.7322 44.2101 90.1604 44.0473 89.4895 44.0467M80.0705 51.4163H81.5986V44.1394H80.0705V51.4163ZM79.8566 42.0268C79.8566 42.282 79.9454 42.4889 80.1251 42.6479C80.3047 42.8069 80.5402 42.8835 80.8346 42.8835C81.129 42.8835 81.3684 42.8049 81.5516 42.6479C81.6414 42.571 81.7126 42.4753 81.76 42.3679C81.8075 42.2605 81.8301 42.1439 81.8261 42.0268C81.8293 41.9079 81.8064 41.7897 81.759 41.6803C81.7117 41.5708 81.6409 41.4728 81.5516 41.3927C81.3678 41.226 81.1288 41.1424 80.8346 41.1419C80.5402 41.1419 80.3027 41.2259 80.1251 41.3927C80.0372 41.4736 79.9679 41.572 79.9216 41.6813C79.8753 41.7906 79.8531 41.9084 79.8566 42.0268ZM71.3745 45.3679C71.7788 45.362 72.1772 45.4646 72.5269 45.6647C72.8697 45.8672 73.148 46.1603 73.3305 46.5107C73.5272 46.8753 73.6256 47.2956 73.6256 47.7714C73.6256 48.2553 73.5272 48.6779 73.3305 49.0391C73.1468 49.3868 72.8686 49.6773 72.5269 49.8781C72.1775 50.0789 71.7789 50.1816 71.3745 50.1753C70.6948 50.1753 70.152 49.9617 69.7459 49.5346C69.3398 49.1074 69.1367 48.5197 69.1364 47.7714C69.1364 47.0233 69.3396 46.4357 69.7459 46.0086C70.1523 45.5814 70.6951 45.3679 71.3745 45.3679ZM70.9056 44.0475C70.2621 44.0475 69.6879 44.1972 69.183 44.4967C68.6782 44.7961 68.2828 45.228 67.9971 45.7923C67.711 46.3558 67.5683 47.016 67.5688 47.773C67.5688 48.5396 67.7116 49.2044 67.9971 49.7674C68.2826 50.3304 68.6779 50.7622 69.183 51.063C69.6876 51.3627 70.2618 51.5125 70.9056 51.5125C71.5756 51.5125 72.1466 51.3497 72.6186 51.0241C73.0835 50.7101 73.4317 50.2553 73.6105 49.7285V51.4167H75.1514V41.644H73.6105V45.8307C73.4319 45.3039 73.0836 44.849 72.6186 44.5351C72.1453 44.2101 71.5743 44.0473 70.9056 44.0467M61.8466 47.3878H57.6518C57.6882 46.6835 57.9071 46.1508 58.3087 45.7899C58.7103 45.429 59.2104 45.2486 59.809 45.2489C60.1686 45.2452 60.5242 45.3241 60.8475 45.4794C61.1665 45.6351 61.4289 45.8841 61.5988 46.1923C61.7818 46.514 61.8644 46.9125 61.8466 47.3878ZM63.3875 47.4271C63.3875 46.7931 63.2423 46.2185 62.9517 45.7031C62.6622 45.19 62.2298 44.769 61.7056 44.49C61.1652 44.1948 60.5328 44.0473 59.8086 44.0475C59.0939 44.0475 58.4619 44.1972 57.9127 44.4967C57.3636 44.7962 56.9145 45.2463 56.6196 45.7923C56.307 46.3558 56.1507 47.016 56.1507 47.773C56.1507 48.5396 56.307 49.2044 56.6196 49.7674C56.914 50.3137 57.3633 50.7639 57.9127 51.063C58.4619 51.3627 59.0939 51.5125 59.8086 51.5125C60.4252 51.5125 60.9839 51.4001 61.4845 51.1753C61.9583 50.972 62.3738 50.6565 62.694 50.2567C63.0142 49.857 63.2292 49.3854 63.3198 48.884H61.6865C61.6135 49.2939 61.38 49.6591 61.0363 49.9009C60.6834 50.1569 60.2524 50.2845 59.7432 50.2837C59.1621 50.2837 58.6752 50.1033 58.2824 49.7427C57.8896 49.382 57.6795 48.8272 57.6522 48.0784H63.3345C63.3725 47.8649 63.3904 47.6485 63.3879 47.4318M48.7813 44.0244C48.2104 44.0165 47.6503 44.1773 47.1731 44.4861C46.6998 44.7952 46.3559 45.2223 46.1413 45.7675C45.9357 45.204 45.6073 44.7722 45.1561 44.4719C44.7049 44.1717 44.1711 44.022 43.5547 44.0228C42.9651 44.0228 42.4514 44.1637 42.0138 44.4456C41.5761 44.7275 41.2634 45.1323 41.0756 45.66V44.1414H39.5479V51.4175H41.0756V47.548C41.0756 46.8264 41.2521 46.2784 41.605 45.9042C41.958 45.5299 42.4336 45.3427 43.032 45.3427C43.595 45.3427 44.0374 45.5165 44.359 45.8641C44.6806 46.2117 44.8414 46.7027 44.8414 47.3372V51.4175H46.3684V47.548C46.3684 46.8264 46.5448 46.2784 46.8978 45.9042C47.2507 45.5299 47.7264 45.3427 48.3247 45.3427C48.8878 45.3427 49.3301 45.5165 49.6517 45.8641C49.9733 46.2117 50.1341 46.7027 50.1341 47.3372V51.4175H51.6615V47.1774C51.6615 46.1647 51.4002 45.3853 50.8775 44.839C50.3548 44.2928 49.6558 44.0201 48.7805 44.0208"
                    fill="#00A39D"
                  />
                  <path d="M117.1 3.43323e-05H115.748V31.4127H117.1V3.43323e-05Z" fill="#43006A" />
                  <path d="M30.097 0.335705H28.7441V31.4123H30.097V0.335705Z" fill="#43006A" />
                  <path
                    d="M51.1609 10.7896C49.4878 9.82144 47.6354 9.33147 45.6543 9.33147C43.6732 9.33147 41.8255 9.82144 40.1568 10.7896C38.488 11.7578 37.1558 13.106 36.1954 14.7993C35.2349 16.4926 34.7461 18.372 34.7461 20.3927C34.7461 22.4134 35.2329 24.2913 36.1954 25.9755C37.1578 27.6598 38.4896 29.0045 40.1568 29.9648C41.8239 30.9251 43.6732 31.4127 45.6543 31.4127C47.1196 31.4158 48.5701 31.1237 49.9168 30.5545C51.2625 29.986 52.4397 29.2035 53.4169 28.2287C54.3941 27.2539 55.1765 26.0694 55.7462 24.7121C56.3182 23.3424 56.6101 21.8747 56.6051 20.3935C56.6051 18.3743 56.1139 16.4926 55.1454 14.8001C54.177 13.1075 52.8349 11.7582 51.1617 10.7904M55.2534 20.3927C55.2534 23.0978 54.3109 25.4243 52.4517 27.3084C50.5925 29.1926 48.3086 30.1462 45.6555 30.1462C42.9896 30.1462 40.7101 29.1949 38.8832 27.3194C37.0562 25.444 36.1245 23.1123 36.1245 20.3927C36.1245 17.659 37.0523 15.3183 38.8832 13.435C40.7141 11.5516 42.9916 10.5972 45.6555 10.5972C48.3078 10.5972 50.5953 11.5524 52.4517 13.4358C54.3081 15.3191 55.2534 17.6606 55.2534 20.3927Z"
                    fill="#43006A"
                  />
                  <path
                    d="M107.977 16.0293C107.408 14.6721 106.624 13.4899 105.648 12.5147C104.672 11.5395 103.494 10.757 102.149 10.1889C100.803 9.61962 99.3519 9.32769 97.8866 9.33107C95.9075 9.33107 94.0583 9.81829 92.3923 10.7782C90.7263 11.7381 89.3934 13.0812 88.4321 14.7663C87.4708 16.4513 86.9824 18.3284 86.9824 20.3472C86.9824 22.3659 87.4708 24.2473 88.4313 25.9379C89.3918 27.6284 90.7255 28.9794 92.3923 29.9471C94.0212 30.8929 95.8255 31.3833 97.754 31.4045V31.4131H108.829V20.6353C108.831 20.5282 108.832 20.4347 108.832 20.3472C108.837 18.8659 108.545 17.3983 107.973 16.0285M107.481 25.7584V30.1411H97.6894V30.1383L97.5357 30.1332C95.0259 30.0547 92.8636 29.1019 91.1167 27.3025C89.2866 25.42 88.3588 23.0801 88.3588 20.3472C88.3588 17.6288 89.2866 15.2994 91.1167 13.4228C92.9468 11.5461 95.2235 10.596 97.889 10.596C100.541 10.596 102.829 11.5509 104.683 13.4326C106.511 15.2857 107.453 17.5671 107.483 20.2117V25.7584H107.481Z"
                    fill="#43006A"
                  />
                  <path
                    d="M10.7711 31.4127H21.8458V20.6349C21.8486 20.5285 21.8494 20.4343 21.8494 20.3464C21.855 18.8652 21.5636 17.3975 20.9917 16.0277C20.4225 14.6709 19.6373 13.488 18.6621 12.5127C17.6868 11.5375 16.5089 10.7574 15.164 10.1885C13.8182 9.6196 12.3686 9.32794 10.9042 9.33146C8.92389 9.33146 7.07585 9.81868 5.40987 10.7786C3.74388 11.7385 2.40974 13.0804 1.44847 14.7667C0.487207 16.4529 0 18.328 0 20.3464C0 22.3648 0.487605 24.2469 1.44847 25.9382C2.40934 27.6296 3.74189 28.9798 5.40907 29.9475C7.0388 30.8929 8.84223 31.3829 10.7711 31.4049V31.4127ZM20.4969 25.7486V30.1415H10.7042V30.1379L10.5512 30.1328C8.03871 30.0543 5.87915 29.1015 4.1311 27.3029C2.30099 25.4204 1.37358 23.0805 1.37358 20.3464C1.37358 17.6288 2.30099 15.2991 4.1311 13.4232C5.96121 11.5473 8.2383 10.5964 10.9034 10.5964C13.5549 10.5964 15.8404 11.5505 17.6972 13.433C19.5245 15.2861 20.4667 17.5663 20.4962 20.2117V25.7474L20.4969 25.7486Z"
                    fill="#43006A"
                  />
                  <path
                    d="M26.173 37.5535C24.5441 36.6077 22.7407 36.1181 20.8114 36.0969V36.0882H9.73666V46.866C9.73666 46.9724 9.73347 47.0667 9.73347 47.1542C9.72803 48.6354 10.0198 50.1031 10.592 51.4729C11.1612 52.8301 11.9464 54.013 12.9204 54.9882C13.8945 55.9635 15.0748 56.7451 16.4193 57.314C17.766 57.8831 19.2166 58.1748 20.6819 58.1711C22.6618 58.1711 24.5102 57.6839 26.1762 56.7239C27.8422 55.764 29.1763 54.4221 30.1372 52.7367C31.0981 51.0512 31.5861 49.1745 31.5861 47.1558C31.5861 45.137 31.0985 43.2556 30.1372 41.5643C29.1759 39.873 27.839 38.5212 26.173 37.5535ZM11.0851 41.6365V37.3595H20.8747V37.363L21.0285 37.3681C23.5382 37.4467 25.7006 38.3995 27.4478 40.198C29.2775 42.0806 30.2061 44.4205 30.2061 47.1542C30.2061 49.873 29.2775 52.2019 27.4486 54.0786C25.6197 55.9552 23.3406 56.9053 20.6763 56.9053C18.0248 56.9053 15.7385 55.9513 13.8825 54.0688C12.0552 52.2157 11.113 49.935 11.0828 47.2908V47.0203V41.6369L11.0851 41.6365Z"
                    fill="#43006A"
                  />
                  <path
                    d="M81.1487 14.7667C80.1878 13.0804 78.8544 11.7397 77.1877 10.7794C75.5209 9.81908 73.6732 9.33146 71.6933 9.33146C70.2281 9.32813 68.7776 9.61977 67.4308 10.1885C66.0863 10.7574 64.9087 11.5399 63.9319 12.5143C63.2017 13.25 62.5842 14.0865 62.0986 14.9975V3.43323e-05H60.7441V22.4264H60.7481V31.4127H71.8228V31.4049C73.7521 31.3829 75.5555 30.8945 77.1845 29.9475C78.8525 28.9798 80.1846 27.6312 81.1455 25.939C82.1063 24.2469 82.5944 22.3663 82.5944 20.3476C82.5944 18.3288 82.1095 16.4502 81.1487 14.7667ZM62.0994 20.2149C62.1297 17.5687 63.0718 15.2873 64.8991 13.435C66.7551 11.5524 69.0422 10.5984 71.6929 10.5984C74.358 10.5984 76.6367 11.5493 78.4652 13.4232C80.2938 15.2971 81.2228 17.6288 81.2228 20.3476C81.2228 23.0805 80.2942 25.4204 78.4644 27.3029C76.7172 29.1022 74.5564 30.0547 72.0451 30.1336L71.8913 30.1387V30.1415H62.0994V25.7942V20.2149Z"
                    fill="#43006A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14907_103">
                    <rect width="132" height="58.1695" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
                <Image className="max-w-[150px] w-full md:max-w-[250px]" alt="Mediation Logo" width={250} height={250} src={logo} />
              </Link>
              <ul className="lg:flex relative hidden gap-6 text-secondary font-normal text-lg items-center">
                {navLinks.map(link => {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link?.href}
                        className={`px-2 py-[20px] lg:py-7 flex items-center ${link?.hasMegaMenu ? 'gap-1' : ''}`}
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
                    className={`px-6 py-[20px] text-secondary lg:py-7 text-lg flex items-center`}
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
                  {activeSubmenu == 'Service' ? 'Mediation services' : 'Mediation training'}
                </h3>
                {activeSubmenu == 'Service' ? (
                  <ul className="space-y-3 text-sm ">
                    {serviceSubmenu.map(item => {
                      return (
                        <li
                          key={item.title}
                          className={` ${pathname.includes(item.href) ? 'text-secondary' : 'text-black'} hover:text-secondary `}
                        >
                          <Link title={item.title} href={`/services${item.href}`}>
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
                              href={link.title === 'Training' || link.title === 'Resources' ? item.href : `/services${item.href}`}
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
