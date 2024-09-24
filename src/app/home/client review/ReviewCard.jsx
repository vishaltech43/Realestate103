import React from 'react';

const ReviewCard = ({ id, name, image, review }) => {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6">
      <div className="flex flex-col pb-7 py-7 px-6 text-center items-center bg-white rounded-tl-[10px] rounded-br-[10px] rounded-tr-[60px] rounded-bl-[60px]">
        <div className="w-30 h-30 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5">
          <img src={image} alt={name} className="w-50" />
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-[16px] px-4">
            {review}
          </p>
          <h2 className="text-blue-800 text-[24px] title-font font-bold pt-4 font-serif">
            {name}
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
