import React from "react";
import Link from "next/link";

const GetstartedBtn = ({px,mdpx,mdp,mdtext,name}) => {
  return (
    <div >
      <Link
        href="/properties"
        className={`bg-[#1c1c82] font-sans font-bold text-[12px]  ${mdtext} text-white p-2 ${mdp} ${px} ${mdpx} hover:bg-[#2e2ea3] hover:scale-110 rounded-2xl mr-4`}
      >
        {name}
      </Link> 
    </div>   
  );
};

export default GetstartedBtn;
