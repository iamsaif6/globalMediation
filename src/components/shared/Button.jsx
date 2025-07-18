import Link from 'next/link';
import React from 'react';

const Button = ({ title, href = '#', padding = 'default' }) => {
  const paddingClasses = {
    small: 'px-4',
    default: 'px-6',
    large: 'px-8',
    xlarge: 'px-12',
    xxlarge: 'px-[80px]',
  };

  const paddingClass = paddingClasses[padding] || paddingClasses.default;

  return (
    <button>
      <Link
        className={`bg-primary capitalize border border-primary font-semibold text-lg text-[#FCFCFD] ${paddingClass} py-3 rounded-[40px]`}
        href={href}
      >
        {title}
      </Link>
    </button>
  );
};

export default Button;
