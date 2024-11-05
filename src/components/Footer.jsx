import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container>
    <div className=' p-4  gap-5  lg:flex flex-wrap justify-between py-10'>
        {/* RIGHT */}
        <div className=' '>
            
            <img src="/assets/bathtub.png" alt="" />
            <div>
              <h2>Social Media</h2>
              <ul>
                <li><a href=""></a></li>
                </ul>  
            </div>

        </div>

        <div>
            <div></div>
            <h2 className='text-center lg:text-[24px] mb-2 font-medium'>LINK</h2>
            <ul className='items-center flex flex-col  font-medium text-[12px] lg:text-[16px]'>
                <li><a href="">HOME</a></li>
                <li><a href="">ROOMS</a></li>
                <li><a href="">GALLERY</a></li>
                <li><a href="">CONTACT</a></li>
                
            </ul>
        </div>

        <div className='flex flex-col '>
        <h2 className='text-center lg:text-[24px] mb-2 font-medium'>COMPANY</h2>
        <ul className='items-center flex flex-col  font-medium text-[12px] lg:text-[16px]'>
        <li><a href="">ABOUT</a></li>
        <li><a href="">TERMS & CONDITION</a></li>
        <li><a href="">PRIVACY POLICY</a></li>
        <li><a href="">PRIVACY POLICY</a></li>
        </ul>
        </div>
        
        <div className='flex flex-col gap-4'>
        <h2 className='lg:text-[24px] text-center mb-2 font-medium'>CONTACT</h2>
            
            <div className='items-center flex flex-col gap-6'>

                <div className='flex  gap-3'>
                    <span><img src="/assets/phone.png" className='w-6 h-6' alt="" /></span>
                   <h2 className='font-medium text-[12px]'> +23480-343-4343 </h2>
                </div>
                <div className='flex gap-3'>
                <span><img src="/assets/mail.png"  className='w-6 h-6' alt="" /></span>
                <h2 className='font-medium text-[12px]'>info@aoc@gmail.com</h2>
                </div>
                <div>
                <form action="" className='w-36' >
                    <div className='flex flex-col gap-2'>
                        <h2>Subscribe to our News Letter</h2>
                    <input 
                        type="text" 
                        placeholder=' Email'
                        className=' p-2 rounded-md text-gray-900 text-center focus:outline-none' />
                    <button className='bg-yellow-400 p-2 rounded-md hover:opacity-70 cursor-pointer'>
                         SUBSCRIBE
                    </button>
                        </div>
                </form>
            </div>
                
                </div>
        </div>
    </div>
    <div>&copy; copyright </div>
    </Container>
  )
}

export default Footer