import React from 'react';

const Calculator = () => {
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
      {/* Body */}
      <rect x="8" y="8" width="50" height="50" rx="8" />

      {/* Display */}
      <rect x="16" y="14" width="34" height="10" rx="2" />

      {/* Buttons grid */}
      <circle cx="21" cy="32" r="2" />
      <circle cx="33" cy="32" r="2" />
      <circle cx="45" cy="32" r="2" />

      <circle cx="21" cy="42" r="2" />
      <circle cx="33" cy="42" r="2" />
      <circle cx="45" cy="42" r="2" />

      <circle cx="21" cy="52" r="2" />
      <circle cx="33" cy="52" r="2" />
      <circle cx="45" cy="52" r="2" />

      {/* Equals button */}
      <line x1="45" y1="47" x2="45" y2="57" />
    </svg>
  );
};

export default Calculator;
