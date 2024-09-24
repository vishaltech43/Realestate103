"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/userSlice";
import Socialicons from "../../components/Socialicons";
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const existingUsers = useSelector((state) => state.user.users); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
    terms: false,
  });

  const regex = /^[0-9]{10}$/;

  const noBorderOnFocusStyle = {
    border: "none",
    outline: "none",
    boxShadow: "none",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.rePassword
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!regex.test(formData.phone)) {
      alert("Please enter a 10-digit mobile number.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

    try {
     
      const userExists = existingUsers.some((user) => user.email === formData.email);

      if (userExists) {
        alert("You are already a user.");
        return;
      }


      dispatch(addUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }));

      alert("Sign Up successful! now you can SignIn");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        rePassword: "",
        terms: false,
      });
      router.push('/signIn');
    } catch (error) {
      console.log("Error signing up: " + error.message);
    }
  };

  return (
    <div>
      <section className="text-gray-600 px-5 py-12 md:py-20 body-font mx-4 md:mx-12 lg:mx-20">
     
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 md:gap-16 border rounded-3xl border-slate-300">
          <div className="w-full md:w-1/2">
            <img
              src="/Images/loginImg.jpg"
              alt="Building"
              className="h-60 md:h-[48rem] w-full rounded-tl-2xl rounded-bl-2xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 pt-4 md:pt-12 mx-3 flex flex-col mt-8 md:mt-0 rounded-2xl pb-5">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold font-serif title-font mb-2">
              Sign Up
            </h2>
            <p className="text-gray-500 pb-2 md:pb-4">
              Lorem, ipsum dolor sit amet consectetur.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black mb-4">
                <label htmlFor="full-name" className="font-medium mb-2 md:mb-0 md:w-1/3">
                  Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full md:w-2/3 bg-white text-base text-gray-700 py-1 px-3"
                  style={noBorderOnFocusStyle}
                />
              </div>
              <div className="flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black mb-4">
                <label htmlFor="email" className="font-medium mb-2 md:mb-0 md:w-1/3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:w-2/3 bg-white text-base text-gray-700 py-1 px-3"
                  style={noBorderOnFocusStyle}
                />
              </div>
              <div className="flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black mb-4">
                <label htmlFor="phone" className="font-medium mb-2 md:mb-0 md:w-1/3">
                  Phone No.
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full md:w-2/3 bg-white text-base text-gray-700 py-1 px-3"
                  style={noBorderOnFocusStyle}
                />
              </div>
              <div className="relative flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black mb-4">
                <label htmlFor="password" className="font-medium mb-2 md:mb-0 md:w-1/3">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full md:w-2/3 bg-white text-base text-gray-700 py-1 px-3"
                  style={noBorderOnFocusStyle}
                />
              </div>
              <div className="relative flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black mb-4">
                <label htmlFor="re-password" className="font-medium mb-2 md:mb-0 md:w-1/3">
                  Re-Password
                </label>
                <input
                  type="password"
                  id="re-password"
                  name="rePassword"
                  value={formData.rePassword}
                  onChange={handleChange}
                  className="w-full md:w-2/3 bg-white text-base text-gray-700 py-1 px-3"
                  style={noBorderOnFocusStyle}
                />
              </div>

              <div className="flex items-center gap-2 md:gap-4 mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="rounded-full"
                />
                <label htmlFor="terms" className="text-sm">
                  I accept the terms and conditions & privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="text-white w-full md:w-2/4 mt-6 bg-blue-950 font-medium border-0 py-2 px-4 md:px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm pt-6 pb-5">Login with social media</p>
            <div className="mb-5 w-full md:w-3/5">
              <Socialicons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
