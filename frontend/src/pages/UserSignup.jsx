import React, { useState , useContext } from 'react'
import { Link ,  useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {
  
    const [ email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')


const navigate = useNavigate()


const {user , setUser } = useContext(UserDataContext)


    const submitHandler = async  (e) => {
        e.preventDefault();

        
         const newUser =  {
          fullname:{
            firstname:firstname,
            lastname:lastname
        },
        email:email,
        password:password,

        }

          

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register` , newUser)

 if(response.status === 201){
  const data = response.data
  setUser(data.user)
 localStorage.setItem('token' , data.token)
  navigate('/home');

 }



        setEmail('')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')

    }
  return (
    <div>
      <div className='p-7   h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10'  src='https://tse4.mm.bing.net/th?id=OIP.j1IoWB4RR-CLtD7CAZ70yAHaDd&pid=Api&P=0&h=180' alt='' />
        <form onSubmit={(e) => {
            submitHandler(e);
        }}>
                    <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
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
        <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
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
       >Create Account</button>
       <p className='text-center'>Already have a Account? <Link to='/login'className='text-blue-600'>Login here</Link></p>
        </form>
       </div>
     <div>
       <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span>  and <span className='underline'>Terms of Service apply</span> .</p>
     </div>
        
      
    </div>
    </div>
  )
}

export default UserSignup
