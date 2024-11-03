import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";
import BathTub from "../components/BathTub";
import About from "../components/About";


export const Container =()=> {
  return(
    <div>

      <Hero/>
      <Booking/>
      <Rooms/>
      <Gallery />
      <BathTub/>
      <About/>
    </div>
    )
}