"use client"; 

import React from 'react';

const EmailButton = () => {
  const handleClick = () => {
    window.location.href = 'mailto:vishalthanviphalodi@.com';
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-blue-400 text-white py-1 px-4 text-[18px] border-none outline-blue-300 font-bold rounded-3xl flex items-center gap-2 hover:bg-blue-300"
    >
      <img src='/Images/email.png' alt="icon" className='h-6' />
      <h1>Email</h1>
    </button>
  );
};

export default EmailButton;
