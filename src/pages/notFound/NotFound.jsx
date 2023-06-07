import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-white'> 
        <div className='flex h-[40vh] flex-col items-center justify-center'>
            <h3 className='text-8xl mt-4 font-semibold font-openSans'>404 </h3>
            <h5 className='text-4xl mt-4 font-semibold font-openSans'>Page Not Found</h5>
            <button className='bg-sky-400 px-4 py-2 mt-4 rounded-lg'><Link to="/">Go Back</Link></button>
        </div>
    </div>
  )
}

export default NotFound