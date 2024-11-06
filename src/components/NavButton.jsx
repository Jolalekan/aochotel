// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useEffect, useRef, useState } from "react";

// export const NavButton = ({ setOpen }) => {
//   const path1 = useRef(null);
//   const path2 = useRef(null);
//   const path3 = useRef(null);
//   const tl = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     tl.current = gsap.timeline({ paused: true, reversed: true });
//     tl.current
//       .to(path1.current, { attr: { d: "M 3 16.5 L 17 2.5" }, duration: 0.3, ease: "power1.inOut" })
//       .to(path2.current, { opacity: 0, duration: 0.3, ease: "power1.inOut" }, 0)
//       .to(path3.current, { attr: { d: "M 3 2.5 L 17 16.346" }, duration: 0.3, ease: "power1.inOut" }, 0);
//     return () => {
//       tl.current.kill();
//     };
//   }, []);

//   useEffect(() => {
//     setIsOpen(open);
//     tl.current.reversed() ? tl.current.play() : tl.current.reverse();
//   }, [open]);

//   const handleClick = () => {
//     setIsOpen((prev) => !prev);
//     setOpen((prev) => !prev);
//   };

//   return (
//     <button onClick={handleClick}>
//       <svg width="40" height="40" viewBox="0 0 23 23">
//         <path id="path1" ref={path1} strokeWidth="3" stroke="white" strokeLinecap="round" d="M 5 2.5 L 20 2.5" />
//         <path id="path2" ref={path2} strokeWidth="3" stroke="white" strokeLinecap="round" d="M 4 9.423 L 20 9.423" />
//         <path id="path3" ref={path3} strokeWidth="3" stroke="white" strokeLinecap="round" d="M 2 16.346 L 20 16.346" />
//       </svg>
//     </button>
//   );
// };

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export const NavButton = ({ setOpen }) => {
  const path1 = useRef(null);
  const path2 = useRef(null);
  const path3 = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, reversed: true });

    tl.current
      .to(path1.current, {
        attr: { d: "M 3 16.5 L 17 2.5" },
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(path2.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      }, 0)
      .to(path3.current, {
        attr: { d: "M 3 2.5 L 17 16.346" },
        duration: 0.3,
        ease: "power1.inOut",
      }, 0);

    return () => {
      tl.current.kill();
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    setOpen((prev) => !prev);
    tl.current.reversed() ? tl.current.play() : tl.current.reverse();
  };

  return (
    <button onClick={handleClick}>
      <svg width="40" height="40" viewBox="0 0 23 23">
        <path
          id="path1"
          ref={path1}
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 5 2.5 L 20 2.5"
        />
        <path
          id="path2"
          ref={path2}
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 4 9.423 L 20 9.423"
        />
        <path
          id="path3"
          ref={path3}
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
        />
      </svg>
    </button>
  );
};


