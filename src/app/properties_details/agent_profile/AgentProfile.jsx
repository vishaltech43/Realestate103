import React from 'react';

const AgentProfile = ({ agent }) => {
  return (
    <div className='container mx-auto'>

    <div className='mx-4 sm:mx-4 md:mx-8 lg:mx-[130px] mt-6 border rounded-3xl bg-white '>
      <section className='flex gap-3 px-6 py-5 items-center'>
        <div>
          <img src={agent.image} alt="agent" className='w-20 rounded-full' />
        </div>
        <div>
          <h1 className='text-blue-800 font-bold'>{agent.name}</h1>
          <p className='text-[13px]'>{agent.shortDescription}</p>
          <button className='text-[15px] bg-blue-900 mt-3 text-white px-3 py-1 rounded-lg'>Contact Agent</button>
        </div>
      </section>
    </div>      
    </div>
  );
};

export default AgentProfile;
