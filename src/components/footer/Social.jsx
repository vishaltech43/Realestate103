import React from 'react'

const Social = ({social}) => {
  return (
    <div className="p-4 pl-3 md:w-1/6 w-full flex justify-start md:justify-center">
    <div>
      <h1 className="title-font text-2xl md:text-[28px] font-bold text-white mb-10 ">
        {social.title}
      </h1>
      <div className="flex gap-4 items-end mb-3 pt-2">
        {social.icons.slice(0, 3).map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
        ))}
      </div>
      <div className="flex gap-4 items-end ">
        {social.icons.slice(3).map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Social
