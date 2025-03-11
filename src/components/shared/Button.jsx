import Link from 'next/link';
import React from 'react';

const Button = ({ title, href = '#' }) => {
  return (
    <button className=" bg-primary font-normal text-lg text-[#FCFCFD] px-[24px] py-3 rounded-[40px] ">
      <Link className="w-full  " href={href}>
        {title}
      </Link>
    </button>
  );
};

export default Button;
