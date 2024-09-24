import React from "react";
import Link from "next/link";
import Image from 'next/image';

const PostCard = ({ id, title, date, description, imageUrl }) => {
  return (
    <div className="bg-white hover:shadow-2xl rounded-3xl overflow-hidden cursor-pointer mb-2">
      <div className="relative h-[200px] md:h-[13rem]"> {/* Fixed height for the image container */}
        <Image
          className="object-cover rounded-3xl"
          src={imageUrl}
          alt={title}
          layout="fill" // Use layout fill for responsive images
          objectFit="cover" // Ensures the image covers the container without stretching
        />
      </div>
      <div className="p-2 md:p-5 lg:p-2">
        <h3 className="text-[20px] md:text-[20px] lg:text-[20px] pl-2 pt-2 text-blue-900 font-semibold mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-[15px] pl-2 font-medium text-gray-400 mb-2">
          {date}
        </p>
        <p className="text-xs md:text-sm lg:text-[14px] text-gray-700 pl-2 line-clamp-3">
          {description}
        </p>

        <Link href={`/blogs/${id}`} passHref legacyBehavior>
          <a className="text-sky-500 pl-2 hover:underline mt-5 block text-sm md:text-base lg:text-[16px]">
            Continue reading <span className="pl-1">&gt;</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
