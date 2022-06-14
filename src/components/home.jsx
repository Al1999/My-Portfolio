import React from 'react'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen bg-hero2 bg-cover bg-fixed '>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full bg-zinc-900/30 '>
          <div className = 'flex flex-col justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60'>
            <div className='flex flex-col md:items-center md:mb-60 sm:items-center sm:mt-40 font-helvetica '>
              <h1 className='md:text-sm mb-2 sm:text-sm font-extralight text-zinc-200/80  hover:text-zinc-100 '>Hi! My name is </h1>
              <h1 className='md:text-5xl  sm:text-4xl font-bold text-zinc-200/95  hover:text-zinc-200 '>Al Al-Rashdi </h1>
              <h1 className='md:text-5xl sm:text-4xl font-bold text-zinc-200/70  hover:text-zinc-100'>I'm a Software Engineer.</h1>
              <button className='mt-3 text-sm font-bold  text-zinc-100  border border-zinc-100 px-6 py-2 rounded-3xl hover:text-black hover:bg-zinc-100 hover:scale-110 transition duration-300 ease-in-out'>  
                <Link to='work' smooth={true} duration={500}>
                  My work
                </Link>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Home