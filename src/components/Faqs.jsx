import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import { faqs } from '../constants'
import FaqCard from './FaqCard'

const Faqs = () => {
  return (
    <div className='mt-32'>
      <div className='flex items-center'>
        <div className='bg-sky-400 p-2 rounded-xl text-orange-300'>
          <FaQuestion size="1.5rem"/>
        </div>
        <h3 className='ml-4 font-openSans font-semibold text-3xl'>FAQs</h3>
      </div>
      
      <div className='mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-16'>
          {faqs.map((currFaq) =>{
            return(
              <div className="" key={currFaq.id}>
                <FaqCard quesn={currFaq.question} ans={currFaq.answer}/>
              </div>
            )
          })}
      </div>
      </div>
    </div>
  )
}

export default Faqs