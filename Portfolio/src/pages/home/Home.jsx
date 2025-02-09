import React from 'react'
import myImage from '../../assets/shobhit.png'

function Home() {
  return (
    <body className='w-full h-[996px] px-[85.33px] py-[133.33px] flex space-x-4'>
      <div className='w-[790.67px] h-[526.67px] px-0 py-0 flex flex-col gap-[32px]'>
          <h1 className='h-[32px]'>Hey, I am Shobhit</h1>
          <p className='text-7xl'>I create websites for businesses and personals also.</p>
          <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum fugit voluptatum suscipit quod laboriosam similique repellendus quisquam, itaque expedita totam, id molestiae quos earum eos. Quia vero earum quidem.30</p>
      </div>
      <div className='w-[917.33px] h-[729.74px] px-0 py-0'>
        <img src={myImage} alt="" />
      </div>
    </body>
  )
}

export default Home
