import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const multimed = window.matchMedia("(min-width:1000px)");
    const timeline = gsap.timeline();
    if (multimed) {
      timeline.fromTo(
        heroRef.current,
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.5,
        }
      );
      timeline.fromTo(
        textRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "back",
        }
      );
    }
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="lg:flex items-center justify-center h-full lg:h-full">
        <div
          ref={textRef}
          className="h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center text-center"
        >
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="gradient__text text-[32px] lg:text-[72px] font-bold leading-tight">
              Welcome to AOC Hotel
            </h1>
            <div className="flex items-center gap-1">
              <span class="w-10 h-[3px] bg-gray-500"></span>
              <h2>HOTELS AND BARS</h2>
              <span className="w-10 h-[3px] bg-gray-500"></span>
            </div>
            <p cclassName="text-gray-200 font-medium lg:text-xl text-[16px]">
              Lorem ipsum dolor sit amet <br /> consectetur, luptate <br /> quia? Totam
              pariatur liber
            </p>
            <button
className=" lg:text-3xl gradient-bg font-bold opacity-100 hover:opacity-90 transition-opacity duration-500
ease-in-out
p-4
rounded-md
bg-gradient-to-r
from-blue-500
to-purple-500
text-white
shadow-md
hover:scale-105
"
> 
Reserve Your Room Now!
</button>

          </div>
        </div>
        <div ref={heroRef} className="h-1/2 lg:w-1/2 lg:h-full">
          <img
            src="assets/hotel.avif"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
    // <div className='bg-green-300 h-[calc(100vh-80px)] overflow-hidden'>

    // <div className='bg-red-300 gap-10 lg:flex h-full '>
    //   {/* <div className='bg-yellow-200 flex> */}
    //     <div ref={textRef} className='bg-yellow-200 h-1/2 md:h-full flex flex-col items-center justify-center text-center'>

    //       <div className='w-1/2 flex flex-col gap-6 items-center justify-center'>
    //     <h1 className='gradient__text text-[32px] lg:text-[72px] font-bold leading-tight'>Welcome to AOC Hotel</h1>
    //     <div className='flex items-center gap-1'>
    //     <span class="w-10 h-[3px] bg-gray-500"></span>   <h2 className=''>HOTELS AND BARS</h2><span class="w-10 h-[3px] bg-gray-500"></span>
    //     </div>
    //     <p className='text-gray-200 font-medium lg:text-xl text-[16px]'>Lorem ipsum dolor sit amet consectetur, luptate quia? Totam pariatur liber</p>
    //     <button className='gradient-bg rounded-md font-bold hover:opacity-75 p-6 text-3xl '>BOOK NOW</button>
    //   </div>
    //     </div>
    //   <div className='md:h-full h-1/2 md:w-1/2'ref={heroRef}>
    //     <img src="assets/hotel.avif" className='object-cover w-full h-full' alt="" />
    //   </div>
    //   </div>
    //   </div>

    // </div>
  );
};

export default Hero;
