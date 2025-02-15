// import React from 'react'
// import { Link } from 'react-router-dom'
// import logoImage from '../../assets/logo.png'

// function Navbar() {
//     return (
//         <body className='font-display'>
//             <nav className='bg-white shadow-md'>
//                 <div className='w-full h-[80px] m-auto px-[85.3px] py-[5px]'>
//                     <div className='flex justify-between h-[70px] items-center px-[]'>
//                          {/* logo */}
//                         <div className='flex-shrink-0'>
//                         <img src={logoImage} alt='Logo' className='h-[70px]' />  
//                         </div>
//                         {/* nav links */}
//                         <div className='hidden md:flex space-x-8'>
//                             <Link to='/' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Home</Link>
//                             <Link to='/about' className='text-lg font-medium text-gray-600 hover:text-purple-900'>About</Link>
//                             <Link to='/skills' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Skills</Link>
//                             <Link to='/experience' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Experience</Link>
//                             <Link to='/projects' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Projects</Link>
//                         </div>
//                         {/* contact me button*/}
//                         <div>
//                             <Link to='/contact' className='px-6 py-2 text-lg font-medium text-purple-900 bg-white border border-purple-900 rounded-xl'>Contact Me</Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </body>
//     )
// }

// export default Navbar

import { Link } from "react-scroll"
import logoImage from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div className='font-display'>
            <nav className='shadow-md border border-gray-500'>
                <div className='w-full h-[80px] m-auto px-[85.3px] py-[5px]'>
                    <div className='flex justify-between h-[70px] items-center'>
                        {/* logo */}
                        <div className='flex-shrink-0'>
                            <img src={logoImage} alt='Logo' className='h-[70px]' />
                        </div>
                        {/* nav links */}
                        <div className='hidden md:flex space-x-8'>
                            <Link to='home' smooth={true} duration={500} className='text-lg font-medium px-3 py-2 rounded-4xl text-black hover:bg-white'>Home</Link>
                            <Link to='about' smooth={true} duration={500} className='text-lg font-medium  px-3 py-2 rounded-4xl text-black hover:bg-white'>About</Link>
                            <Link to='skills' smooth={true} duration={500} className='text-lg font-medium  px-3 py-2 rounded-4xl text-black hover:bg-white'>Skills</Link>
                            <Link to='experience' smooth={true} duration={500} className='text-lg font-medium  px-3 py-2 rounded-4xl text-black hover:bg-white'>Experience
                            </Link>
                            <Link to='projects' smooth={true} duration={500} className='text-lg font-medium  px-3 py-2 rounded-4xl text-black hover:bg-white'>Projects</Link>

                        </div>
                        {/* contact me button*/}
                        <div>
                            <Link to='contact' smooth={true} duration={500} className='px-6 py-2 text-lg font-medium text-[#FFFFFF]  bg-[#E6399B] border border-black hover:bg-[#4D9DE0] rounded-xl'>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
