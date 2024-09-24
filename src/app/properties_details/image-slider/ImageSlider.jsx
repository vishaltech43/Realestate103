"use client";
import React, { useState } from "react";

const images = ["/Images/7.jpg", "/Images/8.jpg", "/Images/5.jpg"];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    
    <div className="relative ">
      <img
        src={images[currentIndex]}
        alt={`Property ${currentIndex + 1}`}
        className="w-full h-[30rem] object-center object-cover
         object-bottom"
      />

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
