import React, { useEffect } from "react";
import Container from "./container";
import gsap from "gsap";


const Rooms = () => {
  const slides = [
    {
      id: 1,
      title: "Executive Room",
      desc: "Executive Royale has the following facilities",
      img1: "hotel1.avif",
      spanImage1: "bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "wifi.png",
      spanImage4Text: "Free Wifi",
      url:"/"
      
    },
    {
      id: 2,
      title: "Presidential Suit",
      desc: "Presidential Siut has the following facilities",
      img1: "hotel3.avif",
      spanImage1: "bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "wifi.png",
      spanImage4Text: "Free Wifi",
      url:"/"
      
    },
    {
      id: 3,
      title: "Executive Room",
      desc: "Executive Royale has the following facilities",
      img1: "hotel3.avif",
      spanImage1: "bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "wifi.png",
      spanImage4Text: "Free Wifi",
      url:"/"
    },
    {
      id: 4,
      title: "Executive Room",
      desc: "Executive Royale has the following facilities",
      img1: "hotel4.avif",
      spanImage1: "bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "wifi.png",
      spanImage4Text: "Free Wifi",
      url:"/"
      
    },
  ]

    useEffect(() => {
      const timeline = gsap.timeline();
  
      slides.forEach((slide, index) => {
        timeline.to(`#slide-${index}`, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power1.inOut"
        });
      });
    }, [slides]);

    return (
    <Container>
      <div className="my-7 h-screen">
        <div className=" my-32  flex  justify-center">
          <div className=" flex-col flex items-center max-w-3xl justify-center ">
            <h2 className="about-heading   text-center text-3xl font-medium mb-12">Our Rooms</h2>
            {/* <span>TODO LOGO</span> */}

            <p className=" text-2xl text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nobis quam voluptates reprehenderit repellendus eveniet
              exercitationem, itaque accusamus corporis, assumenda placeat
              cupiditate! Eveniet, nobis sequi in reiciendis praesentium
              provident consectetur?
            </p>
          </div>
        </div>
  
        <div className="flex gap-6 transition-all ease-in-out duration-1000"> 
                  {slides.map((slide, index)=>(                  
            <div id={`slide-${index}`} key={slide.id} className="cursor-pointer flex flex-col opacity-0">
                <div className="relative mb-3">
                <img src={slide.img1}  className="w-full h-96" alt="" />
                <figcaption className="absolute bottom-4 left-4 text-3xl font-medium text-white">
                  {slide.title}
                  </figcaption>
                    </div>
                <h2 className="mb-3 text-center font-medium text-lg text-gray-200">{slide.desc}</h2>
                  
                <div className="grid grid-cols-2 gap-6  ">
                  <div className="flex items-center gap-3">
                    <span>
                      <img src={slide.spanImage1} className="text-white w-6 h-6" alt="" />
                    </span>
                    <span>{slide.spanImage1Text}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <img src={slide.spanImage2} className="text-white w-6 h-6" alt="" />
                    </span>
                    <span>{slide.spanImage3Text}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <img src={slide.spanImage3} className="text-white w-6 h-6" alt="" />
                    </span>
                    <span>{slide.spanImage3Text}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>
                      <img src={slide.spanImage4} className="text-white w-6 h-6" alt="" />
                    </span>
                    <span>{slide.spanImage4Text}</span>
                  </div>

              </div>
            </div>
          
        ))}
        </div>

        <div></div>

      </div>
    </Container>
  );
};

export default Rooms;
