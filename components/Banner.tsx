import React from 'react'

function Banner() {
  return (
    <div 
      className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div className=''>
          <h1 className='text-4xl md:text-6xl xl:text-7xl sm:2xl font-bold'>
            A Really Cool Blog
          </h1>
        </div>
      <p 
        className='mt-5 md:mt-2 text-[#333744] max-w-sm'>
          This is a blog about tech, coding, and other cool stuff. I made it with Next.js, Tailwind CSS, SanityV3, TypeScript, and is hosted on Vercel.
        </p>
    </div>
  )
}

export default Banner