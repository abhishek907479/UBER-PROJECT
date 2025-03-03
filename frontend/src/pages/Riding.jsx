import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed h-10 w-10 top-2 right-3  bg-white  flex items-center justify-center rounded-full'>
      <i className=" text-lg font-medium ri-home-4-fill"></i>
      </Link>
      <div className='h-1/2'>
     <img  className='h-[350px] w-full object cover ' src=' https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif' alt='' />
      </div>
      <div className='h-1/2'>
      <div>
      <div  className='flex items-center mt-5  justify-between'>
<img className='h-12 ml-3' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
<div className='text-right mr-6 mt-2'>
  <h2 className='text-lg font-medium '>Abhishek</h2>
  <h4 className='text-xl font-semibold -mt-1 -mb-1' >KL04 AB 234</h4>
  <p className='text-sm text-gray-600 '>Maruti Suzuki Alto</p>
</div>
</div>
            <div className='flex gap-2 justify-between flex-col items-center'>
              
                <div className='w-full ml-4 mt-1'>
                  
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

            </div>
        
    
            <button className='w-[90%] ml-4 mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
      </div>
  
    </div>
    </div>
  )
}

export default Riding
