"use client";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image'; 
import './Testimonial.css'; 

const Testimonial = () => {
    const [click, setClick] = useState(true);
    const [animation, setAnimation] = useState('slideIn');

    const change1 = () => {
        setAnimation('slideOut');
        setTimeout(() => {
            setClick(false);
            setAnimation('slideIn');
        }, 160);
    };

    const change2 = () => {
        setAnimation('slideOut');
        setTimeout(() => {
            setClick(true);
            setAnimation('slideIn');
        }, 160); 
    };

    const sectionStyle = {
        backgroundImage: "url('/images/img-4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div>
            <section
                style={sectionStyle}
                className="cotainer-fluid text-white flex flex-col bg-[#f9faff]"
            >
                <section className="text-gray-600 body-font px-5">
                    <div className="container px-5 md:px-32 mx-auto">
                        <h1 className="text-[14px] font-medium title-font text-gray-900">TESTIMONIAL</h1>
                        <h1 className="text-[27px] font-bold title-font text-gray-900 font-serif mb-12 pb-[60px]">What Our Client Say?</h1>
                        <div className="flex flex-wrap">
                            <div className="p-2 md:w-2/3 w-full bg-white border-gray-400">
                                <div className="h-full pt-[10px] md:pt-[30px] pl-[75px] pr-[35px] rounded">
                                    <div className={`transition-transform duration-300 ${animation}`}>
                                        {click ? (
                                            <div>
                                                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                                <a className="inline-flex items-center">
                                                    <Image 
                                                        alt="testimonial"
                                                        src="/images/client-1.png" 
                                                        className="w-[25%] shadow-2xl h-[50%] rounded-full flex-shrink-0 object-cover object-center"
                                                        width={100}
                                                        height={100} 
                                                    />
                                                    <span className="flex-grow flex flex-col pl-4">
                                                        <span className="title-font font-bold text-[15px] pb-1 text-gray-900">Alex Meli</span>
                                                        <span className="text-gray-700 text-[14px]">Ui Designer &amp; CEO</span>
                                                    </span>
                                                </a>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="leading-relaxed mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni porro laborum reprehenderit temporibus maiores. Ipsa inventore, harum illo in accusantium nihil id odio rem omnis voluptates optio impedit nemo est.</p>
                                                <a className="inline-flex items-center">
                                                    <Image 
                                                        alt="testimonial"
                                                        src="/images/client-2.png" 
                                                        className="w-[26%] h-[52%] rounded-full flex-shrink-0 object-cover object-center"
                                                        width={100} 
                                                        height={100} 
                                                    />
                                                    <span className="flex-grow flex flex-col pl-4">
                                                        <span className="title-font font-bold text-[15px] pb-1 text-gray-900">Maria Denny</span>
                                                        <span className="text-gray-700 text-[14px]">React Developer</span>
                                                    </span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <div className='flex pb-3 gap-3'>
                                        <button className="flex ml-auto text-gray border-0 py-2 px-4 bg-gray-200 focus:outline-none hover:bg-gray-400 rounded-full" onClick={change2}>
                                            <Image 
                                                src="/images/white-arrow.png" 
                                                alt="" 
                                                className="h-9 rotate-180 w-6" 
                                                width={24} 
                                                height={24} 
                                            />
                                        </button>
                                        <button className="flex text-gray border-0 py-2 px-4 bg-blue-900 focus:outline-none hover:bg-gray-200 rounded-full" onClick={change1}>
                                            <Image 
                                                src="/images/white-arrow.png" 
                                                alt="" 
                                                className="h-9 w-6" 
                                                width={24} 
                                                height={24} 
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Testimonial;
