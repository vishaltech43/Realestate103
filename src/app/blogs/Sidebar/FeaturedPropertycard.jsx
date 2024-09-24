import React from "react";
import Link from "next/link";
import Image from 'next/image'; 

const FeaturedPropertyCard = ({ title, image, id, date }) => {
  return (
    <div className="w-full pb-4">
      <Link href={`./properties/${id}`} legacyBehavior>
        <a>
          <div className="flex items-center hover:bg-gray-300 p-1 rounded-xl">
            <div className="relative w-16 h-16">
              <Image
                src={image}
                alt="Property"
                layout="fill" 
                objectFit="cover"
                className="rounded-lg" 
              />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-sm text-gray-500 pt-1">{date}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FeaturedPropertyCard;
