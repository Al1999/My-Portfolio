import React from 'react'
import mypic from '/Users/alkhtabalrashdy/My-Portfolio/src/assets/DSC00546-4.jpg'
import { motion} from 'framer-motion'
const About = () => {
  return (
    <div name = 'aboutme' className=' bg-gradient-to-b from-cyan-900 to-teal-700   h-[66rem] w-full py-[10rem] px-4'>
      <div className='flex flex-col items-center'>
        <motion.div initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1}} className='text-5xl font-bold text-zinc-100 border-b-4 border-b-teal-600'>About Me</motion.div>
        <motion.div initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1 , y:0}} viewport={{ once: true, amount: 0.8 }} transition={{duration:1, delay:0.5}}  className='flex md:flex-row sm:flex-col sm:items-center gap-10 m-10'>
          <div className="avatar md:ml-40 md:mt-40  sm:mt-20 ">
                  <div className="md:w-96 mask mask-squircle  sm:w-80">
                      <img src={mypic}  alt="/"/>
                  </div>
          </div>
      
          <p1 className="md:mt-[210px] text-zinc-100  md:mr-12 sm:text-center mr-3 ml-3  font-helvetica leading-relaxed ">
          In the past few years, I have gained experiences
           and skills that made me achieve my goals.
            Starting from developing a whole website front-end
             for the best user experience to book a ticket for a
              performance or an event in a play house to developing
               a CRM where the play house admin can manage events,
                view sales reports, and manage users' accounts. This is one example of a project that I have learned a lot from and spent my time and effort to offer the best. Skills can be learned and can be gained by going to the field
                 and working hard to achieve the standards that I put for myself. Using my skills in programming in python, Javascript, C++, C, Java,
                 and React made me strengthened my ability to develop and build programs that could help others.            </p1>
      

        </motion.div>
      </div>


    </div>
  )
}

export default About