import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import Container from './Container'

const About = () => {
  const aboutRef = useRef(null);
  const tlLogo = gsap.timeline();

  useEffect(() => {
    if (aboutRef.current) {
      tlLogo.fromTo(
        aboutRef.current,
        { y: 50, opacity: 0 },
        { y: 10, opacity: 1, delay: 0.5, duration: 0.5 }
      );
    }
  }, []);

  
  
  return (
    <Container>
      <section className='py-10 flex flex-col gap-10'>
        <div className='flex justify-center'>
          <article className='flex items-center justify-center flex-col p-4 lg:w-2/3'>
            <h1 ref={aboutRef} className='about-heading mb-10'>About Us</h1> 
            <p className='text-center text-lg text-gray-300 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa quos incidunt porro? Consequuntur nam architecto dolorem vero officiis, quia suscipit nulla fugiat! Magn
            </p>
            <p className='text-center text-lg text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus exercitationem similique recusandae quaerat rem amet culpa sequi repellat omnis! Quia, adipisci qui culpa repudiandae sit sapiente molestias. At, explicabo.
            </p>
          </article>
        </div>
        <div className='h-[500px] w-full relative p-3'>
          <img src="assets/hotel3.avif" alt="" className='h-full object-cover' />
          <div className='hidden md:block h-[500px] p-4 bg-gray-100 absolute right-0 top-12 bottom-10 border rounded-md'>
            <img src="assets/hotel4.avif" alt="" className='h-full w-full object-cover' />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
    