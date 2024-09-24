import React from "react";
import AdvSearchForm from "./advancePorpertySearch/AdvSearchForm";
import CommonBanner from "@/components/CommonBanner";



const page = () => {
  return (
    <div>
      <CommonBanner image={"/images/propertiespage.jpg"} title={"properties"} />
      <AdvSearchForm />
    </div>
  );
};

export default page;
