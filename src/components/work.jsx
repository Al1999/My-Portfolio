import React,{useState} from 'react'

import { Transition } from '@headlessui/react'


const Work = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div name = 'work'   className='w-full h-full'>
        <div className ='w-full h-full bg-hero bg-cover bg-fixed  '>
            <div className='w-full h-full bg-gradient-to-b from-black  '>
                 <div className='flex flex-col items-center py-9 '>
                    <div className='text-5xl font-bold text-white mb-1 border-b-4 border-b-[#55a8aa] mt-60'>Work</div>
                    <div className='grid grid-cols-3 gap-9 mt-20'>

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
                                    <h5 class="mb-2 ml-2 text-md text-start text-zinc-200">The Chocoholics Anonymous Data Processing software will handle data processing for requests made through provider and manager terminals via simulated keyboard inputs.</h5>
                                    <button className='border px-7 py-2 text-white rounded-full mt-24 hover:text-black hover:bg-white'>Code</button>
                            </Transition>

                        

                        </div>



                        <div  class=" col-span-2 hover:scale-105 h-96  transition duration-300 ease-in-out border-none   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl  shadow-xl  ">
                            <div class="m-8 flex flex-col items-start">
                                    <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">WonderTix</h5>
                            </div>
                            <button className='mt-[14.8rem] ml-[47.5rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div  class="hover:scale-105 h-96 w-96 transition duration-300 ease-in-out border-none   bg-gradient-to-r from-purple-400 to-yellow-400 rounded-3xl  shadow-xl  ">
                            <div class="m-8 flex flex-col items-start">
                                    <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">A.I. Wordle Solver</h5>
                            </div>
                            <button className='mt-[14.8rem] ml-[21rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div  class="hover:scale-105 h-96 w-96 transition duration-300 ease-in-out border-none   bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-3xl  shadow-xl  ">
                            <div class="m-8 flex flex-col items-start">
                                    <h5 class="mb-2 ml-2 text-2xl font-bold  text-white">C-Tran Traffic Data Processor</h5>
                            </div>
                            <button className='mt-[12.8rem] ml-[21rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div  class="hover:scale-105 h-96 w-96 transition duration-300 ease-in-out border-none   bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-3xl  shadow-xl  ">
                            <div class="m-8 flex flex-col items-start">
                                    <h5 class="mb-2 ml-2 text-2xl font-bold  text-white"> Laser Tag Game Simulator</h5>
                            </div>
                            <button className='mt-[14.8rem] ml-[21rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Work