import React from 'react';

const TeamIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="49"
      viewBox="0 0 69 69"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Center person */}
      <circle cx="34.5" cy="25" r="7" />
      <path d="M25 48c0-6 4-12 9.5-12s9.5 6 9.5 12" />

      {/* Left person */}
      <circle cx="18" cy="28" r="5" />
      <path d="M10 48c0-5 3-10 8-10" />

      {/* Right person */}
      <circle cx="51" cy="28" r="5" />
      <path d="M59 48c0-5-3-10-8-10" />
    </svg>
  );
};

export default TeamIcon;
