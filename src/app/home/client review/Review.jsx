import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewList from './ReviewList.json';

const Review = () => {
  return (
    <div>
      <section className="container mx-auto text-gray-600 pb-6 body-font bg-gray-100 md:px-24">
        <div className="container py-10 mx-auto px-10 md:px-[40px]">
          <h1 className="text-gray-900 md:text-[48px] pb-8 text-center text-[35px] font-bold font-serif">
            Our Client Reviews
          </h1>
          <div className="flex flex-wrap -mx-4">
            {ReviewList.map((client) => (
              <ReviewCard
                key={client.id}  
                id={client.id}
                name={client.name}
                image={client.image}
                review={client.review}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
