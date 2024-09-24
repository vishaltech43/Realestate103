import React from "react";

const Contact_banner = () => {
  const sectionStyle = {
    backgroundImage: "url('/images/address-map.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  return (
    <div className="overflow-hidden">
      <section style={sectionStyle} className="text-white flex flex-col items-center">
        <section className="text-gray-600 body-font w-full">
          <div className="container py-24 mx-auto max-w-5xl">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-2/5 sm:justify-center">
                <div className="bg-white rounded-2xl px-8 py-8 mx-4 sm:mx-auto ">
                  <h1 className="text-2xl font-serif text-black font-bold pt-4">
                    How To Find Us
                  </h1>
                  <div>
                    <div className="flex gap-3 pt-4 items-center">
                      <div className="bg-gray-300 rounded-full p-2">
                        <img src="/Images/agent-call.png" alt="Phone" className="h-6"/>
                      </div>
                      <span className="text-black">+1234567890</span>
                    </div>

                    <div className="flex gap-3 pt-4 items-center">
                      <div className="bg-gray-300 rounded-full p-2">
                        <img
                          src="/Images/agent-email.png"
                          alt="Email"
                          className="h-6"
                        />
                      </div>
                      <span className="text-black">info@realestate.com</span>
                    </div>

                    <div className="flex gap-3 pt-4 items-center">
                      <div className="bg-gray-300 rounded-full p-2">
                        <img
                          src="/Images/icons8-home-50.png"
                          alt="Address"
                          className="h-6"
                        />
                      </div>
                      <span className="text-black">
                        Lorem Ipsum is simply dummy
                      </span>
                    </div>

                    <h1 className="text-2xl font-serif text-black font-bold pt-5 pb-5">
                      Opening Hours
                    </h1>

                    <div className="flex gap-10 pb-4">
                      <div>
                        <h1>Monday-Friday</h1>
                        <h1>Saturday</h1>
                        <h1>Sunday</h1>
                      </div>
                      <div>
                        <h1>10:00 - 18:00</h1>
                        <h1>10:00 - 14:00</h1>
                        <h1>Closed</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact_banner;
