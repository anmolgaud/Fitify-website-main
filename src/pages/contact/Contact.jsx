import React from 'react'
import './contact.css'
import {MdEmail, MdWhatsapp} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='text-white'>
      <div className='bg-wrapper h-[30vh] lg:h-[50vh] bg-contactHeader bg-center bg-no-repeat bg-cover'>
        <div className='bg-slate-900 flex flex-col items-center justify-center h-[30vh] lg:h-[50vh] bg-opacity-30'>
            <div className='w-[80%] md:w-full'>
            <h3 className='text-4xl text-center font-semibold'>Get In Touch</h3>
            <p className='mt-4 text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae commodi hic ea nam</p>
            </div>
        </div>
      </div>

      <div className='my-32 mx-4 flex justify-center items-center gap-x-8 md:gap-x-32 '>
          <div className='bg-sky-400 rounded-lg p-4 hover:bg-rose-600 hover:translate-y-[-5px] transition delay-100 '>
            <MdEmail size="2.5rem"/>
          </div>
          <div className='bg-sky-400 rounded-lg p-4 hover:bg-rose-600 hover:translate-y-[-5px] transition delay-100'>
            <MdWhatsapp size="2.5rem"/>
          </div>
          <div className='bg-sky-400 rounded-lg p-4 hover:bg-rose-600 hover:translate-y-[-5px] transition delay-100'>
            <FaTelegramPlane size='2.5rem'/>
          </div>
      </div>
      
    </div>
  )
}

export default Contact