import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
  const [ridePopupPanel , setRidePopupPanel] = useState(true)
const ridePopupPanelRef = useRef(null)

const [confirmRidePopupPanel , setConfirmRidePopupPanel] = useState(false)
const confirmRidePopupPanelRef = useRef(null)

  
  useGSAP(function () {
    if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ ridePopupPanel ])



useGSAP(function () {
  if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(confirmRidePopupPanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ confirmRidePopupPanel ])


  return (
    <div className='h-screen'>
  <div className='fixed p-6 top-0 flex items-center justify-between w-screen '>
    <img className='w-16 ' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='' />
     <Link to='/captain-home' className=' h-10 w-10   bg-white  flex items-center justify-center rounded-full'>
          <i className=" ri-logout-box-r-line"></i>
          </Link>
  </div>
      <div className='h-3/5'>
     <img  className='h-[350px] w-full object-cover ' src=' https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif' alt='' />
      </div>
      <div className='h-2/5 p-6'>
       <CaptainDetails />
    </div>
   
    <div ref={ridePopupPanelRef} className='fixed w-full translate-y-full  z-10 bottom-0 bg-white px-3 py-10 pt-12'>
       
            <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}  />      
            </div>
            <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen translate-y-full  z-10 bottom-0 bg-white px-3 py-10 pt-12'>
            
            <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}  />      
            </div>
    </div>
  )
}

export default CaptainHome
