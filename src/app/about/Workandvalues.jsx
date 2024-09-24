import React from 'react';
import Image from 'next/image'; 

const Work_values = () => {
  return (
    <div className='bg-[#f9faff]'>
      <section className="text-gray-600 body-font overflow-hidden mx-auto px-0 md:px-10 w-5/6">
        <div className="pt-28">
          <div className="flex flex-wrap">
            <Image 
              alt="ecommerce" 
              className="lg:w-2/3 w-full object-cover object-center rounded" 
              src="/images/img-1.png" 
              width={800} 
              height={600} 
            />
            <div className="lg:w-1/3 w-full lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Our Work</h2>
              <h1 className="text-black mt-4 text-[20px] title-font font-serif font-semibold mb-1">
                Lorem ipsum is a simply dummy text of the printing and typesetting industry
              </h1>

              <p className="leading-relaxed mt-6 text-[15px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A explicabo modi nam debitis totam error suscipit, porro, quibusdam quod facere ipsam.
              </p>

              <h2 className="text-sm title-font text-gray-500 tracking-widest mt-10">Our Values</h2>
              <h1 className="text-black mt-4 text-[20px] title-font font-serif font-semibold mb-1">
                It is a long established fact that a reader will be distracted
              </h1>

              <p className="leading-relaxed mt-6 text-[15px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A explicabo modi nam debitis totam error suscipit, porro, quibusdam quod facere ipsam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work_values;
