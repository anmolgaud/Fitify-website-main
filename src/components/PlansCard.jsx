import React from 'react'
import '../pages/plans/plans.css'

const PlansCard = (props) => {
    const {name, desc, price, features} = props
  return (
    <div>
        <div className=' bg-gray2 hover:bg-opacity-50 hover:border-slate-400 hover:border-2 p-4 rounded-tr-3xl rounded-bl-3xl lg:rounded-tr-[4rem] lg:rounded-bl-[4rem]'>
        <div className='flex items-center flex-col'>
            <div className='mt-8'>
            <h3 className='text-center my-3 text-xl lg:text-2xl font-semibold'>{name}</h3>
            <p className='text-center'>{desc}</p>
            <p className='price my-4 text-center text-sky-400 text-4xl font-bold'>{price}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold font-openSans text-lg tracking-wider'>Features</h3>
                {features.map((currFt)=>{
                    return(
                        <h5 className={`mt-3 ${currFt.available ? "" : "text-gray-400"}`}>{currFt.feature}</h5>
                    )
                })}
                <button className='px-4 py-2 hover:bg-red-400 bg-sky-400 rounded-3xl my-3'>Choose Plan</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PlansCard