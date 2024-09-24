import React from 'react';
import Contact_banner from './banner/Contact_banner';
import Description from './description/Description';
import Contact_Form from './contact from/Contact_Form';

const page = () => {
  return (
    <div>
      <Contact_banner/>
      <Description/>
      <Contact_Form/>
    </div>
  );
}

export default page;
