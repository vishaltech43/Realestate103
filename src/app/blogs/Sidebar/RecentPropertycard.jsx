import React from "react";
import Link from "next/link";

const RecentPropertycard = ({ title, image, id,date }) => {
  return (
    <div className="w-full pb-4">
      <Link href={`./properties/${id}`} legacyBehavior>
        <a>
          <div className="flex items-center hover:bg-gray-300 p-1 rounded-xl">
            <img
              src={image}
              alt="Property"
              className="w-16 h-16 rounded-lg object-cover"
            />
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

export default RecentPropertycard;
