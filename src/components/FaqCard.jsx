import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FaqCard = ({quesn, ans}) => {
    const [showFaq, setshowFaq] = useState(false)
    
    const handleClick = () => {
        setshowFaq(!showFaq)
    }

  return (
    <div className='bg-gray2 rounded-2xl p-6 mt-4'>
        <div className='flex  items-center justify-between'>
            <h5 className='font-openSans font-medium'>{quesn}</h5>
            <button onClick={handleClick} className={`${showFaq===false ? 'block' : 'hidden'}`}> <AiOutlinePlus size="1.5rem"/></button>
            <button onClick={handleClick} className={`${showFaq===false ? 'hidden' : 'block'}`}> <AiOutlineMinus size="1.5rem"/></button>
        </div>
        <div className={`${showFaq===false ? 'hidden' : 'block'}`}>
            <p className='mt-2 font-openSans'>{ans}</p>
        </div>
    </div>
  )
}

export default FaqCard