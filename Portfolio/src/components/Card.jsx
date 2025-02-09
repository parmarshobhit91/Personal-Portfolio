import React from 'react'

function Card({ title, description, image}) {
  return (
    <div>
         <div className='flex flex-col justify-center items-start h-[370px] w-[405px] bg-[#F5FCFF] shadow-md rounded-xl'>   
            {image && <img className="w-[80px] h-[80px] object-cover rounded-xl" src={image} alt={title} />}
            <h1 className='text-xl font-semibold text-gray-800 mt-4'>{title}</h1>
                <p className='text-sm font-medium text-gray-600 mt-1'>{description}</p>
         </div>
    </div>
  )
}

export default Card
