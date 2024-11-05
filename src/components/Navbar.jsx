import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavButton } from "./NavButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);

  // Update `scrolled` state based on scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navbar background animation on scroll
  useGSAP(() => {
    console.log("Applying GSAP styles"); // Check if this runs as expected
    if (navRef.current) {
      const padding = scrolled ? "6.4px 96px" : "32px 96px"; // Adjust padding for large screens
      const backgroundColor = scrolled ? "#040c18" : "";

      gsap.to(navRef.current, {
        backgroundColor,
        padding,
        duration: 0.5,
        ease: "back",
      });
    }
  }, [scrolled]);

  // Initialize GSAP timeline for menu
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

  // Play or reverse the timeline based on `open` state
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
        className="bg-red-300 h-20 flex justify-between items-center p-4 lg:px-24 lg:py-8 transition-all duration-500"
      >
        <a href="#" className="text-xl font-medium">AOC Hotel and Suite</a>
        
        {/* Toggle button for mobile view */}
        <nav className='lg:hidden'>
          <NavButton setOpen={setOpen} />
        </nav>
        
        {/* Main navigation for large screens */}
        <nav className='hidden lg:flex'>
          <ul className="flex gap-5 font-medium text-xl cursor-pointer">
            <li>HOME</li>
            <li>ROOMS & RATE</li>
            <li>CARE HIRE</li>
            <li>HALLS</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="bg-yellow-300 absolute md:hidden top-20 left-0 w-full overflow-hidden z-50"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col items-center gap-5 font-medium text-xl cursor-pointer p-6">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ROOMS & RATE</a></li>
          <li><a href="#">CARE HIRE</a></li>
          <li><a href="#">HALLS</a></li>
          <li><a href="#">CONTACT US</a></li>
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
