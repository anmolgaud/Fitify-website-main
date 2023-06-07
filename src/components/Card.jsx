import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({icon,name,desc,butn}) => {
  return (
    <div className='group bg-gray2 hover:bg-opacity-50 hover:border-slate-400 hover:border-2 p-4 rounded-tr-3xl rounded-bl-3xl lg:rounded-tr-[4rem] lg:rounded-bl-[4rem]'>
        <div className='flex items-center flex-col'>
            <div className='text-2xl group-hover:bg-[#E43F5A] p-2 rounded-2xl bg-sky-400'>{icon}</div>
            <div className='my-8'>
            <h3 className='text-center my-3 text-xl lg:text-2xl font-semibold'>{name}</h3>
            <p className='text-center'>{desc}</p>
            </div>
            <Link className={`${butn === "" ? 'hidden' : 'bg-sky-400 group-hover:bg-[#E43F5A] py-2 px-2 rounded-md'}`} to={butn}>Learn More</Link>
        </div>
    </div>
  )
}

export default Card