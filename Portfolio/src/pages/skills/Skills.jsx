import React from 'react'
import Card from '../../components/Card'
import image1 from '../../assets/react_logo.png'


const cardData = [
    {
        title: 'Card 1',
        description: 'This is card 1',
        image: image1
    },
    {
        title: 'Card 2',
        description: 'This is card 2',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Card 3',
        description: 'This is card 3',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Card 4',
        description: 'This is card 4',
        image: 'https://via.placeholder.com/150'
    },
]



function Skills() {
    return (
        <div className='p-8 flex flex-col items-start '>
            <div className='p-8'>
                <h1 className='text-md font-bold text-left mt-8'>My Skills</h1>
                <h1 className='text-4xl font-bold text-left mt-8'>My Expertise</h1>
            </div>
            <div className='flex flex-wrap justify-start gap-4 p-8'>
                {cardData.map((item) => (
                    <Card key={item.title} title={item.title} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Skills
