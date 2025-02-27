import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const CaptainSignup = () => {
  


  const [ email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')
const [userData , setUserData] = useState('')



    const submitHandler = async (e) => {
        e.preventDefault();

        setUserData( {
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password,
            vehicle: {
              color:vehicleColor,
              plate: vehiclePlate,
              capacity: vehicleCapacity,
              type: vehicleType
            }
          }
        )

        
 

        setEmail('')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
       

    }

  
  return (
    <div>
      <div className='px-5 py-5  h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10'  src='https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png' alt='' />
        <form onSubmit={(e) => {
            submitHandler(e);
        }}>
                    <h3 className='text-lg w-full font-medium mb-2 '>What's our captain's name</h3>
                    <div className='flex gap-4 mb-5'>
                    <input
         required
        
         className='bg-[#eeeeee]  w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base '
         type='text' 
         placeholder='firstname'
         value={firstname}
         onChange={(e) => {
            setFirstname(e.target.value)
         }}
         
         />
 
 <input
         required
        
         className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base '
         type='text' 
         placeholder='lastname'
         value={lastname}
         onChange={(e) => {
            setLastname(e.target.value)
         }}
         />

                    </div>
        <h3 className='text-lg font-medium mb-2 '>What's our captain's  email</h3>
        <input
         required
        
         className='bg-[#eeeeee]  mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
         type='email' 
         placeholder='email@example.com'
         value={email}
         onChange={(e) => {
            setEmail(e.target.value)
         }}
         />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        required 
        
         className='bg-[#eeeeee]  mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => {
           setPassword(e.target.value)
        }}
        />



  
       <button
        className='bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base '
       >Create Captain Account</button>
       <p className='text-center'>Already have a Account? <Link to='/captain-login'className='text-blue-600'>Login here</Link></p>
        </form>
       </div>
     <div>
       <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span>  and <span className='underline'>Terms of Service apply</span> .</p>
     </div>
        
      
    </div>
    </div>
  )
}

export default CaptainSignup
