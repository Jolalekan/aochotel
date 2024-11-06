import React from 'react'
import Container from './Container'

const BathTub = () => {
  return (
    <Container>
    <section
      className='color-footer gap-6 py-10 rounded-md'
    >
      <h2 id='bath-tub-heading' className='sr-only'>
        Bath Tub Amenities
      </h2>
      <div className='lg:grid lg:grid-cols-4 items-center gap-10 justify-center'>
        <div className='py-4 flex flex-col gap-6 items-center'>
          <img src='assets/bathtub.png' alt='Bathtub' />
          <h3 className='font-medium text-gray-200'>Master Bedrooms</h3>
        </div>
        <div className='py-4 flex flex-col gap-6 items-center'>
          <img src='assets/car-wash.png' alt='Airport Taxi' />
          <h3 className='font-medium text-gray-200'>Airport Taxi</h3>
        </div>
        <div className='py-4 flex flex-col gap-6 items-center'>
          <img src='assets/wifi.png' alt='WiFi Coverage' />
          <h3 className='font-medium text-gray-200'>WiFi Coverage</h3>
        </div>
        <div className='py-4 flex flex-col gap-6 items-center'>
          <img src='assets/salad-bowl.png' alt='Breakfast' />
          <h3 className='font-medium text-gray-200'>Breakfast</h3>
        </div>
      </div>
    </section>
  </Container>
    // <Container>
        
    //  <section className='color-footer gap-6  py-10 rounded-md'>
    //   <div className='lg:grid lg:grid-cols-4 items-center gap-10 justify-center '>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/bathtub.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>MASTER BEDROOMS</h3>
    //   </div>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/car-wash.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>AIRPORT TAXI</h3>
    //   </div>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/wifi.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>WIFI COVERAGE</h3>
    //   </div>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/salad-bowl.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>BREAKFAST</h3>
    //   </div>
    //   {/* <div className='lg:flex  '> */}
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/bathtub.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>MASTER BEDROOMS</h3>
    //   </div>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/bathtub.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>MASTER BEDROOMS</h3>
    //   </div>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/bathtub.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>MASTER BEDROOMS</h3>
    //   </div>
    //   <div className='py-4 flex flex-col gap-6 items-center'>
    //     <span><img src="assets/bathtub.png" alt="" /></span>
    //     <h3 className='font-medium text-gray-200'>MASTER BEDROOMS</h3>
    //   </div>
    //   </div>


    //  </section>

    // </Container>
  )
}

export default BathTub