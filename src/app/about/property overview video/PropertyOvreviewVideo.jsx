"use client";
import React, { useState } from 'react';
import CommonBtn from '../../../components/CommonBtn';
import Image from 'next/image';

const Video = () => {
    const [showVideo, setShowVideo] = useState(false);

    const sectionStyle = {
        backgroundImage: "url('/images/img-6.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        color: "white",
        padding: "20px",
    };

    const sectionStyle2 = {
        backgroundImage: "url('/images/9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: 'relative',
    };

    return (
        <div className='pt-20 mx-auto bg-[#f9faff]'>
            <div style={sectionStyle} className='mb-12'>
                <div className='w-full max-w-4xl mx-auto pt-[0px] md:pt-[60px] px-4 sm:px-6 lg:px-20'>
                    <h1 className='text-black text-[18px] sm:text-[20px] lg:text-[21px] font-serif font-bold'>
                        Contrary to popular belief, Lorem Ipsum
                    </h1>
                    <h1 className='text-black text-[16px] sm:text-[18px] lg:text-[20px] font-serif font-bold'>
                        is not simply random text.
                    </h1>
                    <button className="flex ml-auto">
                        <CommonBtn
                            px={'px-8px md:px-12'}
                            mdpx={'md:px-[40px] px-[30px]'}
                            mdp={'p-2 md:p-4'}
                            mdtext={'md:text-[15px]'}
                            name={'CONTACT US'}
                        />
                    </button>
                    <p className='text-[12px] sm:text-[13px] pt-1 text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                    </p>
                    <p className='text-[12px] sm:text-[13px] pt-1 text-gray-500'>
                        aliquid, ex tempore.
                    </p>
                </div>

                <div className='mx-4 sm:mx-6 md:mx-10 lg:mx-[170px] py-6 mt-6'>
                    <div
                        className='mt-6 w-full rounded-2xl h-[10rem] md:h-[32rem] container mx-auto'
                        style={sectionStyle2}
                    >
                        {!showVideo ? (
                            <div className='flex items-center justify-center h-full w-full absolute top-0 left-0 cursor-pointer' onClick={() => setShowVideo(true)}>
                                <Image
                                    src='/images/play (1).png'
                                    alt="play"
                                    className='h-[60px] md:h-[80px]'
                                    width={80} 
                                    height={80} 
                                />
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/3M_nitkMVRI?autoplay=1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video"
                                className='border rounded-2xl'
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
