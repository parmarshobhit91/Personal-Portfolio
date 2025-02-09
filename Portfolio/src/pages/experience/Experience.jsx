import React from 'react'

const ExperienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "Google",
    period: "2020 - 2021",
    description: "Worked as a software developer at Google.",
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Facebook",
    period: "2021 - 2022",
    description: "Worked as a software developer at Facebook.",
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Amazon",
    period: "2022 - 2023",
    description: "Worked as a software developer at Amazon.",
  },
  {
    id: 4,
    title: "Software Developer",
    company: "Microsoft",
    period: "2023 - 2024",
    description: "Worked as a software developer at Microsoft.",
  }
]



function Experience() {
  return (
    <div className='p-8 flex flex-col items-start  bg-bgPage'>
      <div className='p-8'>
      <h4 className='text-xl font-bold text-left mt-8'>Experiences</h4>
      <h1 className='text-4xl font-bold text-left mt-8'>This is experience page.</h1>
      <div className='flex flex-wrap justify-start gap-4 mx-auto p-6'>
        {ExperienceData.map((item) => (
          <div key={item.id} className='bg-cardBg p-4 rounded-xl'>
            <h2>{item.title}</h2>
            <h3>{item.company}</h3>
            <h4>{item.period}</h4>
            <p>{item.description}</p>
          </div>
        ))}
        </div>
        </div>
    </div>

  )
}

export default Experience
