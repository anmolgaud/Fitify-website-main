import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='mx-0 text-white'>
      <div className='bg-aboutHeader bg-cover bg-center bg-no-repeat'>
        <div className='w-full h-[50vh] md:h-[30vh] lg:h-[50vh] flex flex-col items-center justify-center bg-black bg-opacity-50'>
          <div className=' w-[80%] md:w-[40%]'>
            <h3 className='text-center text-2xl md:text-4xl font-semibold'>About Us</h3>
            <p className='text-center font-thin mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis perferendis quidem nemo dolore, quo id dolorem esse asperiores vero!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-4 md:mx-8 lg:mx-32 mt-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-8 place-content-center place-items-center'>
          <div className='relative bg-slate-900 rounded-full overflow-hidden'>
            <div className='w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full box after:bg-about1'>
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-semibold text-4xl'>Our Story</h3>
            <p className="font-thin mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, corrupti placeat. 
              Labore ipsam corporis animi, sequi esse explicabo exercitationem,accusantium voluptas 
              iusto ut quidem ex incidunt tempore porro debitis! Distinctio.</p>
            <p className="font-thin mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto recusandae, aperiam consectetur praesentium quibusdam dolores! 
              Molestiae similique ducimus veniam incidunt rem quaerat omnis numquam assumenda. Neque incidunt id dignissimos!</p>
          </div>
        </div>
      </div>

      <div className='mx-8 mt-32'>
        <div className='grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-8 place-content-center place-items-center'>
          <div className='relative bg-slate-900 rounded-full overflow-hidden md:order-2'>
            <div className='w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full box after:bg-about2'>
            </div>
          </div>

          <div className='flex flex-col md:order-1'>
            <h3 className='font-semibold text-4xl'>Our Vision</h3>
            <p className="font-thin mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, corrupti placeat. 
              Labore ipsam corporis animi, sequi esse explicabo exercitationem,accusantium voluptas 
              iusto ut quidem ex incidunt tempore porro debitis! Distinctio.</p>
            <p className="font-thin mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto recusandae, aperiam consectetur praesentium quibusdam dolores! 
              Molestiae similique ducimus veniam incidunt rem quaerat omnis numquam assumenda. Neque incidunt id dignissimos!</p>
          </div>
        </div>
      </div>

      <div className='mx-8 mt-32'>
        <div className='grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-8 place-content-center place-items-center'>
          <div className='relative bg-slate-900 rounded-full overflow-hidden'>
            <div className='w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-full box after:bg-about3'>
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-semibold text-4xl'>Our Mision</h3>
            <p className="font-thin mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, corrupti placeat. 
              Labore ipsam corporis animi, sequi esse explicabo exercitationem,accusantium voluptas 
              iusto ut quidem ex incidunt tempore porro debitis! Distinctio.</p>
            <p className="font-thin mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto recusandae, aperiam consectetur praesentium quibusdam dolores! 
              Molestiae similique ducimus veniam incidunt rem quaerat omnis numquam assumenda. Neque incidunt id dignissimos!</p>
          </div>
        </div>
      </div>


    </div>

  )
}

export default About