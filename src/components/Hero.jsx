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
    <div className='h-[calc(100vh-80px)] overflow-hidden'>

    <div className='flex mx-6  h-full '>
      <div className='flex-1 flex'>
        <div ref={textRef} className='flex flex-col gap-2 justify-center items-center'>
      
        <h1 className='gradient__text text-[72px] font-bold'>Welcome to AOC Hotel</h1>
        <div className='flex items-center gap-1'>

        <span class="w-10 h-[3px] bg-gray-500"></span>   <h2 className=''>HOTELS AND BARS</h2><span class="w-10 h-[3px] bg-gray-500"></span>
        </div>
        <p className='text-gray-200 font-medium text-xl'>Lorem ipsum dolor sit amet consectetur, luptate quia? Totam pariatur liber</p>
        </div>
      </div>
      <div className='flex-1 flex'ref={heroRef}>
        <img src="hotel.avif" className='object-cover' alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero