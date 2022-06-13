import React from 'react'

const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen bg-hero bg-cover bg-fixed'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full bg-gradient-to-t from-black'>
          <div className = 'flex flex-col justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-40 sm:mb-10'>
            <div className='flex flex-col md:items-start md:mb-60 sm:items-center sm:mt-40 font-babapro '>
              <h1 className='md:text-sm sm:text-sm font-extralight text-zinc-200/80  hover:text-zinc-500 tracking-wider'>Hi! My name is </h1>
              <h1 className='md:text-4xl  sm:text-3xl font-bold text-zinc-200/95  hover:text-zinc-400 tracking-wider'>Al Al-Rashdi </h1>
              <h1 className='md:text-4xl sm:text-3xl font-bold text-zinc-200/70 tracking-wider  hover:text-zinc-400'>I'm a Software Engineer.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home