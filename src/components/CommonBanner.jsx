import React from "react";

const CommonBanner = ({ image, title }) => {
  const sectionStyle = {
    position: "relative",
    backgroundImage: `url('${image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
   
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
    backgroundColor: "rgba(0, 0, 0, 0.28)",
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

        <div style={textContainerStyle} className="py-48">
          <h1 className="text-5xl font-bold  text-white mb-4">{title}</h1>
        </div>

        <div style={bottomTextContainerStyle} className="sm:min-w-12 md:w-[15%]">
          <h1 className="text-xl font-serif bg-white p-2 rounded-tl-lg rounded-tr-lg text-blue-950">
            Home/{title}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default CommonBanner;
