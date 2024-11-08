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
    <div className=" h-screen overflow-hidden">
      <div className="lg:flex gap-6 items-center justify-center h-full lg:h-full">
        <div
          // ref={textRef}
          className="h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center text-center"
        >   
          <div className="mt-16 px-24 flex lg:gap-6 items-center flex-col">

            <h1 className="gradient__text text-[28px] lg:text-[62px] font-bold leading-tight">
              Welcome to AOC Hotel
            </h1>
            <div className="flex items-center">
              <span class="w-10 h-[3px] bg-gray-500"></span>
              <h2>HOTELS AND BARS</h2>
              <span className="w-10 h-[3px] bg-gray-500"></span>
            </div>
            <p className="mb-2 leading-tight text-gray-200 font-medium lg:text-xl text-[16px]">
              Lorem ipsum sit amet <br /> consectetur quia? Totam
              pariatur liber
            </p>

            <div className="">

            <button
className="w-48 lg:text-3xl gradient-bg font-bold opacity-100 hover:opacity-90 transition-opacity duration-500 ease-in-out p-4 rounded-md
bg-gradient-to-r
from-blue-500
to-purple-500
text-white
shadow-lg
hover:scale-105
"
> 
Book Now!
</button>
</div>


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

  );
};

export default Hero;
