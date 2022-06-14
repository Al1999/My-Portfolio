import React from 'react'
import logo  from '../assets/logo_w.png'
const Footer = () =>{
  return (
    <footer className="footer  p-4 bg-gradient-to-b from-black to-[#03343a] text-neutral-content">
        <div className='w-full flex flex-col items-center'>
        <div className="flex flex-col items-center ">
            <img src={logo} alt='Logo Image' className='' style={{ width: '50px' }} />
            <p>Copyright © 2022 - All right reserved</p>
        </div> 
        </div>


    </footer>
  )
}

export default Footer