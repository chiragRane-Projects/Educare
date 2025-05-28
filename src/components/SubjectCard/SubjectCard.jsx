import React from 'react'
import { color, delay, motion } from 'framer-motion'
import { FaComputer } from 'react-icons/fa6'
import { FaBook } from 'react-icons/fa'

const SubjectList = [
  {
    id: 1,
    name: 'Engineering',
    icon: <FaBook />,
    color: "#0063ff",
    delay: 0.2
  },
  {
    id: 1,
    name: 'English',
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3
  },
  {
    id: 1,
    name: 'Programming',
    icon: <FaBook />,
    color: "#922aee",
    delay: 0.4
  },
  {
    id: 1,
    name: 'Science',
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5
  },
  {
    id: 1,
    name: 'History',
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6
  },
  {
    id: 1,
    name: 'Psychology',
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7
  },
  {
    id: 1,
    name: 'Web Design',
    icon: <FaBook />,
    color: "#b938938",
    delay: 0.8
  },
  {
    id: 1,
    name: 'See all',
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9
  },
]

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* header Section  */}
        <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
          <h1 className='uppercase font-semibold text-orange-500'>Our tutor subjects</h1>
          <p className='font-semibold text-3xl'>Find Online Tutor in Any Subject</p>
        </div>

        {/* cards section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {SubjectList.map((subject) => {
            return(
              <motion.div 
              key={subject.id}
              initial={{ opacity: 0, x: -200}}
              whileInView={{ opacity: 1, x: 0}}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: subject.delay
              }}
              className='border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer'>
                <div style={{color: subject.color,  backgroundColor: subject.color + "20"}} className='w-10 h-10 rounded-md flex justify-center items-center font-light'>{subject.icon}</div>
                <p className='font-light'>{subject.name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SubjectCard