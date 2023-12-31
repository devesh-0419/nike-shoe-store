import React from 'react'
import {PlayIcon} from '@heroicons/react/24/solid';
const Clips = ({clip, imgsrc}) => {
  //  console.log('clip', clip); 
  return (
    <>
     <div className='relative h-28 w-32 rounded-xl group cursor-pointer transition-all duration-300 lg:28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14'>
       <img 
        src={imgsrc}
        alt='img/clip'
        className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500' 
        />
        <div className='bg-white blur-effect-theme absolute 2xl:top-11 2xl:left-11 xl:top-10 xl:left-11 lg:top-10 lg:left-11 md:top-9 md:left-9 sm:top-4 sm:left-5 right-0 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full group-hover:opacity-0'>
          <PlayIcon className="icon-style text-slate-900" />
        </div>
        <video
         autoPlay={true}
         loop={true}
         muted={true}
         playsInline={true}
         className='absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 rounded-xl'
        >
            <source 
            type='video/mp4' 
            src={clip}/>
        </video>
     </div>

    </>
  )
}

export default Clips