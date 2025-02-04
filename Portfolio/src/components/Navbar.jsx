import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.png'

function Navbar() {
    return (
        <body className='font-display'>
            <nav className='bg-white shadow-md'>
                <div className='w-full h-[80px] m-auto px-[85.3px] py-[5px]'>
                    <div className='flex justify-between h-[70px] items-center px-[]'>
                         {/* logo */}
                        <div className='flex-shrink-0'>
                        <img src={logoImage} alt='Logo' className='h-[70px]' />  
                        </div>
                        {/* nav links */}
                        <div className='hidden md:flex space-x-8'>
                            <Link to='/' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Home</Link>
                            <Link to='/about' className='text-lg font-medium text-gray-600 hover:text-purple-900'>About</Link>
                            <Link to='/experience' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Experience</Link>
                            <Link to='/projects' className='text-lg font-medium text-gray-600 hover:text-purple-900'>Projects</Link>
                        </div>
                        {/* contact me button*/}
                        <div>
                            <Link to='/contact' className='px-6 py-2 text-lg font-medium text-purple-900 bg-white border border-purple-900 rounded-xl'>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </body>
    )
}

export default Navbar


{/* <img src={logoImage} alt='Logo' className='h-10' /> */ }


{/* <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/experience">Experience</Link></li>
<li><Link to="/projects">Projects</Link></li> */}

// /* Container */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 0px;
// gap: 42.67px;

// width: 1749.33px;
// height: 69.33px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
