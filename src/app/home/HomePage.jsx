import React from 'react';
import Herobanner from './homebanner'
import BasicDetails from './basicDetail/BasicDetails'
import GetstartedBanner from './homebanner'
import RecentPropertylist from './recent property/RecentPropertylist'
import SourceFormBanner from './sources form/SourceFormBg'
import Review from './client review/Review'
import Services from './services/Services'
import DealOfDay from './deal of the day/DealOfDay'
const HomePage = () => {
    
    return (
      <div >
        <Herobanner image={'/images/house-12.jpg'} line1text={'Your dream home is waiting.'} line2text={'Come on in.'} height={'h-[44rem]'}/>
        <BasicDetails/>
        <GetstartedBanner image={'/images/interior-1026447_1920.jpg'} line1text={'Release your dreams'} line2text={'Affordable & Attractive Homes'} height={'h-[35rem]'}/>
        <RecentPropertylist/>
        <SourceFormBanner/>
        <Services/>
        <DealOfDay/>
        <Review/>
       
      </div>
    )
  }

export default HomePage;
