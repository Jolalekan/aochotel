import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import BathTub from './components/BathTub'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Rooms from './components/Rooms'
import SingleRooms from './page/SingleRooms'
import Layout from './page/Layout'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route
      path='/' element={<Layout/>}>


      <Route
        path='/' element={<Rooms/>}
        />
      <Route
        path='/rooms/:roomId' element={<SingleRooms/>}
        />

        </Route>
    </Routes> 
    
    </BrowserRouter>
    </>
  )
}

export default App
