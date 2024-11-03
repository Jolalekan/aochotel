import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <Container>
    <div className='color-footer p-4 grid grid-cols-2 md:flex items-center justify-between py-10'>
        {/* RIGHT */}
        <div className='flex items-center '>
            <img src="/assets/bathtub.png" alt="" />
        </div>

        <div>
            <h2 className='text-center lg:text-[24px] mb-2 font-medium'>LINK</h2>
            <ul className='items-center flex flex-col  font-medium text-[12px] lg:text-[16px]'>
                <li><a href="">HOME</a></li>
                <li><a href="">ROOMS</a></li>
                <li><a href="">GALLERY</a></li>
                <li><a href="">CONTACT</a></li>
                
            </ul>
        </div>

        <div>
        <h2 className='text-center lg:text-[24px] mb-2 font-medium'>COMPANY</h2>
        <ul className='items-center flex flex-col  font-medium text-[12px] lg:text-[16px]'>
        <li><a href="">ABOUT</a></li>
        <li><a href="">TERMS & CONDITION</a></li>
        <li><a href="">PRIVACY POLICY</a></li>
        <li><a href="">PRIVACY POLICY</a></li>
        </ul>
        </div>
        
        <div>
        <h2 className='lg:text-[24px] text-center mb-2 font-medium'>CONTACT</h2>
            
            <div className='items-center flex flex-col gap-6'>

                <div className='flex  gap-3'>
                    <span><img src="/assets/phone.png" className='w-6 h-6' alt="" /></span>
                   <h2 className='font-medium text-[12px]'> +23480-343-4343 </h2>
                </div>
                <div className='flex gap-3'>
                <span><img src="/assets/mail.png"  className='w-6 h-6' alt="" /></span>
                <h2>info@aoc@gmail.com</h2>
                </div>
                <div>
                <form action="" className='flex flex-col gap-2'>
                    <input 
                        type="text" 
                        placeholder='Enter Your Email'
                        className='p-2 rounded-md text-gray-900 text-center focus:outline-none' />
                    <button className='bg-yellow-400 p-2 rounded-md hover:opacity-70 cursor-pointer'>
                        SUBSCIBE TO OUR NEWS LETTER
                    </button>
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