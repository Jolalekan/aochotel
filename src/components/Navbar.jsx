import React, { useRef, useState } from "react";
import Container from "./container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [scrolled, setScrolled]= useState(false)
  const navRef = useRef(null);

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
    <Container>
      <header ref={navRef} className=" flex justify-between h-[120px] items-center ">
         <h2 className="text-2xl font-medium"> AOC Hotel and Suite</h2>
        
        <nav>
          <ul className="flex gap-5 font-medium text-xl cursor-pointer">
            <li>HOME</li>
            <li>ROOMS & RATE</li>
            <li>CARE HIRE</li>
            <li>HALLS</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
