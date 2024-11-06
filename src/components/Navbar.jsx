import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { NavButton } from "./NavButton";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);

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

  useGSAP(() => {
    if (navRef.current && window.innerWidth > 768) {
      (gsap.to)(navRef.current, {
        backgroundColor: scrolled ? "#040C18" : "",
        padding: scrolled ? "6.4px 96px" : "32px 96px",
        duration: 0.5,
        ease: "back",
      });
    }
  }, [scrolled]);

  useGSAP(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    if (mediaQuery.matches) {
      const tlLogo = gsap.timeline();
      tlLogo.fromTo(
        logoRef.current,
        { y: 115, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 1 }
      );
    }
  }, []);

  // Initialize GSAP timeline for mobile menu
  useEffect(() => {
    if (menuRef.current) {
      tl.current = gsap.timeline({ paused: true })
        .to(menuRef.current, {
          height: "90vh",
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
        ref={navRef}
        className="h-20 z-50 flex w-full justify-between items-center p-4 lg:px-24 lg:py-8 transition-all duration-500"
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
        className=" nav-bg absolute md:hidden top-20 left-0 w-full overflow-hidden z-50"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="gradient__text flex flex-col items-center gap-5 font-medium text-xl cursor-pointer p-6">
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




// // import React, { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { NavButton } from "./NavButton";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false)
// //   const [scrolled, setScrolled]= useState(false)
// //   const [menuRendered, setMenuRendered] = useState(false);
// //   const navRef = useRef(null);
// //   const menuRef = useRef(null)
// //   const tl = useRef(null)

// //   useGSAP(()=>{
// //     if(navRef.current){
// //       gsap.to(navRef.current, {
// //         backgroundColor: scrolled ? "#040c18" : "",
// //         padding: scrolled ? "6.4px 96px" : "32px 96px",
// //         duration:0.5,
// //         ease: "back"
// //       })
// //     }
// // }, [scrolled]);

// // useEffect(() => {
  
// //   if (open && menuRef.current) {
// //     tl.current = gsap.timeline({ paused: true });
// //     tl.current
// //       .to(menuRef.current, {
// //         height: "90vh",
// //         opacity: 1,
// //         duration: 0.5,
// //         ease: "power1.inOut",
// //       })
// //       .reverse();
// //     tl.current.play();
// //   } else if (menuRef.current) {
// //     tl.current.reverse();
// //   }
// // }, [open]);


// //   return (
// //     <header  className="">
// //     <div className="bg-red-300 h-20 flex justify-between items-center p-4">
// //   <a href="" className="text-xl font-medium">AOC Hotel and Suite</a>
// //   <nav className=' lg:hidden '>
// //     <NavButton  setOpen={setOpen}/>
// //   </nav>

// //   <nav className='hidden lg:flex'>
// //     <ul className="flex gap-5 font-medium text-xl cursor-pointer">
// //       <li>HOME</li>
// //       <li>ROOMS & RATE</li>
// //       <li>CARE HIRE</li>
// //       <li>HALLS</li>
// //       <li>CONTACT US</li>
// //     </ul>
// //   </nav>
// //       </div> 
// //       {open && (
// //     <div
// //         ref={menuRef}
// //  className="bg-yellow-300 absolute top-115 left-0 w-full overflow-hidden"
// //  style={{ height: 0, opacity: 0 }}
// //  >
// //       <ul className=" flex flex-col items-center gap-5 font-medium text-xl cursor-pointer ">
// //         <li><a href=""> HOME</a></li>
// //         <li><a href="">ROOMS & RATE</a> </li>
// //         <li><a href="">CARE HIRE</a></li>
// //         <li><a href="">HALLS</a></li>
// //         <li><a href="">CONTACT US</a></li>
// //       </ul>
// //     </div>
// //     )} 
// // </header>
// //   );
// // };

// // export default Navbar;
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { NavButton } from "./NavButton";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navRef = useRef(null);
//   const menuRef = useRef(null);
//   const tl = useRef(null);

//   // Handle navbar background animation on scroll
//   useGSAP(() => {
//     if (navRef.current) {
//       gsap.to(navRef.current, {
//         backgroundColor: scrolled ? "#040c18" : "",
//         padding: scrolled ? "6.4px 96px" : "32px 96px",
//         duration: 0.5,
//         ease: "back"
//       });
//     }
//   }, [scrolled]);

//   // Initialize the GSAP timeline once on mount
//   useEffect(() => {
//     if (menuRef.current) {
//       tl.current = gsap.timeline({ paused: true })
//         .to(menuRef.current, {
//           height: "90vh",
//           opacity: 1,
//           duration: 0.5,
//           ease: "power1.inOut",
//         });
//     }
//   }, []);

//   // Play or reverse the timeline based on the `open` state
//   useEffect(() => {
//     if (open) {
//       tl.current.play();
//     } else {
//       tl.current.reverse();
//     }
//   }, [open]);

//   return (
//     <header className="">
//       <div ref={navRef} className="bg-red-300 h-20 flex justify-between items-center p-4 ">
//         <a href="#" className="text-xl font-medium">AOC Hotel and Suite</a>
//         <nav className='lg:hidden'>
//           <NavButton setOpen={setOpen} />
//         </nav>
//         <nav className='hidden lg:flex'>
//           <ul className="flex gap-5 font-medium text-xl cursor-pointer">
//             <li>HOME</li>
//             <li>ROOMS & RATE</li>
//             <li>CARE HIRE</li>
//             <li>HALLS</li>
//             <li>CONTACT US</li>
//           </ul>
//         </nav>
//       </div>
//       <div
//         ref={menuRef}
//         className="bg-yellow-300 absolute md:hidden top-20 left-0 w-full overflow-hidden z-50"
//         style={{ height: 0, opacity: 0 }}
//       >
//         <ul className="flex flex-col items-center gap-5 font-medium text-xl cursor-pointer">
//           <li><a href="#">HOME</a></li>
//           <li><a href="#">ROOMS & RATE</a></li>
//           <li><a href="#">CARE HIRE</a></li>
//           <li><a href="#">HALLS</a></li>
//           <li><a href="#">CONTACT US</a></li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
