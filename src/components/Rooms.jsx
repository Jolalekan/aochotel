import React, { useEffect, useState } from "react";
import Container from "./Container";
import gsap from "gsap";
import {useNavigate} from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Executive Room",
      desc: "Executive Royale has the following facilities",
      img1: "assets/hotel1.avif",
      spanImage1: "assets/bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "assets/car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "assets/salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "assets/wifi.png",
      spanImage4Text: "Free Wifi",
      
    },
    {
      id: 2,
      title: "Presidential Suit",
      desc: "Presidential Siut has the following facilities",
      img1: "assets/hotel3.avif",
      spanImage1: "assets/bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "assets/car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "assets/salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "assets/wifi.png",
      spanImage4Text: "Free Wifi",
      
    },
    {
      id: 3,
      title: "Executive Room",
      desc: "Executive Royale has the following facilities",
      img1: "assets/hotel3.avif",
      spanImage1: "assets/bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "assets/car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "assets/salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "assets/wifi.png",
      spanImage4Text: "Free Wifi",
    },
    {
      id: 4,
      title: "Executive Room",
      desc: "Executive Royale has the following facilities",
      img1: "assets/hotel4.avif",
      spanImage1: "assets/bathtub.png",
      spanImage1Text: "King Size Bed",
      spanImage2: "assets/car-wash.png",
      spanImage2Text: "Car Wash",
      spanImage3: "assets/salad-bowl.png",
      spanImage3Text: "Breakfast",
      spanImage4: "assets/wifi.png",
      spanImage4Text: "Free Wifi",
    },
  ]

  const handleNextSlide =()=>{
    setCurrentSlide((prevState)=>(prevState + 1) % slides.length)
  }

  const handlePrevSlide=()=>{
    setCurrentSlide((prevState)=> (prevState - 1 + slides.length) % slides.length)
  }

  const navigateToRoom =(roomId)=>{
    navigate(`/rooms/${roomId}`)
  }

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
    <Container > 
      <main className="flex flex-col gap-10 py-10">
        <div className=" flex justify-center">
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
            <div id={`slide-${index}`} 
                key={slide.id} 
                onClick={()=>navigateToRoom(slide.id)}
                className="cursor-pointer flex flex-col opacity-0"style={{transform: `translateX(-${currentSlide })`}}
                
                >
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

        </main>

        {/* <div className="w-auto bg-red-500 left-1/2 transform translate-x-1/2 flex gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-3 h-3 rounded-full ring-1 flex items-center justify-ce
                nter cursor-pointer ${
                currentSlide === index ? "scale-150 bg-gray-200" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              {currentSlide === index && (
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              )}
            </div>
          ))}
        </div> */}
 
    </Container>
  );
};

export default Rooms;
