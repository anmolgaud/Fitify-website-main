import React from 'react'
import { gallery } from '../../images';

const Gallery = () => {
  return (
    <div className='text-white'>
      <div className='bg-wrapper w-full h-[30vh] lg:h-[50vh] bg-galleryHeader bg-center bg-no-repeat bg-cover'>
        <div className='bg-slate-900 flex flex-col items-center justify-center  h-[30vh] lg:h-[50vh] bg-opacity-30'>
            <h3 className='text-4xl text-center font-semibold'>Gallery</h3>
            <p className='mt-4 text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae commodi hic ea nam</p>
        </div>
      </div>

      <div className='mx-4 lg:mx-32 mt-16 grid grid-col-1 lg:grid-cols-3'>
        {gallery.map((currImg,index) =>{
          return(
            <div className='hover:border-2 p-4 hover:p-2 transition delay-100' key={index}>
              <img className="" src={currImg} alt="galleryImg"/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery