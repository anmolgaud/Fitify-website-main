import React from 'react'

const TestimonialCard = (props) => {
  const {name,quote,job,avatar} = props;
  return (
    <div className='flex group flex-col items-center justify-center'>
          <div className=''>
              <img className="relative top-8 z-20 mx-auto w-16 rounded-full group-hover:border-2" src={avatar} alt='avatar'/>
          </div>
        <div className='bg-gray2 box-border group-hover:bg-opacity-20 group-hover:border-2 rounded-bl-[4rem] rounded-tr-[4rem] bg-opacity-50 p-8 relative md:w-[50%]'>
          <div className='mt-4'>
            <p className='italic font-thin'>{`"${quote}"`}</p>
            <h3 className='font-semibold font-openSans mt-4'>{name}</h3>
            <h5 className='font-thin'>{job}</h5>
          </div>
        </div>
    </div>

  )
}

export default TestimonialCard