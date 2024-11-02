import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export const NavButton = ({setOpen}) => {

    const path = useRef([]);
    const tl = useRef(null);
    const menuTl = useRef(null)

  useEffect(() => {
    path.current = [
      document.getElementById("path1"),
      document.getElementById("path2"),
      document.getElementById("path3"),
    ];

    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current
      .to(path.current[0], {
        attr: { d: "M 3 16.5 L 17 2.5" },
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(
        path.current[1],
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        0
      )
      .to(
        path.current[2],
        {
          attr: { d: "M 3 2.5 L 17 16.346" },
          duration: 0.3,
          ease: "power1.inOut",
        },
        0
      );

    return () => {
      tl.current.kill();
    };
  }, []);

  const handleClick = () => {
    setOpen((prev) => !prev);
    if (tl.current) {
      tl.current.reversed() ? tl.current.play() : tl.current.reverse();
    }

  };

  return (
   <button onClick={handleClick}  >
      <svg width="40" height="40" viewBox="0 0 23 23">
      <path 
          id="path1" 
          strokeWidth="3" 
          stroke="white" 
          strokeLinecap="round" 
          d="M 5 2.5 L 20 2.5" 
        />
        <path 
          id="path2" 
          strokeWidth="3" 
          stroke="white" 
          strokeLinecap="round" 
          d="M 4 9.423 L 20 9.423" 
        />
        <path 
          id="path3" 
          strokeWidth="3" 
          stroke="white" 
          strokeLinecap="round" 
          d="M 2 16.346 L 20 16.346" 
        />
      </svg>
    </button>
  );
};
