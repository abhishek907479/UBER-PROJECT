import React from 'react'
import { Link } from  'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className='  bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full  '>
      <img className='w-14 ml-8' src='https://tse4.mm.bing.net/th?id=OIP.j1IoWB4RR-CLtD7CAZ70yAHaDd&pid=Api&P=0&h=180' />
       <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link  to='/login' className=' flex items-cente justify-center  w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
       </div>
      </div>
    </div>
  )
}

export default Start
