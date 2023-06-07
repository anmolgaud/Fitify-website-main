import React from 'react'
import { testimonials } from '../constants'
import {RiDoubleQuotesL} from 'react-icons/ri'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import TestimonialCard from './TestimonialCard'
import { useState } from 'react';

const Testimonials = () => {
    const [currTestId, changeTestId] = useState(1);
    const next = () =>{
        if(currTestId === testimonials.length){
            changeTestId(1)
        }
        else{
            changeTestId(currTestId + 1)
        }
    }

    const prev = () => {
        if(currTestId === 1){
            changeTestId(testimonials.length);
        }
        else{
            changeTestId(currTestId - 1);
        }
    }

  return (
    <div className='mt-32'>
        <div className='flex items-center justify-center'>
            <div className='bg-sky-400 p-2 rounded-xl text-orange-300'>
                <RiDoubleQuotesL size='1.5rem'/>
            </div>
            <h3 className='ml-4 font-openSans font-semibold text-3xl'>Testimonials</h3>
        </div>

        <div className='flex justify-center'>
            <div>
                {testimonials.map((currTest) =>{
                    return(
                        <div className={`${currTestId === currTest.id ? 'block' : 'hidden'}`}key={currTest.id}>
                            <TestimonialCard {...currTest}/> 
                        </div>
                    )
                })}
            </div>
        </div>

        <div className='flex mt-4 justify-center'>
            <button onClick={prev} className='bg-sky-400 rounded-full p-1'><GrFormPrevious size='1.5rem'/></button>
            <button onClick={next} className='bg-sky-400 ml-4 rounded-full p-1'><GrFormNext size='1.5rem'/></button>
        </div>
    </div>
  )
}

export default Testimonials