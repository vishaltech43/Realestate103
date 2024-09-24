import React from "react";
import AgentList from "./AgentList";

const Agentpage = () => {
  return (
    <div className="px-2 pt-20 mx-2 md:mx-16">
      <div className="flex flex-wrap -m-4 mx-auto container ">
        <AgentList />
      </div>
    </div>
  );
};

export default Agentpage;
