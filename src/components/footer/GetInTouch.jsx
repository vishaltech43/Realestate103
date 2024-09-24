import React from 'react'

const GetInTouch = ({contact}) => {
    
  return (
    <div className="p-4 md:w-1/4 w-full">
    <div>
      <h1 className="title-font text-2xl md:text-[28px] font-bold text-white mb-10">
        {contact.title}
      </h1>
      <div className="flex gap-4 items-center mb-6">
        <img
          src="/images/email.png"
          alt=""
          className="mb-4 w-7 h-7 md:w-7 md:h-8"
        />
        <div>
          {contact.email.map((email, index) => (
            <h1 key={index} className="text-gray-300 text-sm md:text-[15px] text-[10px] pt-3">
              {email}
            </h1>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mb-6 pt-4">
        <img
          src="/images/icons8-location-50.png"
          alt=""
          className="mb-4 w-5 h-5 md:w-7 md:h-7"
        />
        <div>
          <h1 className="text-gray-300 text-[12px] md:text-[15px]">
            {contact.address}
          </h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GetInTouch
