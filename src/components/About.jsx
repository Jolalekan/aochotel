import React from 'react'
import Container from './Container'

const About = () => {
  return (
    <Container >
        <section className='py-10 flex flex-col gap-10 '>

<div className='flex justify-center'>

     <article className='flex items-center justify-center flex-col w-2/3'>
        <h2 className='about-heading mb-10'>About Us</h2>
        <p className='text-lg text-gray-300 mb-4'>
        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa quos incidunt porro? Consequuntur nam architecto dolorem vero officiis, quia suscipit nulla fugiat! Magn
          </p> 

          <p className='text-lg text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus exercitationem similique recusandae quaerat rem amet culpa sequi repellat omnis! Quia, adipisci qui culpa repudiandae sit sapiente molestias. At, explicabo.
        </p>

     </article>

</div>

        <div className='h-[500px] w-full relative  '>
            <img src="/assets/hotel3.avif" alt="" className='h-full  object-cover' />
            <div className='h-[500px] p-4 bg-gray-100  absolute right-0 top-12 bottom-10 border rounded-md '><img src="/assets/hotel4.avif" alt="" className='h-full w-full object-cover' /></div>
        </div>

        </section>
    </Container>
  )
}

export default About