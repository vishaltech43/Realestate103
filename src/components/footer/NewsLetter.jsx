import React, { useState } from 'react';

const NewsLetter = ({ newsletter }) => {
  const [email, setEmail] = useState("");

  const noBorderOnFocusStyle = {
    border: "none",
    outline: "none",
    boxShadow: "none",
  };

  const validateEmail = (email) => {
  
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const clearInput = () => {
    if (validateEmail(email)) {
      alert("Now you have subscribed to our newsletter...");
      setEmail("");
    
    } else {
      alert("Please enter a valid email address."); 
    }
  };

  return (
    <div className="p-4 md:w-2/6 w-full">
      <div>
        <h1 className="title-font text-2xl md:text-[28px] font-bold text-white mb-10">
          {newsletter.title}
        </h1>
        <div className="text-sm leading-7 md:text-[17px] text-gray-300 pt-3">
          {newsletter.description.map((line, index) => (
            <h1 key={index}>{line}</h1>
          ))}
        </div>

        <div className="bg-white outline-none rounded-3xl flex items-center mt-5 p-2 md:p-2 w-full max-w-full overflow-hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={noBorderOnFocusStyle}
            className="rounded-3xl border-white w-full md:w-auto flex-1"
            placeholder="Your Email address"
          />
          <button>
            <img
              src="/images/mailair.png"
              alt="Mail icon"
              onClick={clearInput}
              className="max-h-7 w-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
