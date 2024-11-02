import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container';

const SingleRooms = () => {
  const {roomId}= useParams();
    console.log("room:", roomId)
  
    return (
    <Container>
        <div className=' '>

             <div className='flex gap-6 b'>
                {/* LEFT */}
                <div className='w-2/3'>
                    {/* TOP */}
                    <div>
                        hi
                        <img src="assets/hotel3.avif" alt="" />
                    </div>
                    {/* BOTTOM */}
                </div>
               
               RIGHT
                <div className='w-1/3'></div>
             </div>
        {/* DOWN */}
        <div></div>
        </div>
    </Container>
  )
}

export default SingleRooms