import React from 'react'

const QuickLink = ({quickLinks}) => {
  return (
    <div className="p-4 md:w-1/4 w-full flex justify-start md:justify-center ">
    <div>
      <h1 className="title-font text-2xl md:text-[28px] font-bold text-white mb-10">
        {quickLinks.title}
      </h1>
      <ul className="space-y-2 text-sm md:text-[16px] pt-3">
        {quickLinks.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-gray-300 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  )
}

export default QuickLink
