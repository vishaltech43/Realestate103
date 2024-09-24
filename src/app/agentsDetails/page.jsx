import React from 'react'
import About from './about agent/About'
import ContactUs from './contact form/ContactMeForm'
import Mylisting from './Mylisting'
import AgentInfo from './agent info/AgentInfo'
import CommonBanner from '../../components/CommonBanner'
const page = () => {
  return (
    <div>
      <CommonBanner
        image={"/images/breadcrumb-agent.jpg"}
        title={" Agent"}
      />
        <div className=' border  border-gray-300 p-5 rounded-3xl'>
        <AgentInfo/>
      <About/>
      <ContactUs/>
        </div>
      
      <Mylisting/>
    </div>
  )
}

export default page
