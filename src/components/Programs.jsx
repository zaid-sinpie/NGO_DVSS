import React from 'react'
import Program from './Program.jsx'
import { programData } from '../programData.jsx'

const Programs = () => {
  return (
    <section className='h-screen max-xl:h-auto w-screen flex flex-col items-center mx-4 max-sm:mx-0 max-sm:px-2 justify-center max-sm:justify-start max-lg:justify-start gap-[2rem]'>
        <header className='w-full flex items-start justify-center mt-6 pointer-events-none'>
            <h1 className='uppercase text-[#fff] text-[28px] max-sm:text-[12px] font-semibold px-8 py-2 bg-[#4e4d4d8c] rounded-md'>our programs includes</h1>
        </header>
        <div className='flex flex-wrap max-sm:flex-col item-center justify-around gap-4 w-[80%] max-sm:w-auto'>
            {
                programData.map((item,index)=>{
                    return <Program key={index} {...item} />
                })
            }
        </div>
    </section>
  )
}

export default Programs
