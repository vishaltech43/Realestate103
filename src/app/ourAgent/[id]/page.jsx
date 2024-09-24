import React from "react";


import About from "../../agentsDetails/about agent/About";
import ContactUs from "@/app/agentsDetails/contact form/ContactMeForm";
import Mylisting from "../../agentsDetails/agent listing propeties/Mylisting";
import agentlist from "../agentInfo.json";
import AgentInfo from "@/app/agentsDetails/agent info/AgentInfo";
import CommonBanner from "../../../components/CommonBanner";
const getDataByAgentid = (id) => {
  return agentlist.agents.find((data) => data.id == id);
};

const page = ({ params }) => {
  const { id } = params;
  const agentDetails = getDataByAgentid(id);
  console.log(agentDetails);
  return (
    <div>
<CommonBanner
        image={"/Images/breadcrumb-agent.jpg"}
        title={" Agent"}
      />
      <div className="w-5/6 mx-auto border border-gray-300 p-5 rounded-3xl mt-28">
        <AgentInfo
          id={agentDetails.id}
          name={agentDetails.name}
          type={agentDetails.type}
          mobileNo={agentDetails.mobileNo}
          whatsupNo={agentDetails.whatsupNo}
          skype={agentDetails.skype}
          image={agentDetails.image}
        />
        <About />
        <ContactUs />
      </div>

      <Mylisting name={agentDetails.name} />
    </div>
  );
};

export default page;
