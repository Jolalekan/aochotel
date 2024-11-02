import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavButton } from "./NavButton";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled]= useState(false)
  const navRef = useRef(null);
  const path = useRef([]);
  const tl = useRef(null);

  useGSAP(()=>{
    if(navRef.current){
      gsap.to(navRef.current, {
        backgroundColor: scrolled ? "#040c18" : "",
        padding: scrolled ? "6.4px 96px" : "32px 96px",
        duration:0.5,
        ease: "back"
      })
    }
}, [scrolled]);

  

  return (
    <header ref={navRef} className="relative h-20 flex justify-between items-center">
  <h2 className="text-xl font-medium">AOC Hotel and Suite</h2>
  <nav className=' lg:hidden absolute top-0 right-0 z-10'>
    <div className="bg-yellow-300 h-screen w-60 ">

    <NavButton setOpen={setOpen}/>
    {open && (
      <ul className=" flex flex-col gap-5 font-medium text-xl cursor-pointer absolute top-16 left-0">
        <li><a href=""> HOME</a></li>
        <li><a href="">ROOMS & RATE</a> </li>
        <li><a href="">CARE HIRE</a></li>
        <li><a href="">HALLS</a></li>
        <li><a href="">CONTACT US</a></li>
      </ul>
    )}
    </div>
  </nav>
  <nav className='hidden lg:flex'>
    <ul className="flex gap-5 font-medium text-xl cursor-pointer">
      <li>HOME</li>
      <li>ROOMS & RATE</li>
      <li>CARE HIRE</li>
      <li>HALLS</li>
      <li>CONTACT US</li>
    </ul>
  </nav>
</header>
      
      // <header ref={navRef} className="relative h-20 flex justify-between items-center ">
      //    <h2 className="text-xl font-medium "> AOC Hotel and Suite</h2>
        
      //   <nav className='items-center w-72 h-screen lg:hidden absolute top-0 right-0 z-10'>
      //     <NavButton setOpen={setOpen}/>
      //       {open && (
      //         <ul className=" bg-blue-400 h-full flex flex-col gap-5 font-medium text-xl cursor-pointer">
      //       <li>HOME</li>
      //       <li>ROOMS & RATE</li>
      //       <li>CARE HIRE</li>
      //       <li>HALLS</li>
      //       <li>CONTACT US</li>
      //     </ul>
      //     )}
      //   </nav>
      //     <nav>

      //     <ul className=" hidden md:flex gap-5 font-medium text-xl cursor-pointer">
      //       <li>HOME</li>
      //       <li>ROOMS & RATE</li>
      //       <li>CARE HIRE</li>
      //       <li>HALLS</li>
      //       <li>CONTACT US</li>
      //     </ul>
      //     </nav>
      // </header>

  );
};

export default Navbar;
