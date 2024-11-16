import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "../page/utils/menuItems";
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);
  const mm = useRef(null);
  const path1 = useRef(null);
  const path2 = useRef(null);
  const path3 = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    mm.current = gsap.matchMedia();

    mm.current.add("(max-width: 1000px)", () => {
      if (navRef.current) {
        (gsap.to)(navRef.current, {
          backgroundColor: scrolled ? "#040C18" : "",
          padding: scrolled ? "6.4px 96px" : "32px 96px",
          duration: 0.5,
          ease: "back",
        });
      }

      const tlLogo = gsap.timeline();
      tlLogo.fromTo(
        logoRef.current,
        { y: 115, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 1 }
      );
    }, []);

    mm.current.add("(min-width: 1001px)", () => {
      if (navRef.current) {
        (gsap.to)(navRef.current, {
          backgroundColor: scrolled ? "#040C18" : "",
          padding: scrolled ? "6.4px 96px" : "32px 96px",
          duration: 0.5,
          ease: "back",
        });
      }

      return () => {
        // cleanup code here (runs when it STOPS matching)
      };
    });

    return () => {
      mm.current.revert();
    };
  }, [scrolled]);

  // Initialize GSAP timeline for mobile menu
  useEffect(() => {
    if (menuRef.current) {
      tl.current = gsap.timeline({ paused: true }).to(menuRef.current, {
        height: "40vh",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Play or reverse the menu animation based on `open` state
  useEffect(() => {
    if (open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  }

  // Handle navigation with menu close
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="flex">
      <div
        className="gradient-bg fixed h-20 lg:py-16  z-50 flex w-full justify-between items-center lg:px-24 transition-all duration-500"
      >
        <div ref={logoRef}>
          <a href="#" onClick={() => navigate("/")} className="text-xl font-medium">
           <div className="flex items-center lg:gap-6">

            <img src="/assets/logo.png" height={60} width={60} alt="" />
          <span className="lg:text-[22px] text-[18px] font-medium">AOC Hotel and Suite</span>
           </div>
          </a>
        </div>
        {/* Toggle button for mobile view */}
        <nav className="lg:hidden">
          {
            open? (
              <button onClick={()=>setOpen(false)}>
                <img src="/assets/cancel.png" alt="" />
              </button>

            ): (
              
        <button onClick={toggleMenu}>
    <svg width="36" height="36" viewBox="0 0 23 23">
      <path id="path1" strokeWidth="3" stroke="white" strokeLinecap="round" d="M 5 2.5 L 20 2.5" />
      <path id="path2" strokeWidth="3" stroke="white" strokeLinecap="round" d="M 4 9.423 L 20 9.423" />
      <path id="path3" strokeWidth="3" stroke="white" strokeLinecap="round" d="M 2 16.346 L 20 16.346" />
    </svg>
  </button>
            )
          }
        </nav>
        {/* Main navigation for large screens */}
        <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
        <nav className="hidden lg:flex">
          <ul className="flex gap-5 font-medium text-xl cursor-pointer">
            {MenuItems.map((item)=>(
              <li key={item.name}>
                <a href="#" onClick={()=> handleNavigation(item.path)}>{item.name} </a>
              </li>
            ))}
          </ul>
        </nav>
            </OutsideClickHandler>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="nav-bg fixed md:hidden top-20 left-0 w-full overflow-hidden z-50"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className=" gradient__text flex flex-col items-center gap-5 font-medium text-xl cursor-pointer p-6">
            {MenuItems.map((item)=>(
              <li key={item.name}>
                <a href="#" onClick={()=>handleNavigation(item.path)}>{item.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
