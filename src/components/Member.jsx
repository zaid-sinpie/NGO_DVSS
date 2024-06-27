import React from 'react'

const Member = ({name, role}) => {
  return (
    <article className='flex flex-col justify-center items-start px-16 max-sm:px-8 py-8 bg-[#e3e3e394] flex-auto rounded-md'>
        <h1 className=''><strong>{name}</strong></h1>
        <h2 className=''>{role}</h2>
    </article>
  )
}

export default Member
