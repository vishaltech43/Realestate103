import React from "react";

import Agentpage from "./AgentListing/Agentpage";
import CommonBanner from "@/components/CommonBanner";
const page = () => {
  return (
    <div className="mb-12">
      <CommonBanner
        image={"/Images/breadcrumb-agent.jpg"}
        title={"Our Agent"}
      />
      <Agentpage />
    </div>
  );
};

export default page;
