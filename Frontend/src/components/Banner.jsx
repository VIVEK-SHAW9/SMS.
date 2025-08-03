import React from 'react'
import banner from "../../public/Banner.jpg"
 function Banner() {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2' mt-12 md:mt-25">
    <div className="text-4xl font-bold"></div>
   <h1 className="text-4xl">
     welcome to JIS school of Management.Top school of the west bengal{""} 
     
      className="text-pink-500" Better education for amezing world 
      
      </h1>
    </div>
    
    <div className='w-full md:w-1/2'>
    <img src={banner} className='w-80 h-90' alt='' />
    </div>
   </div>
   </>
  );
}
export default Banner; 