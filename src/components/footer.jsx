import React from 'react'
import logo  from '../assets/logo_w.png'
const Footer = () =>{
  return (
    <footer className="footer  p-4 bg-gradient-to-b from-zinc-900 to-teal-700 text-neutral-content">
        <div className='w-full flex flex-col items-center'>
        <div className="flex flex-col items-center ">
            <img src={logo} alt='Logo Image' className='' style={{ width: '50px' }} />
            <p className='text-zinc-100/30'>Copyright © 2022 - All right reserved</p>
        </div> 
        </div>


    </footer>
  )
}

export default Footer