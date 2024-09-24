import React from 'react';
import Work_values from './Workandvalues';
import Testimonial from './testimonials/Testimonial';
import Video from './property overview video/PropertyOvreviewVideo';
import OurWorkOverview from './OurWorkOverview';
import CommonBanner from '../../components/CommonBanner';

const page = () => {
  return (
    <div >
      <CommonBanner image={'/images/multi-family-home-1026481_1920.jpg'} title={'About'}/>
      <Work_values/>
      <OurWorkOverview/>
      <Testimonial/>
      <Video/>
    </div>
  );
}

export default page;
