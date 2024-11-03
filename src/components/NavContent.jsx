import React from 'react'

const NavContent = ({open, setOpen}) => {
    if(!open) return null;

    const handleClose = ()=>{
        setOpen(false)
    }

  
    return (
        <div className="bg-yellow-300 h-screen w-60 ">
          <ul onClick={handleClose} className=" flex flex-col gap-5 font-medium text-xl cursor-pointer ">
            <li><a href=""> HOME</a></li>
            <li><a href="">ROOMS & RATE</a> </li>
            <li><a href="">CARE HIRE</a></li>
            <li><a href="">HALLS</a></li>
            <li><a href="">CONTACT US</a></li>
          </ul>
        </div>
        
  )
}

export default NavContent