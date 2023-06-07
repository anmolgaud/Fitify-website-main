import React from 'react'
import { Link } from 'react-router-dom'
import main_header from "../images/main_header.png"

const MainHeader = () => {
  return (
    <div className='my-16 flex'>
        <div className='flex flex-col items-center md:flex-row justify-between'>
            <div className='flex flex-col w-full md:w-[40%]'>
                <h3 className='text-lg text-orange-300'>#100DaysOfWorkout</h3>
                <h1 className='text-5xl font-poppins leading-tight font-semibold'>Join The Legends of <br className='hidden lg:block'/> The Fitness World</h1>
                <p className='mt-4 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis et minus dolore, aut aspernatur ea voluptates, vero qui quidem doloribus</p>
                <Link className='bg-sky-400 transition delay-75 hover:bg-[#E43F5A] mt-4 md:mt-8 px-4 py-2 rounded-md text-lg self-start' to="plans">Get Started</Link>
            </div>

            <div className='hidden md:block lg:w-[40%]'>
                <div className='bg-gradient-to-tr w-[25rem] h-[25rem] rounded-full from-orange-300'>
                <img className="object-contain" src={main_header} alt='Header background' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHeader