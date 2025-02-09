import React from 'react'
import myImage from '../../assets/shobhit.png'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div className='w-full h-[720px] px-[70.33px] py-[133.33px] flex space-x-4 bg-bgPage'>
      <div className='w-[850.67px] h-[526.67px] p-0 flex flex-col gap-[32px]'>
        {/* <div className='w-[850.67px] h-[526.67px] px-0 py-0 flex flex-col gap-[32px]'> */}
        <h1 className='h-[32px] text-primary'>Hey, I am Shobhit</h1>
        <p className='text-7xl '>I create websites for businesses and personals also.</p>
        <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum fugit voluptatum suscipit quod laboriosam similique repellendus quisquam, itaque expedita totam, id molestiae quos earum eos. Quia vero earum quidem.30</p>
        <div>
          <Link to='contact' smooth={true} duration={500} className='px-6 py-2 text-lg font-medium text-white  bg-button border border-white hover:text-buttonHover rounded-xl'>Get In Touch</Link>
        </div>
      </div>
      <div className='w-[800.33px] h-[729.74px] px-0 py-0 flex justify-center items-center bg-amber-300'>
        <img className="" src={myImage} alt="" />
      </div>
    </div>
  )
}

export default Home
