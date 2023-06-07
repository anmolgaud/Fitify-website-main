import React from 'react'
import {IoDiamondSharp} from 'react-icons/io5'
import values_bg from '../images/values.jpg'
import { values } from '../constants'
import Card from './Card'

const Values = () => {
  return (
    <div className='mt-32'>
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
            <div className='relative grayscale hover:grayscale-0'>
                <img  className="object-contain" src={values_bg} alt='values image'/>
            </div>
            <div className='mt-16 lg:mt-0'>
                <div className='flex flex-col'>
                    <div className='flex'>
                    <div className='bg-sky-400 p-2 rounded-xl text-orange-300'>
                        <IoDiamondSharp size="2rem"/>
                    </div>
                    <h3 className='ml-4 font-openSans font-semibold text-3xl'>Our Values</h3>
                    </div>
                    <p className='text-lg mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, dolore? Sunt, praesentium dolore ipsam voluptate doloremque</p>
                </div>
                <div className='mt-8'>
                    <ul className='grid place-content-stretch place-items-center grid-cols-1 md:grid-cols-2 gap-8'>
                        {values.map((currVal) =>{
                            return(
                                <div key={currVal.id} className='sm:w-[50%] md:w-full'>
                                    <Card icon={currVal.icon} name={currVal.title} 
                                        desc={currVal.desc} butn=""/>
                                </div>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Values