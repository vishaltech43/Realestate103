import React from "react";

const AgentBanner = () => {
  const sectionStyle = {
    position: "relative",
    backgroundImage: "url('/Images/breadcrumb-agent.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: -1,
  };

  const textContainerStyle = {
    position: "relative",
    textAlign: "center",
    zIndex: 2,
    marginBottom: "20px",
  };

  const bottomTextContainerStyle = {
    position: "absolute",
    bottom: 0,
    textAlign: "center",

    maxWidth: "300px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  };

  return (
    <div>
      <section
        style={sectionStyle}
        className="text-white flex flex-col items-center "
      >
        <div style={overlayStyle} />

        <div style={textContainerStyle}>
          <h1 className="text-5xl font-bold  text-white mb-4">Our Agents</h1>
        </div>

        <div style={bottomTextContainerStyle} className="sm:w-[20%] md:w-[16%]">
          <h1 className="  bg-white p-2 rounded-tl-lg rounded-tr-lg text-black">
            Home/ <span className="text-blue-950">Our Agents</span>
          </h1>
        </div>
      </section>
    </div>
  );
};
export default AgentBanner;
