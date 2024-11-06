import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Rooms from "../components/Rooms";
import BathTub from "../components/BathTub";
import About from "../components/About";


export const Container =()=> {
  return(
    <div>

      <Hero/>
      <Booking/>
      <Rooms/>
      <BathTub/>
      <About/>
    </div>
    )
}