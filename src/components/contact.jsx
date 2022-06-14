import React from 'react'

const Contact = () => {
  return (
    <div  name = 'contact' className=' bg-gradient-to-t from-black to-[#03343a]   h-screen w-full py-[10rem] px-4'>
        <div className='flex flex-col items-center'>
            <form method='POST' action="https://getform.io/f/9d614170-75cd-44ff-891a-359477527226" className='flex flex-col max-w-[600px]  w-full'>
                <div className='pb-8 flex flex-col items-center'>
                    <div className='text-5xl font-bold text-white border-b-4 border-b-[#55a8aa]'>Contact me</div>

                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - alkhataby22@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] bg-zinc-200/40 text-zinc-100 rounded-xl p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-zinc-200/40 text-zinc-100 rounded-xl' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 bg-zinc-200/40 text-zinc-100 rounded-xl' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white  rounded-full border-2 hover:bg-white hover:border-white hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>



        
    </div>
  )
}

export default Contact