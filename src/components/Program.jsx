import React from 'react'

const Program = ({icon, heading, details} ) => {
  return (
    <article className='flex gap-8 max-sm:gap-4 items-center max-sm:items-start justify-start px-4 py-2 cursor-pointer hover:bg-[#e3e3e394] hover:backdrop-blur-md rounded-md'>
        <span className={`text-[8rem] max-sm:text-[2rem]`}>{icon}</span>
        <span className='flex flex-col items-start justify-center'>
            <h1 className='text-3xl max-sm:text-xl font-bold'>{heading}</h1>
            <p className='text-justify'>{details}</p>
        </span>
    </article>
  )
}

export default Program
