"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser } from '../../store/userSlice';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const users = useSelector((state) => state.user.users);

  const noBorderOnFocusStyle = {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setKeepMeLoggedIn(checked);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill out all fields.');
      return;
    }

    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      alert('Sign-In successful!');
      dispatch(setLoggedInUser(user));
      router.push('/home');

      if (keepMeLoggedIn) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    } else {
      alert('Invalid credentials or you have not signed up yet...');
    }
  };

  return (
    <div>
      <section className="text-gray-600 px-5 py-12 md:py-20 body-font mx-4 md:mx-12 lg:mx-20">
        <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-12 border rounded-3xl border-slate-300">
          <div className="w-full md:w-1/2">
            <img
              src="/Images/inner-pages-images/signin.jpg"
              alt="Building"
              className="h-60 md:h-[27rem] w-full object-cover rounded-tl-2xl rounded-bl-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 pt-7 md:pt-16 mx-7 flex flex-col mt-8 md:mt-0 rounded-2xl">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-bold font-serif title-font mb-5">
              Sign In
            </h2>
            <p className="text-gray-500 pb-3">
              Lorem, ipsum dolor sit amet consectetur.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black">
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
              <div className="relative flex flex-col md:flex-row items-center border-b-[1px] py-3 border-gray-400 text-black">
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

              <div className="flex flex-col md:flex-row items-center gap-4 pt-3">
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    id="keepMeLoggedIn"
                    checked={keepMeLoggedIn}
                    onChange={handleChange}
                  />
                  <label htmlFor="keepMeLoggedIn" className="text-sm">Keep me logged in</label>
                </div>
                <a href="#" className="text-sm text-blue-500">
                  Forgot your password?
                </a>
              </div>

              <button
                type="submit"
                className="text-white text-base w-full md:w-1/3 mt-6 bg-blue-950 font-medium border-0 py-2 px-4 md:px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
