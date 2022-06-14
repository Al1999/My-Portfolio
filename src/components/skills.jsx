import React from 'react'
import cplus from "../assets/1822px-ISO_C++_Logo.svg.png"
import java from "../assets/226777.png"
import c from "../assets/926px-C_Programming_Language.svg.png"
import python from "../assets/267_Python-512.webp"
import react_js from "../assets/React-icon.svg.png"
import js from "../assets/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
import html from "../assets/1216733.png"
import css from "../assets/732190.png"


const Skills=() => {
  return (
    <div name = 'skills' className=' bg-black    h-screen w-full py-[10rem] px-4'>
        <div className='flex flex-col items-center'>
            <div className='text-5xl font-bold text-white mb-20'>Skills</div>
            <div className='grid grid-cols-3 gap-9  border-non mt-40 '>
  
                <button  className="hover:scale-105 h-80 w-80 transition duration-300 ease-in-out border-none  bg-blue-200 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={cplus} alt='Logo Image'  style={{ width: '170px' }}/>
                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-zinc-100 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={c} alt='Logo Image'  style={{ width: '170px' }}/>

                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-orange-100 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={java} alt='Logo Image'  style={{ width: '170px' }}/>
                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-yellow-200 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={python} alt='Logo Image'  style={{ width: '170px' }}/>
                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-sky-100 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        
                        <img src={react_js} alt='Logo Image'  style={{ width: '170px' }}/>

                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-zinc-700 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={js} alt='Logo Image'  style={{ width: '170px' }}/>

                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-zinc-200 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={html} alt='Logo Image'  style={{ width: '170px' }}/>

                    </div>
                </button>

                <button  className="hover:scale-105 h-80  transition duration-300 ease-in-out border-none  bg-zinc-200 rounded-3xl  shadow-xl  "> 
                    <div className='m-8 flex flex-col items-center'>
                        <img src={css} alt='Logo Image'  style={{ width: '170px' }}/>

                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Skills