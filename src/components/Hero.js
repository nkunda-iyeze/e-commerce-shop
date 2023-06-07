import React from 'react';

// import images
import womanImage from '../img/woman_hero.png';
// import links
import {Link }from 'react-router-dom'
const Hero = () => {
  return <section className='bg-pink-400 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
            {/* text */}
            <div className='flex flex-col justify-center'> 
             <div className='uppercase font-semibold flex items-center'>
              {/* pre title */}
              <div className='w-10 h-[3px] bg-red-500 mr-4'> </div>new trend
             </div>
             {/* title */}
             <h1 className='uppercase text-[70px] leading-[1.1] font-light mb-4'> autum sales 
              <br /> <span className='font-semibold'>Woman</span>
             </h1>
             <Link to='/' className="self-start text-primary font-semibold border-b-2 border-primary uppercase "> discover more</Link>
            </div>
            {/* image */}
            <div className='hidden lg:block'>
              <img src={womanImage} alt="" />
            </div>
    </div>

  </section>;
};

export default Hero;
