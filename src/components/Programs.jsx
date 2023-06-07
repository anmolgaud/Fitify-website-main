import React from 'react'
import Card from './Card'
import {programs} from "../constants"
import {IoBarbellSharp} from "react-icons/io5"
const Programs = () => {
  return (
    <div className='my-32 flex flex-col justify-evenly'>
        <div className='flex items-center'>
            <div className='bg-sky-400 rounded-xl p-2'>
            <IoBarbellSharp className='text-orange-300' size="2rem"/>
            </div>
            <h3 className='ml-4 font-openSans font-semibold text-3xl'>Our Programs</h3>
        </div>
        <div className='my-8'>
            <ul className='grid place-items-center place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {programs.map((currProg)=>{
                    return(
                        <div key={currProg.id} className='sm:w-[50%] md:w-auto'>
                        <Card icon={currProg.icon} name={currProg.title}
                            desc={currProg.info} butn={currProg.path}/>
                        </div>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Programs