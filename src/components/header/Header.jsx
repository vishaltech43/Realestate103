"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser, logout } from '../../store/userSlice';
import navLinks from './navLinksdata.json';  
import navLogo from './navLogo.json';

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/home");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage) {
      dispatch(setLoggedInUser(userFromLocalStorage));
    }
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
    setActiveLink("/home");
  };

  return (
    <header className="relative z-50 text-gray-600  body-font md:px-12 py-2 mx-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-12">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={navLogo.logo} alt="logo" className="h-6" />
        </a>

        <button
          className="inline-flex md:hidden ml-auto items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={toggleMenu}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "hidden" : "hidden"
          } md:flex flex-col md:flex-row md:ml-auto items-center text-base justify-center w-full md:w-auto`}
        >
          {navLinks.map(({ href, title }) => (
            <Link
              key={href}
              href={href}
              className={`mr-5 text-[16px] ${
                activeLink === href
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-800"
              }`}
              onClick={() => handleLinkClick(href)}
            >
              {title}
            </Link>
          ))}

          {!loggedInUser ? (
            <>
              <Link
                href="/signUp"
                className={`mr-5 text-[16px] ${
                  activeLink === "/signUp"
                    ? "text-blue-800 font-bold"
                    : "hover:text-blue-800"
                }`}
                onClick={() => handleLinkClick("/signUp")}
              >
                <button className="hidden md:inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-[#2e2ea3] rounded-lg text-white mt-4 md:mt-0 bg-blue-800">
                  Sign Up
                </button>
              </Link>
              <Link
                href="/signIn"
                className={`mr-5 text-[16px] ${
                  activeLink === "/signIn"
                    ? "text-blue-800 font-bold"
                    : "hover:text-blue-800"
                }`}
                onClick={() => handleLinkClick("/signIn")}
              >
                <button className="hidden md:inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-[#2e2ea3] rounded-lg text-white mt-4 md:mt-0 bg-blue-800">
                  Sign In
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hidden md:inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-[#2e2ea3] rounded-lg text-white mt-4 md:mt-0 bg-blue-800"
            >
              Log Out
            </button>
          )}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden ">
          <nav className="flex flex-col items-center space-y-2 justify-center text-base pb-10 ">
            {navLinks.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 text-[16px] ${
                  activeLink === href
                    ? "text-blue-800 font-bold"
                    : "hover:text-blue-800"
                }`}
                onClick={() => handleLinkClick(href)}
              >
                {title}
              </Link>
            ))}
            <Link
              href="/signUp"
              className={`py-2 text-[16px] ${
                activeLink === "/signUp"
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-800"
              }`}
              onClick={() => handleLinkClick("/signUp")}
            >
              <button className="py-2 px-3 hover:bg-[#2e2ea3] rounded-lg text-white bg-blue-800 mx-2">
                Sign Up
              </button>
            </Link>
            <Link
              href="/signIn"
              className={`py-2 text-[16px] ${
                activeLink === "/signIn"
                  ? "text-blue-800 font-bold"
                  : "hover:text-blue-800"
              }`}
              onClick={() => handleLinkClick("/signIn")}
            >
              <button className="py-2 px-4 mt-4 hover:bg-[#2e2ea3] ml-2 rounded-lg text-white bg-blue-800 mx-2">
                Sign In
              </button>
            </Link>
            {loggedInUser && (
              <button
                onClick={handleLogout}
                className="py-2 px-4 mt-4 hover:bg-[#2e2ea3] ml-2 rounded-lg text-white bg-blue-800 mx-2"
              >
                Log Out
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
