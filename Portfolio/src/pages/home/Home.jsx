import React from 'react';
import myImage from '../../assets/shobhit.png';
import { Link } from 'react-scroll';
import bgimg from '../../assets/background/bg18.jpg';

function Home() {
  return (
    <div className='w-full px-[70.33px] py-[133.33px] flex space-x-4'>
      <div className='w-[850.67px] h-[526.67px] flex flex-col gap-[32px]'>
        <h1 className='h-[32px] text-2xl font-bold'>Hey, I am Shobhit</h1>
        <p className='text-7xl'>I create websites for businesses and personals also.</p>
        <p className='text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum fugit voluptatum suscipit quod laboriosam similique repellendus quisquam, itaque expedita totam, id molestiae quos earum eos. Quia vero earum quidem.
        </p>
        <div>
          <Link to='contact' smooth={true} duration={500} className='px-6 py-2 text-lg font-medium text-white border border-white hover:bg-black rounded-xl'>
            Get In Touch
          </Link>
        </div>
      </div>
      <div className='w-[800.33px] h-[586px] flex justify-center items-center'>
        {/* <img className="w-full h-auto object-contain" src={myImage} alt="Shobhit" /> */}
      </div>
    </div>
  );
}

export default Home;
