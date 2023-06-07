import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import {useState} from 'react';
import {IoMdMenu,IoMdClose} from 'react-icons/io'

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const handleClick = () =>{
    setshowNav(!showNav)
  }

  return (
  <>
    <div className='bg-sky-400 w-full'>
      <div className='flex flex-1 font-poppins justify-between items-center
    md:mx-8 lg:mx-32 mx-auto px-4'>
        <Link to="/">
          <h3 className='uppercase text-white font-openSans font-semibold text-3xl'>Fit<span className='text-yellow-300'>ify</span></h3>
        </Link>
      <ul className='list-none text-slate-50 hidden md:flex'>
        <li className='p-4 text-lg'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 text-lg'>
          <Link to="/about">About</Link>
        </li>
        <li className='p-4 text-lg'>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className='p-4 text-lg'>
          <Link to="/plans">Plans</Link>
        </li>
        <li className='p-4 text-lg'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className={`${showNav ? "hidden" : "static"} block md:hidden`}>
        <IoMdMenu onClick={handleClick} color='white' size="2.5rem"/>
      </div>

      <div className={`${showNav ? "" : "hidden"} block md:hidden`}>
        <IoMdClose onClick={handleClick} color='white' size="2.5rem"/>
      </div>
      </div>

      <div className={ `absolute z-50 block md:hidden ${showNav ? "fixed top-0 left-0 w-[60%] h-full border-r-4 border-zinc-100 bg-zinc-900 ease-in-out duration-500" : "fixed left-[-100%]"}`}>
      <Link to="/">
        <h3 className='uppercase ml-4 mt-2 text-white font-openSans font-semibold text-3xl'>Fit<span className='text-yellow-300'>ify</span></h3>
      </Link>
      <ul className='text-slate-50 uppercase
      p-4'>
          <li className='p-4 border-b border-gray-300'><Link onClick={handleClick} to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-300'><Link onClick={handleClick} to="/about">About</Link></li>
          <li className='p-4 border-b border-gray-300'><Link onClick={handleClick} to="/gallery">Gallery</Link></li>
          <li className='p-4 border-b border-gray-300'><Link onClick={handleClick} to="/plans">Plans</Link></li>
          <li className='p-4'><Link onClick={handleClick} to="/contact">Contact</Link></li>
      </ul>
      </div>
    </div>
  </>
  )
}

export default Navbar