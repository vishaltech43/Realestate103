"use client";
import React, { useState } from 'react';

const SourcesForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
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

    if (!formData.name || !formData.phone_number || !formData.email) {
      alert('Please fill out all the input fields...');
      return;
    }
    const phoneNumber = formData.phone_number;
    if (phoneNumber.length !== 10 || !/^\d{10}$/.test(phoneNumber)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

 
    alert('The resources will be shared to your given email address...');


    setFormData({
      name: '',
      phone_number: '',
      email: '',
    });
  };

  return (
    <section className="container text-gray-600 body-font bg-[#1c1c82] bg-opacity-90 mt-16 md:mt-0 py-12 px-5 md:w-full w-full rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-[30px] md:text-[40px] font-medium title-font mb-4 text-white font-serif">
          Get the latest home buying resources
        </h1>
        <p className="text-base sm:text-lg text-white mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="relative flex-grow w-full">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Full Name"
          />
        </div>
        <div className="relative flex-grow w-full">
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            maxLength={10}
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Phone Number"
          />
        </div>
        <div className="relative flex-grow w-full">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email Address"
          />
        </div>
        <button type="submit" className="font-serif text-black bg-white border-0 py-2 px-6 sm:px-8 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SourcesForm;
