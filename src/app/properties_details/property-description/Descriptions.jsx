import React from 'react'

const Descriptions = ({description}) => {
  return (
    <div className='container mx-auto'>
    <section className="mx-4 sm:mx-6 md:mx-10 lg:mx-[130px] border mt-10 px-6 py-8 rounded-3xl bg-white">
       <h1 className="text-blue-900 text-xl font-bold">Description</h1>
       <p className='flex text-[15px] pt-5 flex-wrap space-y-2.5'>
      {description}
       </p>
    </section></div>
  )
}

export default Descriptions
