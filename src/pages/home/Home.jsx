import React from 'react'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import Faqs from '../../components/Faqs'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <div className='mx-8 sm:mx-16 lg:mx-32 text-white'>
      <MainHeader/>
      <Programs/>
      <Values/>
      <Faqs/>
      <Testimonials/>
    </div>
  )
}

export default Home