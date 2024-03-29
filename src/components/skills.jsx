import React from 'react'
import cplus from "../assets/1822px-ISO_C++_Logo.svg.png"
import java from "../assets/226777.png"
import c from "../assets/926px-C_Programming_Language.svg.png"
import python from "../assets/267_Python-512.webp"
import react_js from "../assets/React-icon.svg.png"
import js from "../assets/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
import html from "../assets/1216733.png"
import css from "../assets/732190.png"
import { motion } from 'framer-motion';

const Skills=() => {
  return (
    <div name = 'skills' className=' bg-teal-700   h-[66rem] w-full py-[10rem] px-4'>
        <div className='flex flex-col items-center'>
            <motion.div initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1}} className='text-5xl font-bold text-zinc-100 mb-5 border-b-4 border-b-teal-500 '>Skills</motion.div>
            <motion.div initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1}} className='text-lg font-thin text-zinc-100 '>I have worked on these languages (scroll to left)</motion.div>
            <motion.div initial={{ opacity: 0, y:40 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.8 }} transition={{duration:1}} className=' border-non mt-10 '>
            <div class="carousel carousel-center md:max-w-6xl sm:max-w-sm p-10 space-x-9  rounded-box">
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={cplus} class="rounded-box" style={{ width: '180px', height:'200px' }}/>
                </div> 
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={python} class="rounded-box" style={{ width: '200px' }}/>
                </div>  
                <div class="carousel-item bg-white mask mask-squircle px-16 py-10 rounded-3xl">
                    <img src={java} class="rounded-box" style={{ width: '170px' }}/>
                </div> 
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={react_js} class="rounded-box" style={{ width: '260px' }}/>
                </div> 
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={html} class="rounded-box" style={{ width: '180px', height:'200px' }}/>
                </div> 
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={c} class="rounded-box" style={{  width: '180px', height:'200px'}}/>
                </div>  
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={js} class="rounded-box" style={{  width: '180px', height:'200px'}}/>
                </div> 
                <div class="carousel-item bg-white mask mask-squircle px-16 py-8 rounded-3xl">
                    <img src={css} class="rounded-box" style={{  width: '180px', height:'200px' }}/>
                </div> 
            </div>


            </motion.div>
        </div>
    </div>
  )
}

export default Skills