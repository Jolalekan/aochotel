import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { NavButton } from "./NavButton";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Container from "./Container";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);
  const mm = useRef(null);

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

      return () => {
        // cleanup code here (runs when it STOPS matching)
      };
    });

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

  return (
    <header>
      <div
        // ref={navRef}
        className="gradient-bg fixed h-20 lg:py-16 px-4 z-50 flex w-full justify-between items-center lg:px-24 transition-all duration-500"
      >
        <div ref={logoRef} className="flex items-center lg:gap-6">
          <a href="#" onClick={() => navigate("/")} className="text-xl font-medium">
            <img src="/assets/logo.png" height={60} width={60} alt="" />
          </a>
          <h2 className="lg:text-[22px] font-medium">AOC Hotel and Suite</h2>
        </div>
        {/* Toggle button for mobile view */}
        <nav className="lg:hidden">
          <NavButton setOpen={setOpen} />
        </nav>

        {/* Main navigation for large screens */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-5 font-medium text-xl cursor-pointer">
            <li><a href="#" onClick={() => navigate("/")}>HOME</a></li>
            <li><a href="#">ROOMS & RATE</a></li>
            <li><a href="#">CAR HIRE</a></li>
            <li><a href="#">HALLS</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="nav-bg fixed md:hidden top-20 left-0 w-full overflow-hidden z-50"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className=" gradient__text flex flex-col items-center gap-5 font-medium text-xl cursor-pointer p-6">
          <li><a href="#" onClick={() => navigate("/")}>HOME</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>ROOMS & RATE</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>CAR HIRE</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>HALLS</a></li>
          <li><a href="#" onClick={() => setOpen(false)}>CONTACT US</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
