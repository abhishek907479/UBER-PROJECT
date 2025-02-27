import React, { useContext } from 'react'
import { Route  ,Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import { UserDataContext } from './context/userContext'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'


const App = () => {
  const ans = useContext(UserDataContext);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={
         <UserProtectedWrapper>
         <Home />
         </UserProtectedWrapper>
            
        } />

        <Route path='/users/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        }
        />
        <Route path='/captain-home' element={<CaptainHome />} />


      </Routes>
    </div>
  )
}

export default App
