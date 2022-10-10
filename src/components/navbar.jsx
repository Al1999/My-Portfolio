/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo_b.png';
import { Link } from 'react-scroll';
import resume from '../assets/Alkhatab.pdf';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <motion.div className='fixed w-full h-[80px] flex justify-between items-center px-4  text-black text-xl'>
      <motion.div     initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 0.8, y: 0 }}
    transition={{ duration: 1 }} className='ml-4'>
        <img src={Logo} alt='Logo Image'  style={{ width: '50px' }} />
      </motion.div>

      {/* menu */}
      <ul className='hidden md:flex gap-6 mr-6 font-bold  '>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}} >
          <button className='hover:scale-110 transition duration-300 ease-in-out'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </button>

        </motion.li>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}}>
          <button className='hover:scale-110 transition duration-300 ease-in-out'>
            <Link to='aboutme' smooth={true} duration={500}>
              About
            </Link>
          </button>

        </motion.li>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}}>
        <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </button>
        </motion.li>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}}>
        <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </button>
        </motion.li>
        <motion.li initial={{opacity:0}} animate={{opacity:1, y:[20,0] }} transition={{ delay: 0.5, duration:1}}>
        <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </button>
        </motion.li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-zinc-900/70 text-zinc-200 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          </button>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link onClick={handleClick} to='aboutme' smooth={true} duration={500}>
            About
          </Link>
          </button>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </button>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
          </button>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <button className='hover:scale-110 transition duration-300 ease-in-out'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </button>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600/60'>
            <a
              className='flex mr-3 ml-6 justify-between items-center w-full text-gray-300 '
              href='https://www.linkedin.com/in/alkhatab-alrashdi-584614175'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]/60'>
            <a
              className='flex mr-3 ml-7 justify-between items-center w-full text-gray-300'
              href='https://github.com/Al1999'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px]  h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]/60'>
            <a
              className='flex mr-3 ml-7 justify-between items-center w-full text-gray-300'
              href='mailto: alkhataby22@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]/60'>
            <a
              className='flex mr-3 ml-7 justify-between items-center w-full text-gray-300'
              href={resume} download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
