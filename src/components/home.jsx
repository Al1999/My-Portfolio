import React from 'react'

const Home = () => {
  return (
    <div name = 'home'   className='w-full h-screen'> 
      <div className ='w-full h-screen bg-hero bg-cover'>
        <div className='flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full bg-gradient-to-t from-black'>
          <div className = 'flex flex-col justify-center md:items-center w-full px-2 py8  sm:mt-40 sm:mb-10'>
              <h1 className=' py-3 text-xl md:text-xl text-white  hover:text-indigo-600'>Hi! </h1>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home