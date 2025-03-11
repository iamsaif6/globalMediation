import Link from 'next/link';
import React from 'react';
import Button from '../shared/Button';

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/services',
    title: 'Services',
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
  {
    href: '/contact-us',
    title: 'Contact us',
  },
];

const Navbar = () => {
  return (
    <nav className="fixed z-99 md:max-w-[1380px] left-1/2 -translate-x-1/2 w-full mx-auto flex items-center justify-between bg-white max-w-[90%] top-5 rounded-4xl py-3 md:px-3">
      <div className="flex items-center">
        <a href="/">Logo</a>
        <ul className="md:flex hidden gap-6 text-secondary font-normal text-lg items-center">
          {navLinks.map(link => {
            return (
              <li key={link.href}>
                <Link title={link.title} href={link.href}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <span className="hidden md:block">
        <Button href="/contact-us" title="Contact Us" />
      </span>
    </nav>
  );
};

export default Navbar;
