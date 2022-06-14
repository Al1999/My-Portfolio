import React,{useState} from 'react'

import { Transition } from '@headlessui/react'


const Work = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [nav1, setNav1] = useState(false)
    const handleClick1 = () => setNav1(!nav1)

    const [nav2, setNav2] = useState(false)
    const handleClick2 = () => setNav2(!nav2)

    const [nav3, setNav3] = useState(false)
    const handleClick3 = () => setNav3(!nav3)


    const [nav4, setNav4] = useState(false)
    const handleClick4 = () => setNav4(!nav4)

  return (
    <div name = 'work'   className='w-full h-full'>
        <div className ='w-full h-full bg-hero bg-cover bg-fixed overflow-x-hidden '>
            <div className='w-full h-full bg-gradient-to-b from-black  '>
                 <div className='flex flex-col items-center py-9 '>
                    <div className='text-5xl font-bold text-white mb-1 border-b-4 border-b-[#55a8aa] mt-60'>Work</div>
                    <div className='md:grid md:grid-cols-3 md:gap-8 sm:flex sm:flex-col  sm:gap-5 sm:items-center  mt-20'>

                        <div  class="h-96 w-96 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl  shadow-xl  ">
                            <button className='mt-[21.4rem] ml-[21rem] absolute' onClick={handleClick}>
                                {!nav ?                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                :                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  rotate-45" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>}
                            </button>
                            <Transition
                            
                            show={!nav}
                            enter="transition-opacity duration-400"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class="px-9 py-10 absolute ">
                                <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">ChocAn</h5>
                            </Transition>
                            <Transition
                            show={nav}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class=" flex h-96 w-96 px-9 py-10 rounded-3xl flex-col items-start bg-zinc-800/40">
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Summary:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">The Chocoholics Anonymous Data Processing software will handle data processing for requests made through provider and manager terminals via simulated keyboard inputs.</h5>
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Coded with:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">Java</h5>
                                    <a href='/' className='hover:scale-105  transition duration-300 ease-in-out border px-7 py-2 text-white rounded-full mt-4 hover:text-black hover:bg-white'>Code</a>
                            </Transition>
                        </div>


                        <div  class=" md:col-span-2 sm:w-96 md:w-[49.7rem]  md:h-96 sm:h-[30rem]    bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl  shadow-xl  ">
                            <button className='md:mt-[21.4rem] sm:mt-[27.3rem] md:ml-[46.7rem] sm:ml-[21rem] absolute' onClick={handleClick1}>
                                {!nav1 ?                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                :                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  rotate-45" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>}
                            </button>
                            <Transition
                            
                            show={!nav1}
                            enter="transition-opacity duration-400"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class="px-9 py-10 absolute ">
                                <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">WonderTix</h5>
                            </Transition>
                            <Transition
                            show={nav1}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class=" flex md:h-96 sm:w-96 md:w-auto sm:h-[30rem] px-9 py-10 rounded-3xl flex-col items-start bg-zinc-800/40">
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Summary:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">WonderTix is ticketing system for a non-profit play house located in Portland. I have contributed in developing the front-end of the website and planning the project.</h5>
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Coded with:</h5>
                                    <h5 class="mb-2 ml-2 text-md text-start text-zinc-200">React.js, Js, Typescript, HTML5, Postgres, TailwindCSS</h5>
                                    <button className='hover:scale-105  transition duration-300 ease-in-out border px-7 py-2 text-white rounded-full  sm:mt-24 hover:text-black hover:bg-white'>Demo</button>
                            </Transition>

                        </div>

                        <div  class="md:col-span-2 md:row-span-2 sm:w-96 md:w-[49.7rem]  md:h-[49.7rem] sm:h-[30rem]  bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-3xl  shadow-xl  ">
                            
                            <button className='md:mt-[47.2rem]  sm:mt-[27.3rem] md:ml-[46.7rem] sm:ml-[21rem] absolute' onClick={handleClick3}>
                                {!nav3 ?                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                :                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  rotate-45" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>}
                            </button>
                            
                            <Transition
                            
                            show={!nav3}
                            enter="transition-opacity duration-400"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class="px-9 py-10 absolute ">
                                <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">C Tran Traffic</h5>
                            </Transition>
                            <Transition
                            show={nav3}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class=" flex md:h-[49.7rem] sm:w-96 md:w-auto sm:h-[30rem] px-9 py-10 rounded-3xl flex-col items-start bg-zinc-800/40">
                                    <h5 class="mb-1 ml-2 text-xl font-bold  text-white">Summary:</h5>
                                    <h5 class="mb-2 ml-2 text-md text-start text-zinc-200">The program would perform data gathering from C-Tran Breadcrumb records, producing and consuming to Kafka, vaildating the data, integrating the data, and then storing the data in PostgreSQL. At the end, it would perform data visualization.</h5>
                                    <h5 class="mb-1 ml-2 text-xl font-bold  text-white">Coded with:</h5>
                                    <h5 class="mb-2 ml-2 text-md text-start text-zinc-200">Python, Pandas, SQL, Kafka, Postgres</h5>
                                    <a href="https://github.com/Al1999/C-Tran-Traffic" className='hover:scale-105  transition duration-300 ease-in-out  border px-7 py-2 text-white rounded-full sm:mt-5 md:mt-[31rem] hover:text-black hover:bg-white'>Code</a>
                            </Transition>
                        </div>

                        <div  class=" h-96 w-96 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-3xl  shadow-xl  ">
                            <button className='mt-[21.4rem] ml-[21rem] absolute' onClick={handleClick2}>
                                {!nav2 ?                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                :                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  rotate-45" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>}
                            </button>
                            <Transition
                            
                            show={!nav2}
                            enter="transition-opacity duration-400"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class="px-9 py-10 absolute ">
                                <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">A.I. Wordle Solver</h5>
                            </Transition>
                            <Transition
                            show={nav2}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class=" flex h-96 w-96 px-9 py-10 rounded-3xl flex-col items-start bg-zinc-800/40">
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Summary:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">a program that would mimic the mechanics of the online Wordle game along with an intelligent agent that could play the game and achieve as accurate results as possible.</h5>
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Coded with:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">Python, Pandas</h5>
                                    <a href="https://github.com/Al1999/Wordle-Game-Solver" className='hover:scale-105  transition duration-300 ease-in-out  border px-7 py-2 text-white rounded-full mt-4 hover:text-black hover:bg-white'>Code</a>
                            </Transition>

                        </div>



                        
                        <div  class="h-96 w-96  border-none   bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-3xl  shadow-xl  ">
                            <button className='mt-[21.4rem] ml-[21rem] absolute' onClick={handleClick4}>
                                {!nav4 ?                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                :                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  rotate-45" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>}
                            </button>
                            
                            <Transition
                            
                            show={!nav4}
                            enter="transition-opacity duration-400"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class="px-9 py-10 absolute ">
                                <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">Laser Tag Game Simulator</h5>
                            </Transition>
                            <Transition
                            show={nav4}
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-600"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            class=" flex h-96 w-96 px-9 py-10 rounded-3xl flex-col items-start bg-zinc-800/40">
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Summary:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">The purpose of this program is to play the lazer tag game in a course that contains obtscals, players, and the home base where the player can reload their lazer gun. </h5>
                                    <h5 class="mb-2 ml-2 text-xl font-bold  text-white">Coded with:</h5>
                                    <h5 class="mb-4 ml-2 text-md text-start text-zinc-200">C++</h5>
                                    <a href="https://github.com/Al1999/Laser-Tag-Game-Simulator" className='hover:scale-105  transition duration-300 ease-in-out  border px-7 py-2 text-white rounded-full mt-4 hover:text-black hover:bg-white'>Code</a>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Work