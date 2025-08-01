'use client';
import React, { useState } from 'react';

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  // Handle Copy Button
  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  };

  return (
    <button onClick={handleCopy} className="w-[32px] cursor-pointer flex items-center justify-center h-[32px] rounded-full bg-[#F3F1FF]">
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#43006A" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4.22172 19.778C4.68559 20.2425 5.23669 20.6108 5.84334 20.8617C6.44999 21.1126 7.10023 21.2411 7.75672 21.24C8.41335 21.2411 9.06374 21.1125 9.67054 20.8617C10.2774 20.6108 10.8286 20.2425 11.2927 19.778L14.1207 16.949L12.7067 15.535L9.87872 18.364C9.31519 18.925 8.55239 19.2399 7.75722 19.2399C6.96205 19.2399 6.19925 18.925 5.63572 18.364C5.07422 17.8007 4.75892 17.0378 4.75892 16.2425C4.75892 15.4471 5.07422 14.6842 5.63572 14.121L8.46472 11.293L7.05072 9.87896L4.22172 12.707C3.28552 13.6454 2.75977 14.9169 2.75977 16.2425C2.75977 17.568 3.28552 18.8395 4.22172 19.778ZM19.7777 11.293C20.7134 10.3542 21.2388 9.08288 21.2388 7.75746C21.2388 6.43204 20.7134 5.16068 19.7777 4.22196C18.8393 3.28577 17.5678 2.76001 16.2422 2.76001C14.9166 2.76001 13.6452 3.28577 12.7067 4.22196L9.87872 7.05096L11.2927 8.46496L14.1207 5.63596C14.6842 5.07495 15.447 4.75999 16.2422 4.75999C17.0374 4.75999 17.8002 5.07495 18.3637 5.63596C18.9252 6.19923 19.2405 6.96213 19.2405 7.75746C19.2405 8.55279 18.9252 9.31569 18.3637 9.87896L15.5347 12.707L16.9487 14.121L19.7777 11.293Z"
            fill="#43006A"
          />
          <path d="M8.46371 16.95L7.04871 15.536L15.5357 7.05005L16.9497 8.46505L8.46371 16.95Z" fill="#43006A" />
        </svg>
      )}
    </button>
  );
};

export default CopyButton;
