import React from 'react'
import mypic from '/Users/alkhtabalrashdy/My-Portfolio/src/assets/DSC00546-4.jpg'

const About = () => {
  return (
    <div name = 'aboutme' className=' bg-gradient-to-t from-zinc-100 to-white   h-[66rem] w-full py-[10rem] px-4'>
      <div className='flex flex-col items-center'>
        <div className='text-5xl font-bold text-zinc-500 border-b-4 border-b-zinc-700'>About Me</div>
        <div className='flex md:flex-row sm:flex-col sm:items-center gap-10 m-10'>
          <div className="avatar md:ml-40 md:mt-40  sm:mt-20 ">
                  <div className="md:w-96 mask mask-squircle hover:scale-110 sm:w-80 transition duration-300 ease-in-out">
                      <img src={mypic}  alt="/"/>
                  </div>
          </div>
      
          <p1 className="md:mt-[210px] text-zinc-500  md:mr-12 sm:text-center mr-3 ml-3  font-helvetica leading-relaxed ">
          In the past few years, I have gained experiences
           and skills that made me achieve my goals.
            Starting from developing a whole website front-end
             for the best user experience to book a ticket for a
              performance or an event in a play house to developing
               a CRM where the play house admin can manage events,
                view sales reports, and manage users' accounts. This is one example of a project that I have learned a lot from and spent my time and effort to offer the best. Skills can be learned and can be gained by going to the field
                 and working hard to achieve the standards that I put for myself. Using my skills in programming in python, Javascript, C++, C, Java,
                 and React made me strengthened my ability to develop and build programs that could help others.            </p1>
      

        </div>
      </div>


    </div>
  )
}

export default About