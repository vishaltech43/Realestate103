import React from "react";
import Link from "next/link";
import Socialicons from "@/components/Socialicons";
import CallButton from "./CallButton";
import EmailButton from "./EmailButton";
const AgentCard = ({ name, id, type, image }) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-full ">
      <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-tr-[60px] hover:scale-105 hover:shadow-2xl overflow-hidden">
        <Link href={`/ourAgent/${id}`} passHref legacyBehavior>
          <a>
            <img
              className=" rounded-bl-[60px]   object-cover object-center rounded-tl-[10px] rounded-br-[10px]"
              src={image}
              alt=""
            />
            <div className="p-4">
              <h1 className="title-font text-[23px] font-bold text-blue-900 mb-1">
                {name}
              </h1>
              <div className="leading-relaxed mb-1 flex text-black text-[15px]">
                <span className=" font-medium">{type}</span>
              </div>

              <div className="flex gap-2  my-2 items-center ">
                <div>
                  <img
                    src="/Images/icons8-star-filled-50.png"
                    alt=""
                    className="h-4"
                  />
                </div>
                <div>
                  <img
                    src="/Images/icons8-star-filled-50.png"
                    alt=""
                    className="h-4"
                  />
                </div>
                <div>
                  <img
                    src="/Images/icons8-star-filled-50.png"
                    alt=""
                    className="h-4"
                  />
                </div>
                <div>
                  <img
                    src="/Images/icons8-star-filled-50.png"
                    alt=""
                    className="h-4"
                  />
                </div>
                <div>
                  <img
                    src="/Images/icons8-star-filled-50 (1).png"
                    alt=""
                    className="h-4"
                  />
                </div>
              </div>
              <h1 className="text-[15px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </a>
        </Link>
        <div className="flex gap-3 pl-4 ">
          <CallButton />
          <EmailButton />
        </div>
        <div className="flex justify-center pt-4 pb-4">
          <Socialicons />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
