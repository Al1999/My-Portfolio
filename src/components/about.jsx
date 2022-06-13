import React from 'react'
import mypic from '../assets/DSC08745.jpeg'

const About = () => {
  return (
    <div name = 'aboutme' className=' bg-gradient-to-t from-black to-[#00242e]   h-screen w-full py-[10rem] px-4'>
      <div className='flex flex-col items-center'>
        <div className='text-5xl font-bold text-white'>About Me</div>
        <div className='flex md:flex-row sm:flex-col gap-10 '>
          <div className="avatar md:ml-40 md:mt-40 sm:ml-40 sm:mt-20 ">
                  <div className="w-96 mask mask-squircle">
                      <img src={mypic} alt="/"/>
                  </div>
          </div>
      
          <p1 className="md:mt-[280px] md:mr-12 sm:text-center sm:mr-5 sm:ml-5 font-helvetica leading-relaxed ">
            My experience includes many aspects such as graphic design, programming, film creation, and many others that I have been improving myself in them to be more successful than before. My skills include Programming in Java, C++, C, and Python, photography, and adobe photoshop. I would like to say that getting older doesn't make you more expert except if you improve your skill.       
            </p1>
      

        </div>
      </div>


    </div>
  )
}

export default About