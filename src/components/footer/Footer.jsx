"use client";
import React, { useState } from "react";
import footerDatas from "./footerData";
import GetInTouch from "./GetInTouch";
import NewsLetter from "./NewsLetter";
import QuickLink from "./QuickLink";
import Social from "./Social";
const Footer = () => {
  const [footerData] = useState(footerDatas);

  if (!footerData) return null;

  const { contact, quickLinks, newsletter, social } = footerData;

  return (
    <>
      <section className="text-gray-600 body-font bg-[#1c1c82] px-5 sm:px-6 md:px-12 lg:px-36 ">
        <div className="container mx-auto py-12">
          <div className="flex flex-wrap -m-4 w-full">
            {/* Contact*/}
            <GetInTouch contact={contact} />

            {/* Quick Links*/}
            <QuickLink quickLinks={quickLinks} />

            {/* Newsletter*/}
            <NewsLetter newsletter={newsletter} />

            {/* Social*/}
            <Social social={social} />
          </div>
        </div>
      </section>
      <div className="bg-gray-200 w-full py-4">
        <h1 className="text-black text-center text-sm md:text-[16px]">
          © Copyright 2021 All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
