"use client";
import React, { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNum: '',
    subject: '',
    comment: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phoneNum, subject, comment } = formData;

    if (!name || !email || !phoneNum || !subject || !comment) {
      alert('Please fill out all the input fields...');
      return;
    }


    if (phoneNum.length !== 10 || !/^\d{10}$/.test(phoneNum)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    alert('your details is sent to the agent');
    setFormData({
      name: '',
      email: '',
      phoneNum: '',
      subject: '',
      comment: '',
    });
  };

  const noBorderOnFocusStyle = {
    border: 'none',
    boxShadow: 'none',
  };

  return (
    <section className="text-gray-600 body-font relative mt-12 mx-auto mb-5">
      <div className="container px-5 sm:px-7 pt-7 mx-auto">
        <div className="flex flex-col w-full">
          <h1 className="text-blue-900 text-xl font-bold pb-7">Contact me</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative flex gap-3 border border-gray-300 items-center px-5 rounded-3xl py-1">
                  <h1 className="text-[13px] w-1/4 sm:w-1/7 text-black">Your Name</h1>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-3/4 sm:w-6/7 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    style={noBorderOnFocusStyle}
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative flex gap-3 border border-gray-300 items-center px-5 rounded-3xl py-1">
                  <h1 className="text-[13px] w-1/4 sm:w-1/7 text-black">Your Email</h1>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-3/4 sm:w-6/7 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    style={noBorderOnFocusStyle}
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative flex gap-3 border border-gray-300 items-center px-5 rounded-3xl py-1">
                  <h1 className="text-[13px] w-1/4 sm:w-1/7 text-black">Phone No</h1>
                  <input
                    type="text"
                    id="phoneNum"
                    name="phoneNum"
                    value={formData.phoneNum}
                    onChange={handleChange}
                    className={`w-3/4 sm:w-6/7 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    style={noBorderOnFocusStyle}
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative flex gap-3 border border-gray-300 items-center px-5 rounded-3xl py-1">
                  <h1 className="text-[13px] w-1/4 sm:w-1/7 text-black">Subject</h1>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-3/4 sm:w-6/7 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    style={noBorderOnFocusStyle}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative px-5 border border-gray-300 rounded-3xl">
                  <h1 className="leading-7 text-sm text-black p-[1px] pt-3">Comment</h1>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    className={`w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                    style={noBorderOnFocusStyle}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 mb-5 w-full">
                <button type="submit" className="flex justify-center sm:justify-start text-white bg-[#1c1c82] border-0 py-3 mb-2 px-12 sm:px-16 focus:outline-none hover:bg-indigo-600 rounded-2xl text-[14px] sm:text-[16px] font-semibold">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
