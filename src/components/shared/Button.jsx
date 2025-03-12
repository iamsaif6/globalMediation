import Link from 'next/link';
import React from 'react';

const Button = ({ title, href = '#', padding = 'default' }) => {
  const paddingClasses = {
    small: 'px-4',
    default: 'px-6',
    large: 'px-8',
    xlarge: 'px-12',
  };

  const paddingClass = paddingClasses[padding] || paddingClasses.default;

  return (
    <button className={`bg-primary font-normal text-lg text-[#FCFCFD] ${paddingClass} py-3 rounded-[40px]`}>
      <Link className="w-full" href={href}>
        {title}
      </Link>
    </button>
  );
};

export default Button;
