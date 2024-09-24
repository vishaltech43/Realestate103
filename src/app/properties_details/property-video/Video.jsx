"use client"
import React, { useState } from 'react';

const Video = ({ image, videoLink }) => {
    const [showVideo, setShowVideo] = useState(false);
     

    console.log("hello",videoLink)
    const sectionStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: 'relative',
    };

    return (
        <div className='container mx-auto'>
            <div className='mx-4 sm:mx-6 md:mx-10 lg:mx-[130px] px-10 rounded-3xl py-9 border mt-12 bg-white'>
                <h1 className="text-blue-900 text-xl font-bold">Video</h1>
                <div className='mt-10 rounded-3xl h-[33rem]' style={sectionStyle}>
                    {!showVideo ? (
                        <div
                            className='flex items-center justify-center h-full w-full absolute top-0 left-0 cursor-pointer'
                            onClick={() => setShowVideo(true)}
                        >
                            <img src='/images/play (1).png' alt="play" className='h-[70px]' />
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoLink}
                            className='border rounded-3xl'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Video;
