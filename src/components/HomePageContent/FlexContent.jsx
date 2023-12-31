import React from 'react'

const FlexContent = ({ifExist, endpoint:{title, heading,btn,url,img,text}}) => {
  return (
    <>
    <div className={`flex items-center justify-between lg:flex-col nike-container ${ifExist?' flex-row-reverse':'flex-row'}`}>
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center'>
            <h1 className=' text-4xl sm:text-3xl font-bold text-gradient '>{heading}</h1>
            <h1 className=' text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-slate-900 font-bold filter drop-shadow'>{title}</h1>
            <p className=' xl:text-sm my-4 to-sky-900'>{text}</p>
            <a href={url} className='flex items-center' target={"_blank"} role='button'>
                <button type='button' className='button-theme bg-black text-slate-100 shadow-slate-900 py-1.5'>
                    {btn}
                </button>
            </a>
        </div>
        <div className='flex items-center justify-center relative max-w-xl lg:max-w-none w-full'>
            <img 
            src={img} 
            alt={`img/${heading}`}
            className={`w-auto object-fill transitions-theme ${ifExist?' h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12 ':'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'}`}  />
        </div>
    </div>
    </>
  )
}

export default FlexContent