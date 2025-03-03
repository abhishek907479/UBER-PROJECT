import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
     props.setFinishRidePanel(false)
     
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Finish this Ride </h3>
<div className='flex items-center justify-between mt-4 p-4 border-2 border-yellow-50 rounded-lg '>
<div className='flex items-center gap-3 '>
  <img  className='w-12 h-12 rounded-full object-cover '  src='https://i.pinimg.com/originals/0f/3c/3c/0f3c3c76a16f10d43bf0b0c144cea281.png'  alt=''/>
  <h2 className='text-lg font-medium '>Sniya</h2>
</div>
<h5 className='text-lg font-semibold'>2.2 KM</h5>
</div>
      <div className='flex gap-2 justify-between flex-col items-center'>
        
          <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 '>
                  <i className="ri-map-pin-user-fill"></i>
                  <div>
                      <h3 className='text-lg font-medium'>562/11-A</h3>
                      <p>Kankariya Talab, Bhoapal</p>
                  </div>
              </div>
              <div className='flex items-center gap-5 p-3 '>
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                      <h3 className='text-lg font-medium'>562/11-A</h3>
                      <p>Kankariya Talab, Bhoapal</p>
                  </div>
              </div>
              <div className='flex items-center gap-5 p-3'>
                  <i className="ri-currency-line"></i>
                  <div>
                      <h3 className='text-lg font-medium '>₹193.20</h3>
                      <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                  </div>
              </div>
          </div>
       <div className='mt-10  w-full'>
    
      <Link  to='/captain-home' className='w-full text-lg  flex justify-center mt-1 bg-red-600 text-white-700   font-semibold p-3 rounded-lg'>Finish Ride</Link>
       
     
      
       </div>
      </div>
</div>
  )
}

export default FinishRide
