import React from "react";
import agentlist from "../agentInfo.json";
import AgentCard from "../AgentListing/AgentCard";
const AgentList = () => {
  return (
    <div>
      <div className="flex flex-wrap -m-4 mx-2 sm:mx-10 md:mx-3 mb-5">
        {agentlist.agents.map((agent) => (
          <AgentCard
            name={agent.name}
            key={agent.id}
            type={agent.type}
            image={agent.image}
            id={agent.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentList;
