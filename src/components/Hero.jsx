import React, { useRef } from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react"

const Hero = () => {
  const heroRef = useRef(null);
  const textRef= useRef(null)
  
  useGSAP(()=>{
    const multimed = window.matchMedia("(min-width:1000px)");
    const timeline = gsap.timeline();
    if(multimed){
      timeline.fromTo(
        heroRef.current,
        {
          x:200,
          opacity:0,
        },
        {
          x:0,
          opacity:1,
          duration:1.2,
          delay:0.5,
        });
        timeline.fromTo(
          textRef.current,
          {
            y:100,
            opacity:0,
          },
          {
            y:0,
            opacity: 1,
            ease: 'back'
          }
        )
    }

  }, [])
  return (
    <div className=' h-[calc(100vh-80px)] overflow-hidden'>
      <div className=' h-full '>

    <div className=' gap-10 lg:flex h-full '>
      {/* <div className='bg-yellow-200 flex> */}
        <div ref={textRef} className='h-1/2 md:h-full flex flex-col items-center justify-center text-center'>
      
          <div className='w-1/2 flex flex-col gap-6 items-center'>
        <h1 className='gradient__text text-[32px] lg:text-[72px] font-bold leading-tight'>Welcome to AOC Hotel</h1>
        <div className='flex items-center gap-1'>
        <span class="w-10 h-[3px] bg-gray-500"></span>   <h2 className=''>HOTELS AND BARS</h2><span class="w-10 h-[3px] bg-gray-500"></span>
        </div>
        <p className='text-gray-200 font-medium lg:text-xl text-[16px]'>Lorem ipsum dolor sit amet consectetur, luptate quia? Totam pariatur liber</p>
      </div>
        </div>
      <div className='md:h-full h-1/2 md:w-1/2'ref={heroRef}>
        <img src="/assets/hotel.avif" className='object-cover w-full h-full' alt="" />
      </div>
      </div>
      </div>
    </div>

    // </div>
  )
}

export default Hero