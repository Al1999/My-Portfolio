import React from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <div  name = 'contact' className=' bg-gradient-to-b from-teal-700 to-zinc-900   h-screen w-full py-[10rem] px-4'>
        <div className='flex flex-col items-center'>
            <form method='POST' action="https://getform.io/f/9d614170-75cd-44ff-891a-359477527226" className='flex flex-col max-w-[600px]  w-full'>
                <div className='pb-8 flex flex-col items-center'>
                    <motion.div initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1}}
                     className='text-5xl font-bold text-zinc-100 border-b-4 border-b-teal-500'>Contact me</motion.div>

                    <motion.p initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1, delay:0.2}}
                     className='text-zinc-100/60 mt-4 text-center'>// Submit the form below or shoot me an email - alkhataby22@gmail.com</motion.p>
                </div>
                <motion.input initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1, delay:0.4}} className='bg-zinc-100/20 text-zinc-100 rounded-xl p-2' type="text" placeholder='Name' name='name' />
                <motion.input initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1, delay:0.6}} className='my-4 p-2 bg-zinc-100/20 text-zinc-100 rounded-xl' type="email" placeholder='Email' name='email' />
                <motion.textarea initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1, delay:0.8}} className='p-2 bg-zinc-100/20 text-zinc-100 rounded-xl' name="message" rows="10" placeholder='Message'></motion.textarea>
                <motion.button initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1, delay:1}}
                 className='text-white   rounded-full border-2 hover:bg-white hover:border-white hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</motion.button>
            </form>
        </div>



        
    </div>
  )
}

export default Contact