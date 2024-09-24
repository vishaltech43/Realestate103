import React from 'react'
import GetstartedBtn from '../../components/CommonBtn';
const Herobanner = ({image,line1text,line2text,height}) => {
    const sectionStyle = {
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }; 
  return (
    <div>
    <section 
style={sectionStyle} 
className={ `text-white ${height} text-center  py-48 flex flex-col  items-center justify-center bg-gray-100`}
>
<h1 className=" md:text-6xl text-3xl mb-1   font-serif  text-blue-950 bg-white p-2 mx-2 rounded-bl-lg rounded-tr-lg md:p-5 ">{line1text}</h1> 
<h1 className="md:text-6xl text-3xl font-serif bg-white  p-3 md:p-5 rounded-bl-lg rounded-tr-lg  text-blue-950 mt-2  mb-10 ">{line2text}</h1>
<GetstartedBtn px={'px-12px'} mdpx={'md:px-[3rem]'} mdp={'p-5'} mdtext={'md:text-[20px]'} name={'GET STARTED'}/>
</section>
</div>
  )
}

export default Herobanner
