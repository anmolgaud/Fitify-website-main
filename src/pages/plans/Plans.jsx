import React from 'react'
import {plans} from '../../constants'
import PlansCard from '../../components/PlansCard'

const Plans = () => {
  return (
    <div className='text-white'>
      <div className='bg-wrapper h-[30vh] lg:h-[50vh] bg-plansHeader bg-center bg-no-repeat bg-cover'>
        <div className='bg-slate-900 flex flex-col items-center justify-center h-[30vh] lg:h-[50vh] bg-opacity-30'>
          <div className='w-[80%] md:w-full'>
          <h3 className='text-4xl text-center font-semibold'>Membership Plans</h3>
          <p className='mt-4 text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae commodi hic ea nam</p>
          </div>
        </div>
      </div>
      
      <div className='mt-16 mx-4 md:mx-16 lg:mx-32 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {plans.map((currPlan) =>{
          return(
            <div id={currPlan.id}>
              <PlansCard {...currPlan}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans